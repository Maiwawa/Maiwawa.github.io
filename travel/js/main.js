const prevBtn = $('#prev-btn');
const nextBtn = $('#next-btn');
const book = $('#book');

let currentLocation = 1;
let numOfPapers = 6;
let maxLocation = numOfPapers + 1;

let aa = [0, 0, 6, 5, 4, 3, 2, 1];


$('#prev-btn').click(function () {
    if (currentLocation > 1) {
        if (currentLocation == 7) {
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
        } else if (currentLocation == 6) {
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
    else if (currentLocation == 6) {
        $('#book').css('transform', 'translateX(100%)');
    }
    $('#prev-btn').css('transform', `translateX(0px)`);
    $('#next-btn').css('transform', `translateX(0px)`);
}

