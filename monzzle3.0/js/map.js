$('.map-content img').click(function () {
    // alert(this.id);
    $('.loader_bg').show();
    $('.s-popup').css('transform', 'scale(1)');
    $('.popup-content img').attr('src', `./resource/subject/${this.id}.jpg`);
    var img = new Image();
    $(img).on('load', function () {
        // console.log(aa[i]);
        $('.loader_bg').hide();
    });
    img.src = `./resource/subject/${this.id}.jpg`;

});

$('.popup-btn i').click(function () {
    $('.s-popup').css('transform', 'scale(0)');
});

