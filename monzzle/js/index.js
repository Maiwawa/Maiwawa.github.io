$(document).ready(function () {
    // let bannerInt = getRandomInt(9);
    // setBanner(bannerInt);
    logoSetting();
});

$(window).on('resize', function () {
    logoSetting();
});

function logoSetting() {
    let winWidth = $(window).width();
    let winHeight = $(window).height();

    let bannerHeight = $('.banner').height();
    let logoHeight = $('.logo-img').height();

    // $('#winSize').text(winWidth);

    if ((winWidth) < 985) {
        $('.logo-img').attr('src', 'resource/logo/logo-y.jpg');
    } else {
        $('.logo-img').attr('src', 'resource/logo/logo-x.jpg');
    }

    if (logoHeight > (bannerHeight - 100)) {
        $('.banner').height(logoHeight + 200);
        $('.logo-bg').css('margin-top', 150)
    }
    else {
        $('.banner').css('height', 'calc(96vh - 56px)')
        $('.logo-bg').css('margin-top', 0)
    }

}


// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// function setBanner(bannerInt) {
//     $('.banner').css('background-image', 'url(resource/banner/' + bannerInt + '.jpg)')
// };