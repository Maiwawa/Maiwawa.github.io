let dataUrl = "resource/json/monster.json";

$('#goodorbad').change(function () {
    $.ajax({
        url: dataUrl,
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (monsterData) {
            console.log('success');
            // console.log(monsterData);
            setName(monsterData);
        },
        error: function () {
            console.log('error');
        },
    });
});

function setName(monsterData) {
    let select = $('#goodorbad').val();
    console.log(select);
    $('#monstername').empty();
    let firstOption = '<option selected disabled>妖怪名</option>';
    $('#monstername').append(firstOption);
    for (let i = 0; i < monsterData.length; i++) {
        console.log(monsterData[i].name);
        if (select == monsterData[i].goodorbad) {
            console.log(monsterData[i].name);
            let newOption = `<option value='${monsterData[i].name}'>${monsterData[i].name}</option>`;
            $('#monstername').append(newOption);
        };
    };
};

$('#monstername').change(function () {
    $.ajax({
        url: dataUrl,
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (monsterData) {
            console.log('success');
            // console.log(monsterData);
            setPage(monsterData);
        },
        error: function () {
            console.log('error');
        },
    });
});

function setPage(monsterData) {
    let select = $('#monstername').val();
    for (let i = 0; i < monsterData.length; i++) {
        if (select == monsterData[i].name) {
            $('.spinner').show();
            $('#monster-image').attr('src', monsterData[i].image);
            $('.monster-name').text(monsterData[i].name);
            $('.monster-location').text('地形：' + monsterData[i].location);
            $('.monster-type').text('種類：' + monsterData[i].type);
            $('.monster-mean').text('意義：' + monsterData[i].mean);
            $('.monster-data').text('資料：' + monsterData[i].data);
            document.getElementById('monster-image').onload = function () {
                $('.spinner').hide();
            }
        }
    }
}