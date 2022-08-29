let pages = ['首頁', '地圖', '景點介紹']
let navs = [];

$(document).ready(() => {
    $('.menu .left .navs .nav').css('--myScale', 'scale(0)');
    menuChange();
});

$('.menu .left .navs .nav a').mouseover(() => {
    $('.menu .left .navs .nav a').css('color', '#699663');
});
$('.menu .left .navs .nav a').mouseout(() => {
    $('.menu .left .navs .nav a').css('color', '#254820');
});

document.getElementById('menu-btn').addEventListener('mousemove', function (e) {
    let winWidth = $(window).width();
    if (winWidth > 800) {
        const position = document.getElementById('menu-btn').getBoundingClientRect();
        const x = e.pageX - position.left - position.width / 2;
        const y = e.pageY - position.top - position.height / 2;

        document.getElementById('menu-border').style.transform = 'scale(1)';

        document.getElementById('menu-btn').style.transform = "translate(" + x * 0.2 + "px," + y * 0.4 + "px)";
        document.getElementById('menu-border').style.transform = "translate(" + x * 0.5 + "px," + y * 0.7 + "px)";
    }
});

document.getElementById('menu-btn').addEventListener('mouseout', function (e) {
    document.getElementById('menu-btn').style.transform = "translate(0px,0px)";
    document.getElementById('menu-border').style.transform = "translate(0px,0px)"
    document.getElementById('menu-border').style.transform = 'scale(0)';
});

function currentPage() {
    let pageTitle = document.title;
    for (let i = 0; i < pages.length; i++) {
        console.log('nope');
        if (pageTitle == pages[i]) {
            return i;
        }
    }
};

let isMenuOpen = false;
$('#menu-btn').click(() => {
    let winWidth = $(window).width();
    if (winWidth > 800) {

    }

    if (!isMenuOpen) {
        openMenu();
    } else if (isMenuOpen) {
        closeMenu();
    } else {
        alert('菜單錯誤boolen!');
    }

});

function closeMenu() {
    $('.menu').css('transform', 'translateY(-100%)');
    $('#btn').removeClass('fa-xmark');
    $('#btn').addClass('fa-angle-down');
    $('.menu-mask').css('height', '0');
    isMenuOpen = false;
}

function openMenu() {
    $('.menu').css('transform', 'translateY(0)');
    $('#btn').removeClass('fa-angle-down');
    $('#btn').addClass('fa-xmark');
    $('.menu-mask').css('height', '100vh');
    isMenuOpen = true;
}

function menuChange() {
    let i = currentPage() + 1;
    $(`.nav-${i}`).css('--myScale', 'scale(1)');
}

$('.nav a').click(() => {
    closeMenu();
})