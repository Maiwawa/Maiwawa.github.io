var imgs = [];  					//定義一個運算元組
$('.leaflet-interactive').each(function () {  	//遍歷所有圖片,將圖片
    var dfd = $.Deferred();  				//定義一個將要完成某個操作的物件
    $(this).bind('load', function () {
        dfd.resolve();  			//圖片載入完成後,表示操作成功
    });
    if (this.complete) {				//如果圖片載入狀態為完成,那麼也標識操作成功
        setTimeout(function () {
            dfd.resolve();
        }, 2000);
    }
    imgs.push(dfd);  			//將所有操作物件放入陣列中
})
$.when.apply(null, imgs).done(function () {  	//註冊所有操作完成後的執行方法
    $('.loader_bg').hide();

    map = L.map('map').setView([24.114746, 120.736678], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '<a href="https://www.openstreetmap.org/">OSM</a>',
        maxZoom: 20
    }).addTo(map);
});
let temple = L.icon({
    iconUrl: 'resource/temple.png',

    iconSize: [81.25, 65], // size of the icon
    iconAnchor: [40.625, 38], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [0, -35] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.111421, 120.732569], { icon: temple }).addTo(map)
    .bindPopup("<a href='introduction.html?id=temple'>廣興宮</a>")



let tree = L.icon({
    iconUrl: 'resource/tree.png',

    iconSize: [80.6, 65], // size of the icon
    iconAnchor: [40.3, 32.5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-5, -30] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.115546, 120.7351809], { icon: tree }).addTo(map)
    .bindPopup("<a href='introduction.html?id=tree'>百年樟樹</a>")


let book = L.icon({
    iconUrl: 'resource/book.png',

    iconSize: [65, 67.6], // size of the icon
    iconAnchor: [32.5, 33.8], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-5, -35] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.116646, 120.735444], { icon: book }).addTo(map)
    .bindPopup("<a href='introduction.html?id=book'>拍照用大書本</a>")


let owl = L.icon({
    iconUrl: 'resource/owl.png',

    iconSize: [90.35, 65], // size of the icon
    iconAnchor: [45.175, 32.5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [5, -35] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.116205, 120.737257], { icon: owl }).addTo(map)
    .bindPopup("<a href='introduction.html?id=owl'>貓頭鷹地標</a>")


let trail = L.icon({
    iconUrl: 'resource/trail.png',

    iconSize: [84.5, 65], // size of the icon
    iconAnchor: [42.25, 32.5], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-5, -35] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.115921, 120.739038], { icon: trail }).addTo(map)
    .bindPopup("<a href='introduction.html?id=trail'>楓香林步道入口</a>")


let museum = L.icon({
    iconUrl: 'resource/museum.png',

    iconSize: [139.75, 32.5], // size of the icon
    iconAnchor: [69.875, 16.25], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-5, -30] // point from which the popup should open relative to the iconAnchor
});
L.marker([24.117214, 120.742321], { icon: museum }).addTo(map)
    .bindPopup("<a href='introduction.html?id=museum'>古農莊文物館</a>")



map.locate({
    setView: false, // 是否讓地圖跟著移動中心點
    watch: true, // 是否要一直監測使用者位置
    maxZoom: 17, // 最大的縮放值
    enableHighAccuracy: true, // 是否要高精準度的抓位置
    timeout: 10000 // 觸發locationerror事件之前等待的毫秒數
});

const xinglong = [24.114746, 120.736678, 17];


const customIcon = L.icon({
    iconUrl: 'https://letswritetw.github.io/letswrite-leaflet-osm-locate/dist/dot.svg',
    iconSize: [30, 30],
});
const marker = L.marker(xinglong, {
    icon: customIcon,
    opacity: 1.0
}).addTo(map);


let changeSet = true;
// 使用者提供位置
function foundHandler(e) {
    marker.setLatLng(e.latlng); // 移動 marker

    if (changeSet) {
        map.flyTo([e.latitude, e.longitude]);
    }
}
$('#setview-btn').click(() => {
    // if (isPressBtn) {
    //     map.locate()
    //         .on('locationfound', function (e) {
    //         })
    //     isPressBtn = false;
    // }
    // else if (!isPressBtn) {
    //     isPressBtn = true;
    //     map.flyTo([24.114746, 120.736678], 17)
    // };
    map.flyTo([24.114746, 120.736678], 17)
    changeSet = false;
    var stringDisplay = "視角：\n自由";
    var escaped = $('<div>').text(stringDisplay).text();
    $('#follow-btn').html(escaped.replace(/\n/g, '<br />'));
});

$('#follow-btn').click(() => {
    if (changeSet) {
        changeSet = false;
        var stringDisplay = "視角：\n自由";
        var escaped = $('<div>').text(stringDisplay).text();
        $('#follow-btn').html(escaped.replace(/\n/g, '<br />'));
    } else if (!changeSet) {
        changeSet = true;
        var stringDisplay = "視角：\n跟隨";
        var escaped = $('<div>').text(stringDisplay).text();
        $('#follow-btn').html(escaped.replace(/\n/g, '<br />'));
    }
})
map.on('locationfound', foundHandler);

function errorHandler(e) {
    console.log("e", e);
    window.alert('定位功能未被允許，無法使用此功能。預設地點將為 興隆里');
    map.setView(xinglong, 17); // 中心移到動物園
}
map.on('locationerror', errorHandler);

let isPressBtn = false;

$('#setview-btn').click(() => {
    // if (isPressBtn) {
    //     map.locate()
    //         .on('locationfound', function (e) {
    //         })
    //     isPressBtn = false;
    // }
    // else if (!isPressBtn) {
    //     isPressBtn = true;
    //     map.flyTo([24.114746, 120.736678], 17)
    // };
    map.flyTo([24.114746, 120.736678], 17)
});




        //擷取經緯度
        // function onMapClick(e) {
        //     alert("You clicked the map at " + e.latlng);
        // }

        // map.on('click', onMapClick);