let isMenuOpen = false;


$('#btn').click(function () {
    if (isMenuOpen) {
        menuClose();
        isMenuOpen = false;
    } else {
        menuOpen();
        isMenuOpen = true;
    }
});

function menuClose() {
    $('.menu').css('height', '0');
    $('#btn i').removeClass('fa-xmark');
    $('#btn i').addClass('fa-bars');
    $('#btn i').css('color', '#fff');
    $('#btn').css('background', '#231815');
    $('.menu').css('opacity', '0');
    setTimeout(() => {
        $('.menu').css('display', 'none');
    }, 500);
};

function menuOpen() {
    $('.menu').css('display', 'flex');
    setTimeout(() => {
        $('.menu').css('height', '100vh');
        $('#btn i').css('color', '#231815');
        $('#btn').css('background', '#fff');
        $('#btn i').removeClass('fa-bars');
        $('#btn i').addClass('fa-xmark');
        $('.menu').css('opacity', '1');
    }, 200)
};