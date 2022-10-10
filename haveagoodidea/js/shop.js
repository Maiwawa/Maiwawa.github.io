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
    loadedImg();
});

ScrollReveal({
    reset: true, distance: '60px',
    duration: 2500,
    delay: 400
});

function loadedImg() {
    ScrollReveal({
        reset: false,
        distance: '60px',
        duration: 2500,
        delay: 200
    });
    ScrollReveal().reveal('.content', { delay: 200, origin: 'bottom' });

};

let quantity,
    id,
    dd = "98c12cb2-bede",
    bb = "-45ca-918d-",
    cc = "884b2e9b3103",
    mail;
    
    setQuantity();
$(document).ready(function () {
});

$('#plus').click(function () {
    console.log(quantity);
    if (quantity == 8) {
        $('#plus').css('color', "#999");
    } else if (quantity == 0) {
        $('#minus').css('color', "#232323");
    }

    if (quantity < 9) {
        $('#quantity').removeClass(`fa-${quantity}`);
        quantity++;
        $('#quantity').addClass(`fa-${quantity}`);
    }

});

$('#minus').click(function () {
    console.log(quantity);
    if (quantity == 9) {
        $('#plus').css('color', "#232323");
    } else if (quantity == 1) {
        $('#minus').css('color', "#999");
    }

    if (quantity > 0) {
        $('#quantity').removeClass(`fa-${quantity}`);
        quantity--;
        $('#quantity').addClass(`fa-${quantity}`);
    }
});

//點擊商品後，商品數量顯示
$('.product').click(function () {
    // alert(this.id);
    id = this.id;
    resetQuantity();
    $('.popup-product').css('display', 'flex');
    $('.info-title').text(id);
});

function setQuantity() {
    quantity = 0;
    let aa = `
                <i class="fa-solid fa-minus" id="minus"></i>
                    <div class="number">
                        <i class="fa-solid fa-0" id="quantity"></i>
                    </div>
                <i class="fa-solid fa-plus" id="plus"></i>`;
    $('.buy-top').append(aa);
    if (quantity == 0) {
        $('#minus').css('color', '#999');
    }
};

function resetQuantity() {
    if (quantity == 9) {
        $('#plus').css('color', "#232323");
    }
    $('#quantity').removeClass(`fa-${quantity}`);
    quantity = 0;
    $('#quantity').addClass(`fa-${quantity}`);
};

//關閉商品數量選擇
$('.popup-close').click(function () {
    $('.popup-product').hide();
});

//選擇數量後，信箱頁跳出
$('#popup-buy-btn').click(function () {
    if (quantity != 0) {
        mail = null;
        $('#mail').val(mail);
        $('.popup-customer').css('display', 'flex');
    }
    else {
        alert('提示：訂購數量不能為0')
    }
});

//送出信箱
$('#send-mail').click(function () {
    $('.popup-confirm').css('display', 'flex');
});

//取消送出
$('#cancel-mail').click(function () {
    $('.popup-customer').hide();
});

//確認送出
$('#yes').click(function () {
    sendMail();
});

//取消
$('#no').click(function () {
    $('.popup-confirm').hide();
});

//送出mail
function sendMail() {
    mail = $('#mail').val();
    if (isMail(mail)) {
        Email.send({
            SecureToken: dd + bb + cc,
            To: mail,
            From: "monzzle01@gmail.com",
            Subject: "感謝您的訂購，後續會有人員向您確認訂單。",
            Body: "您訂購的商品：" + id + ",您訂購的數量：" + quantity
        }).then(
            message => alert("訂單送出狀態：" + message + ",請於幾分後前往信箱確認"),
        );
        Email.send({
            SecureToken: dd + bb + cc,
            To: 'monzzle01@gmail.com',
            From: "monzzle01@gmail.com",
            Subject: "有人訂購了商品",
            Body: "訂購的商品：" + id + ",訂購的數量：" + quantity
        }).then(

        );
        $('.popup-confirm').hide();
        $('.popup-customer').hide();
        $('.popup-product').hide();
    } else {
        alert('Email格式錯誤');
        $('.popup-confirm').hide();
    }
}

//mail驗證
function isMail(mail) {
    var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!regex.test(mail)) {
        return false;
    } else {
        return true;
    }
}

$('.bug').click(function () {
    alert('若訂單送出狀態為ok，則可能被誤判為垃圾信件');
});