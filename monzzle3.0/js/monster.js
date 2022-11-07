$(document).ready(function () {
    addImg();
});

function imgCheck() {
    var imgs = [];  					//定義一個運算元組
    $('.image').each(function () {  	//遍歷所有圖片,將圖片
        var dfd = $.Deferred();  				//定義一個將要完成某個操作的物件
        $(this).bind('load', function () {
            dfd.resolve();  			//圖片載入完成後,表示操作成功
        });
        if (this.complete) {				//如果圖片載入狀態為完成,那麼也標識操作成功
            setTimeout(function () {
                dfd.resolve();
            }, 2000);
        }
        imgs.push(dfd);  			//將所有操作物件放入陣列中
    })
    $.when.apply(null, imgs).done(function () {  	//註冊所有操作完成後的執行方法
        $('.loader_bg').hide();
        move();
        delay();
    });
}


let isGood = false;
let isBad = false;

$('.waviy').click(() => {
    $('.navigation').css('display', 'flex');
    // isGood = false;
    // isBad = false;
});

$('#btn2').click(() => {
    $('.navigation').hide();
});

$('.left-nav').mouseover(function () {
    $('.left-nav').css('color', '#a8877d');
});

$('.left-nav').mouseout(function () {
    if (isGood) {
        $('#good').css('color', '#513A35');
        $('#bad').css('color', '#a8877d');
    } else if (isBad) {
        $('#good').css('color', '#a8877d');
        $('#bad').css('color', '#513A35');
    } else {
        $('#good').css('color', '#513A35');
        $('#bad').css('color', '#513A35');
    }
});

$('.left-nav').click(function () {
    let id = this.id;
    // console.log(id);
    if (id == 'good') {
        // console.log('is good');
        $('.good').show();
        $('.bad').hide();
        isGood = true;
        isBad = false;
    } else if (id == 'bad') {
        // console.log('id bad');
        $('.good').hide();
        $('.bad').show();
        isGood = false;
        isBad = true;
    } else {
        alert('err');
    };
});

$('.right-nav').click(function () {
    window.location = `monster_introduction.html?id=${this.id}`
});


let aa,
    b = 5,
    b2 = 4,
    m = 4,
    dataLength,
    totalLength,
    scrollWidth = 10,
    scrollPadding = 3.5,
    biggerWidth = 25,
    moveLength = 4,
    biggerLength = 3,
    toBig = true,
    toSmall = false,
    winWidth = $(window).width(),
    dataUrl = "json/monster.json";



if (winWidth <= 800 && $(window).width() < $(window).height()) {
    scrollWidth = 18;
    scrollPadding = 4;
    biggerWidth = 40;

    moveLength = 2;
    biggerLength = 2;

    b = b - 1;
    b2 = b2 - 1;


    toBig = false;
    toSmall = true;
} else if (winWidth <= 800 && $(window).width() > $(window).height()) {
    scrollWidth = 21;
    scrollPadding = 5;
    biggerWidth = 28;

    moveLength = 2;
    biggerLength = 2;

    b = b - 1;
    b2 = b2 - 1;


    toBig = false;
    toSmall = true;
}

$(window).resize(function () {
    if (winWidth > 800 && $(window).width() < 800) {
        location.reload();
    } else if (winWidth < 800 && $(window).width() > 800) {
        location.reload();
    }

});

function scrollSetting() {
    $('.scroll').css('width', `${scrollWidth}vw`);
    $('.scroll').css('padding', `${scrollPadding}vw`);
    $(`.scroll:nth-child(${b})`).css('width', `${biggerWidth}vw`);
}

function addImg() {
    axios.get(dataUrl)
        .then((data) => {
            appendImg(data);
            dataLength = data.data.length;
            totalLength = dataLength + 5;
            scrollSetting();
        })
        .catch((error) =>
            console.log(error)
        )
};

