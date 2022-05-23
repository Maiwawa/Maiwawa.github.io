let pageTitle = $(document).attr("title");
$(document).ready(function () {
    getBannerData();

});

function getBannerData() {
    let dataUrl = "resource/banner.json";
    $.ajax({
        url: dataUrl,
        type: 'GET',
        dataType: 'json',
        data: '',
        async: true,
        success: function (bannerData) {
            console.log("yes");
            console.log(bannerData);
            selectData(bannerData);
        },
        error: function () {
            console.log("no");
        },
    });
};

function selectData(bannerData) {
    for (let i = 0; i < bannerData.length; i++) {
        console.log("hi");
        if (bannerData[i].title == pageTitle) {
            $('.banner-title').text(bannerData[i].title);
            $('.banner-secondtitle').text(bannerData[i].secondtitle);
            $('.banner-article').text('文　' + bannerData[i].article);
            $('.banner-picture').text('圖　' + bannerData[i].picture);
            let imageUrl = bannerData[i].url;
            $('.banner-image').css('background-image', 'url(' + imageUrl + ')');
        }
    }
}