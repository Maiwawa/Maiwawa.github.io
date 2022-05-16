var winTitle = $(document).attr("title");
$(document).ready(function () {
    console.log(winTitle);
    settingItem();
});

function settingItem() {
    let dataUrl = "resource/json/item.json";
    $.ajax({
        url: dataUrl,
        method: "GET",
        dataType: "json",
        data: '',
        success: function (itemData) {
            console.log("yes");
            clacData(itemData);
        },
        error: function () {
            console.log("no");
        }
    });
};


function clacData(itemData) {
    for (let i = 0; i < itemData.length; i++) {
        if (itemData[i].name == winTitle) {
            console.log(itemData[i].name + winTitle);
            $('.' + `${itemData[i].item}`).addClass('nav-item-bg');
            $('.' + `${itemData[i].menu}`).addClass('nav-item-bg');
        } else {
            $('.' + `${itemData[i].item}`).removeClass('nav-item-bg');
            $('.' + `${itemData[i].menu}`).removeClass('nav-item-bg');
        }
    }
}