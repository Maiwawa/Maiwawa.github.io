let url = "json/product.json";

$(document).ready(function(){
    getData();
});

function getData(){
    axios.get(url)
    .then((data)=>{
        // console.log(data.value.length);
        innerProducts(data);
    })
    .catch((err)=>{
        alert(err);
    })
}

function innerProducts(data){
    for (let i = 0; i < data.data.length; i++) {
        console.log('do it');

        let aa = `<div class="product" id="${data.data[i].name}">
                    <div class="product-img">
                        <img src="${data.data[i].image}" id="product-image">
                        <div class="product-text">
                            <p id="product-name">${data.data[i].name}</p>
                            <span class="buy">查看</span>
                        </div>
                    </div>
                  </div>`;
        
        $('#products').append(aa);
    };
};

let imgs = [];  					//定義一個運算元組
$('.image').each(function () {  	//遍歷所有圖片,將圖片
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
});

//點擊商品後，商品數量顯示
$(document).on('click','.product',function () {
    // alert(this.id);
    let id = this.id;

    axios.get(url)
    .then((data)=>{
        // console.log(data.value.length);
        for (let i = 0; i < data.data.length; i++) {
            if(data.data[i].name == id){
                $('.info-title').text(data.data[i].name);
                $('.popup-img').attr('src',data.data[i].image);
                $('.info-text').text(data.data[i].introduction);
                // $('#shop-href1').attr('href',data.data[i].href1);
                $('#shop-href2').attr('href',data.data[i].href2);
                $('#shop-href3').attr('href',data.data[i].href3);
                
            }            
        }
    })
    .catch((err)=>{
        alert(err);
    })

    $('.popup-product').css('display', 'flex');
});



//關閉商品數量選擇
$(document).on('click','.popup-close i',function () {
    $('.popup-product').hide();
});

