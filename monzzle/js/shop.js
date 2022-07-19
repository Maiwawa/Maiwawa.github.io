$(document).ready(function () {
    getCardData();
});

function sortProduct(productData) {
    let select = $('#selectproduct').val();
    $('#cardContent').remove();
    console.log($('#selectproduct').val());
    let cards = `<div class="row row-cols-1 row-cols-md-3 g-4" id="cardContent"></div>`;
    $('#card').append(cards);
    if (select == 'newest') {

        for (let i = (productData.length - 1); i > -1; i--) {
            let card = `<div class="col">
                <div class="card h-100 productcard productcard${i}">
                    <img src="${productData[i].cardurl}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title title-text-color">${productData[i].cardtitle}</h5>
                            <p class="card-text content-text-color">${productData[i].cardintroduction}</p>
                        </div>
                    </div>
                </div>`;

            $('#cardContent').append(card);
        }


    }
    else if (select == 'oldest') {

        for (let i = 0; i < productData.length; i++) {
            let card = `<div class="col">
                <div class="card h-100 productcard productcard${i}">
                    <img src="${productData[i].cardurl}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${productData[i].cardtitle}</h5>
                            <p class="card-text">${productData[i].cardintroduction}</p>
                        </div>
                    </div>
                </div>`;
            $('#cardContent').append(card);
        }

    }
    else if (select == 'bestsell') {



    }
}


$('#selectproduct').change(function () {
    getCardData();
});

function getCardData() {
    let dataUrl = "resource/json/product.json";
    $.ajax({
        url: dataUrl,
        method: 'GET',
        dataType: 'json',
        data: '',
        async: false,
        success: function (productData) {
            console.log('success');
            sortProduct(productData);
        },
        error: function () {
            console.log('error');

        },
    });
}


function addCard(productData) {
    for (let i = 0; i < productData.length; i++) {
        let card = `< div class= "col" >
                    <div class="card h-100 productcard productcard${i}">
                        <img src="${productData[i].cardurl}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${productData[i].cardtitle}</h5>
                                <p class="card-text">${productData[i].cardintroduction}</p>
                            </div>
                    </div>
        </div >`;
        $('#cardContent').append(card);

    }
}