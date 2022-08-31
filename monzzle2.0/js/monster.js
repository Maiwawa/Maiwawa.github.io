$('#content').click(() => {
    $('.attractions').css('display', 'flex');
    stop();
})

$('#btn2').click(() => {
    $('.attractions').hide();
    move();
})

let isGood = true;

$('.left-nav').click(function () {
    let id = this.id;
    console.log(id);

    if (id == 'good') {
        console.log('is good');
        $('.good').show();
        $('.bad').hide();
        isGood = true;
    } else if (id == 'bad') {
        console.log('id bad');
        $('.good').hide();
        $('.bad').show();
        isGood = false;
    } else {
        alert('err');
    }
});

$('.right-nav').click(function () {
    let id = this.id;
    console.log(id);
    $.ajax({
        url: 'resource/monster/monster.json',
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (data) {
            console.log('success');
            console.log(id);
            for (let i = 0; i < data.length; i++) {
                if (data[i].id == id) {
                    $('#name').text(data[i].name);
                    $('#introduction').text(data[i].data);
                    $('#card-name').text(data[i].name);
                    $('#title').text(data[i].name);
                    $('#monster-img').attr('src', `resource/monster/${data[i].id}.png`);
                    if (isGood) {
                        $('.circle').css('background', 'url(../resource/monster/null-good.jpg)');
                        $('.buy').css('background', 'url(../resource/monster/null-good.jpg)');
                    } else if (!isGood) {
                        $('.circle').css('background', 'url(../resource/monster/null-bad.jpg)');
                        $('.buy').css('background', 'url(../resource/monster/null-bad.jpg)');
                    }
                    $('.monster-content').show();
                    $('.attractions').hide();
                    move();
                }
            }
        },
        error: function () {
            console.log('error');
        },
    });
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

