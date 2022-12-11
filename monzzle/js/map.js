$('.map-content img').click(function () {
    // alert(this.id);
    $('.s-popup').css('transform', 'scale(1)');
    $('.popup-content img').attr('src', `resource/subject/${this.id}.jpg`);
});

$('.popup-btn i').click(function () {
    $('.s-popup').css('transform', 'scale(0)');
})