$(document).ready(() => {
    let winWidth = $(window).width();
    if (winWidth > 600) {
        VanillaTilt.init(document.querySelector(".box"), {
            max: 15,
            speed: 200
        });
    }
    imgCheck();
});

let isGood = false;
let isBad = false;

$('#content').click(() => {
    $('.navigation').css('display', 'flex');
    isGood = false;
    isBad = false;
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
    let id = this.id;
    // console.log(id);
    $.ajax({
        url: 'resource/monster/monster.json',
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (data) {
            // console.log('success');
            // console.log(id);
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    $('#name').text(data[i].name);
                    $('#introduction').text(data[i].data);
                    $('#card-name').text(data[i].name);
                    $('#title').text(data[i].name);
                    $('#monster-img').attr('src', `resource/monster/${data[i].id}.png`);
                    if (isGood) {
                        $('.circle').css('background', 'url(../monzzle2.0/resource/monster/good.jpg)');
                        $('.buy').css('background', 'url(../monzzle2.0/resource/monster/good.jpg)');
                    } else if (!isGood) {
                        $('.circle').css('background', 'url(../monzzle2.0/resource/monster/bad.jpg)');
                        $('.buy').css('background', 'url(../monzzle2.0/resource/monster/bad.jpg)');
                    }
                    $('.monster-content').show();
                    $('.navigation').hide();
                    move();
                };
            };
        },
        error: function () {
            alert('error');
        },
    });
    imgCheck();
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
    });
    $.when.apply(null, imgs).done(function () {  	//註冊所有操作完成後的執行方法
        $('.loader_bg').hide();
        loadedImg();
    });

    ScrollReveal({
        reset: true, distance: '60px',
        duration: 2500,
        delay: 400
    });

    function loadedImg() {
        ScrollReveal({
            reset: false,
            distance: '60px',
            duration: 2500,
            delay: 400
        });
    };
};

$('#content').mouseover(() => {
    $('.content-text p').addClass('hover');
});
$('#content').mouseout(() => {
    $('.content-text p').removeClass('hover');
});















































// $('.left-nav').click(function () {
//     let id = this.id;
//     console.log(id);

//     if (id == 'good') {
//         console.log('is good');
//         getGood();
//     } else if (id == 'bad') {
//         console.log('id bad');
//         getBad();
//     } else {
//         alert('err');
//     }
// });

// function getGood() {
//     $.ajax({
//         url: 'resource/monster/monster.json',
//         method: 'GET',
//         dataType: 'json',
//         data: '',
//         async: false,
//         success: function (data) {
//             console.log('success');
//             setGood(data);
//         },
//         error: function () {
//             console.log('error');
//         },
//     });
// }

// function getBad() {
//     $.ajax({
//         url: 'resource/monster/monster.json',
//         method: 'GET',
//         dataType: 'json',
//         data: '',
//         async: false,
//         success: function (data) {
//             console.log('success');
//             setBad(data);
//         },
//         error: function () {
//             console.log('error');
//         },
//     });
// }

// function setGood(data) {
//     $('.att-navs .right .att-nav').remove();
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].goodorbad == "正面") {
//             let aa = `<div class="right-nav" id="${data[i].id}">${data[i].name}</div>`
//             $('.att-navs .right').append(aa);
//         }
//     }
// }

// function setBad(data) {
//     // $('.att-navs .right .att-nav').remove();
//     for (let i = 0; i < data.length; i++) {
//         if (data[i].goodorbad == "負面") {
//             let aa = `<div class="right-nav" id="${data[i].id}">${data[i].name}</div>`
//             $('.att-navs .right').append(aa);
//         }
//     }
// }

