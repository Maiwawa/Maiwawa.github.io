// $(document).ready(() => {
//     let winWidth = $(window).width();
//     if (winWidth > 600) {
//         VanillaTilt.init(document.querySelector(".box"), {
//             max: 15,
//             speed: 200
//         });
//     }
//     imgCheck();
// });

// function imgCheck() {
//     var imgs = [];  					//定義一個運算元組
//     $('.image').each(function () {  	//遍歷所有圖片,將圖片
//         var dfd = $.Deferred();  				//定義一個將要完成某個操作的物件
//         $(this).bind('load', function () {
//             dfd.resolve();  			//圖片載入完成後,表示操作成功
//         });
//         if (this.complete) {				//如果圖片載入狀態為完成,那麼也標識操作成功
//             setTimeout(function () {
//                 dfd.resolve();
//             }, 2000);
//         }
//         imgs.push(dfd);  			//將所有操作物件放入陣列中
//     });
//     $.when.apply(null, imgs).done(function () {  	//註冊所有操作完成後的執行方法
//         $('.loader_bg').hide();
//         loadedImg();
//     });

//     ScrollReveal({
//         reset: true, distance: '60px',
//         duration: 2500,
//         delay: 400
//     });

//     function loadedImg() {
//         ScrollReveal({
//             reset: false,
//             distance: '60px',
//             duration: 2500,
//             delay: 400
//         });
//     };
// };