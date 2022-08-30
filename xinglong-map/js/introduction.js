
$(document).ready(() => {
    getData()
});

function getParameter() {
    //先取得網址字串，假設此頁網址為「index.aspx?id=U001&name=GQSM」
    var url = location.href;
    var id = "";
    //再來用去尋找網址列中是否有資料傳遞(QueryString)
    if (url.indexOf('?') != -1) {

        //在此直接將各自的參數資料切割放進ary中
        var ary = url.split('?')[1].split('&');
        //此時ary的內容為：
        //ary[0] = 'id=U001'，ary[1] = 'name=GQSM'

        //下迴圈去搜尋每個資料參數
        for (i = 0; i <= ary.length - 1; i++) {
            //如果資料名稱為id的話那就把他取出來
            if (ary[i].split('=')[0] == 'id')
                id = ary[i].split('=')[1];
        }
    }

    return id;
}

function getData() {
    $.ajax({
        url: 'resource/attractions.json',
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (data) {
            console.log('success');
            setData(data);
        },
        error: function () {
            console.log('error');
        },
    });
};

function setData(data) {
    for (let i = 0; i < data.length; i++) {
        if (getParameter() == data[i].id) {
            $('#name').text(data[i].name);
            $('#title').text('" ' + data[i].name + ' "');
            $('#section1').text(data[i].sec1);
            $('#section2').text(data[i].sec2);
            $('#img1').attr("src", `resource/${data[i].id}.png`);
            $('#img2').attr("src", `resource/${data[i].id}.png`);
            // $('#bg1').css("background", `${data[i].bg1}`);
            console.log(data[i].name);
            if (data[i].sec2 == "none") {
                $('.s2').show();
                $('.s3').hide();
            } else {
                $('.s2').show();
                $('.s3').show();
            }
        }
    }
}

$('#content').click(() => {
    $('.attractions').css('display', 'flex');
    stop();
})

$('#btn2').click(() => {
    $('.attractions').hide();
    move();
})

$('.att-navs .att-nav').click(function () {
    let id = this.id;
    $.ajax({
        url: 'resource/attractions.json',
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (data) {
            console.log('success');
            for (let i = 0; i < data.length; i++) {
                if (id == data[i].id) {
                    $('#name').text(data[i].name);
                    $('#title').text('" ' + data[i].name + ' "');
                    $('#section1').text(data[i].sec1);
                    $('#img1').attr("src", `resource/${data[i].id}.png`);
                    $('#img2').attr("src", `resource/${data[i].id}.png`);
                    console.log(data[i].name);
                    if (data[i].sec2 == "none") {
                        $('.s2').show();
                        $('.s3').hide();
                    } else {
                        $('.s2').show();
                        $('.s3').show();
                    }
                }
            }
            $('.attractions').hide();
            move();

        },
        error: function () {
            console.log('error');
        },
    });

})

function stop() {
    document.body.style.overflow = 'hidden';
}

function move() {
    document.body.style.overflow = '';
}

// function getAttractions() {
//     $.ajax({
//         url: 'resource/attractions.json',
//         method: 'GET',
//         dataType: 'json',
//         data: '',
//         async: false,
//         success: function (data) {
//             console.log('success');
//             setAttractions(data);
//         },
//         error: function () {
//             console.log('error');
//         },
//     });
// };

// function setAttractions(data) {
//     for (let i = 0; i < data.length; i++) {
//         let aa = `<div class="att-nav" id="${data[i].id}">${data[i].name}</div>`;
//         $('.att-navs').append(aa);
//     }
// };