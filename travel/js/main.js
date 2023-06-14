let currentLocation = 1;
let numOfPapers = 11;
let maxLocation = numOfPapers + 1;

let aa = [];
let bb = [];

$(document).ready(function () {
    for (let i = numOfPapers + 2; i > 0; i--) {
        aa.push(i);
    }

    let winWidth = $(window).width();
    let winHeight = $(window).height();

    if (winWidth < winHeight) {
        $('#book').addClass('book-y');
    } else {
        $('#book').removeClass('book-y');
    }

    let cc = 1;
    for (let i = 1; i < maxLocation; i++) {
        $('#book').append(`
        <!-- p${i} -->
        <div id="p${i}" class="paper">
            <div class="front">
                <div id="f${i}" class="front-content page${cc}">
                    <img src="resource/p${cc}.jpg" class="image">
                </div>
            </div>
            <div class="back">
                <div id="b${i}" class="back-content page${cc + 1}">
                    <img src="resource/p${cc + 1}.jpg" class="image">
                </div>
            </div>
        </div>
    `);
        cc = cc + 2;
    }

    for (let i = numOfPapers; i > 0; i--) {
        $(`#p${i}`).css('z-index', `${aa[i + 1]}`)
    }

    for (let i = 1; i < numOfPapers * 2 + 1; i++) {
        bb.push(`resource/p${i}.jpg`);
    }

    for (let i = 0; i < bb.length; i++) {
        var img = new Image();
        $(img).on('load', function () {
            console.log(bb[i]);
        });
        img.src = bb[i];
    }
    $('.loader_bg').hide();
});

$(window).resize(function () {
    let winWidth = $(window).width();
    let winHeight = $(window).height();

    if (winWidth < winHeight) {
        $('#book').addClass('book-y');
    } else {
        $('#book').removeClass('book-y');
    }
});

$('#prev-btn').click(function () {
    if (currentLocation > 1) {
        if (currentLocation == maxLocation) {
            openBook();
        } else if (currentLocation == 2) {
            closeBook();
        }
        $(`#p${currentLocation - 1}`).removeClass('flipped');
        $(`#p${currentLocation - 1}`).css('z-index', `${aa[currentLocation]}`);
        currentLocation--;
        console.log(currentLocation);
    }
});

$('#next-btn').click(function () {
    if (currentLocation < maxLocation) {
        if (currentLocation == 1) {
            openBook();
        } else if (currentLocation == numOfPapers) {
            closeBook();
        }
        $(`#p${currentLocation}`).addClass('flipped');
        $(`#p${currentLocation}`).css('z-index', `${currentLocation}`);
        currentLocation++;
        console.log(currentLocation);
    }
})

function openBook() {
    let bookWidth = $('#book').width();
    let transform = (bookWidth + 10) / 2;
    $('#book').css('transform', 'translateX(50%)');
    $('#prev-btn').css('transform', `translateX(-${transform}px)`);
    $('#next-btn').css('transform', `translateX(${transform}px)`);
}

function closeBook() {
    if (currentLocation == 2) {
        $('#book').css('transform', 'translateX(0%)');
    }
    else if (currentLocation == numOfPapers) {
        $('#book').css('transform', 'translateX(100%)');
    }
    $('#prev-btn').css('transform', `translateX(0px)`);
    $('#next-btn').css('transform', `translateX(0px)`);
}

