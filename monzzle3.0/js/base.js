$('#content').mouseover(() => {
    $('.content-text p').addClass('hover');
});
$('#content').mouseout(() => {
    $('.content-text p').removeClass('hover');
});


$('#changeimage').mouseover(() => {
    $('.content-text p').addClass('hover');
});
$('#changeimage').mouseout(() => {
    $('.content-text p').removeClass('hover');
});

let pageTitle = document.title;

if(pageTitle == 'monster'){

}else if(pageTitle == '關於我們'){
    $('.content-text p:before').after('Content us')
    $('.content-text p:after').before('Contact us')
}