function appendImg(data) {
    let listWidth = ((((data.data.length + 5) - 1) * scrollWidth) + ((data.data.length + 5) * 2 * scrollPadding) + biggerWidth);
    $('.s-scroll').css('width', `${listWidth}vw`);

    $('#scroll-list').append(`<div class="scroll scroll0 bigger">
                                        <img src="${data.data[data.data.length - 2].imgJpg}" id="${data.data[data.data.length - 2].name}" class="image">
                                    </div>`);
    $('#scroll-list').append(`<div class="scroll scroll1 bigger">
                                        <img src="${data.data[data.data.length - 1].imgJpg}" id="${data.data[data.data.length - 1].name}" class="image">
                                    </div>`);

    for (let i = 0; i < data.data.length; i++) {
        aa = `<div class="scroll scroll${i + 2} bigger">
                        <img src="${data.data[i].imgJpg}" id="${data.data[i].name}" class="image">
                      </div>`;
        $('#scroll-list').append(aa);
    };

    $('#scroll-list').append(`<div class="scroll scroll${data.data.length + 2} bigger">
                                        <img src="${data.data[0].imgJpg}" id="${data.data[0].name}" class="image">
                                    </div>`);
    $('#scroll-list').append(`<div class="scroll scroll${data.data.length + 3} bigger">
                                        <img src="${data.data[1].imgJpg}" id="${data.data[1].name}" class="image">
                                    </div>`);
    $('#scroll-list').append(`<div class="scroll scroll${data.data.length + 4} bigger">
                                        <img src="${data.data[2].imgJpg}" id="${data.data[2].name}" class="image">
                                    </div>`);

    $('#scroll-list').css('transform', `translate(-${(scrollWidth + (scrollPadding * 2)) * 2}vw)`);

    imgCheck();
};

function move() {
    setTimeout(() => {
        $('.scroll img').addClass(`animation`);
    }, 4900);
    setTimeout(() => {

        // 16
        if (m == (totalLength - moveLength)) {
            if ($(window).width() <= 800) {
                $('.scroll-list').css('transform', `translate(${(totalLength - 3) * -(scrollWidth + (scrollPadding * 2))}vw)`);
            } else if ($(window).width() > 800) {
                $('.scroll-list').css('transform', `translate(${(m - 1) * -(scrollWidth + (scrollPadding * 2))}vw)`);
            }
            removeanimation2();
        } if (m != (totalLength - moveLength)) {
            $('.scroll-list').css('transform', `translate(${(m - 1) * -(scrollWidth + (scrollPadding * 2))}vw)`);
            m++;
        }


        if (b == (totalLength - biggerLength)) {
            if ($(window).width() <= 800) {
                $(`.scroll${totalLength - 3}`).css('width', `${scrollWidth}vw`);
                $(`.scroll${totalLength - 2}`).css('width', `${biggerWidth}vw`);
                b = 4;
                b2 = 3;
            } else if ($(window).width() > 800) {
                $(`.scroll${totalLength - biggerLength - 1}`).css('width', `${scrollWidth}vw`);
                $(`.scroll${totalLength - biggerLength}`).css('width', `${biggerWidth}vw`);
                b = 3;
                b2 = 2;
            }
        } else if (b != (totalLength - biggerLength)) {
            $(`.scroll${b}`).css('width', `${biggerWidth}vw`);
            $(`.scroll${b2}`).css('width', `${scrollWidth}vw`);
            b++;
            b2++;
        }
        move();
    }, 5000);
}

function delay() {
    setTimeout(() => {
        removeanimation();
    }, 3000);
}


function removeanimation() {
    setTimeout(() => {
        $('.scroll img').removeClass(`animation`);
        removeanimation();
    }, 5000);
}

function removeanimation2() {
    setTimeout(() => {
        if ($(window).width() <= 800) {
            m = 4;
            $(`.scroll${totalLength - 2}`).css('width', `${scrollWidth}vw`);
            $('.scroll-list').css('transform', `translate(-${(scrollWidth + scrollPadding * 2) * 2}vw)`);
            $(`.scroll3`).css('width', `${biggerWidth}vw`);
        } else if ($(window).width() > 800) {
            m = 2;
            $(`.scroll2`).css('width', `${biggerWidth}vw`);
            $(`.scroll${totalLength - 3}`).css('width', `${scrollWidth}vw`);
            $('.scroll-list').css('transform', `translate(0vw)`);
        }
        $('.scroll-list').removeClass('s-transition');
        $('.scroll').removeClass('bigger');
    }, 2000);
    setTimeout(() => {
        $('.scroll-list').addClass('s-transition');

        $('.scroll').addClass('bigger');
    }, 5000);
}

$(document).on('click', '.scroll img', function () {
    window.location = `monster_introduction.html?id=${this.id}`;
});