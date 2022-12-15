//navigation set
let isGood = false;
let isBad = false;

$('#changeimage').click(() => {
    $('.navigation').css('display', 'flex');
    // isGood = false;
    // isBad = false;
})

$('#btn2').click(() => {
    $('.navigation').hide();
});

$('.left-nav').mouseover(function () {
    $('.left-nav').css('color', '#a8877d');
});

$('.left-nav').mouseout(function () {
    if (isGood) {
        $('#good').css('color', '#513A35');
        $('#bad').css('color', '#a8877d');
    } else if (isBad) {
        $('#good').css('color', '#a8877d');
        $('#bad').css('color', '#513A35');
    } else {
        $('#good').css('color', '#513A35');
        $('#bad').css('color', '#513A35');
    }
});

$('.left-nav').click(function () {
    let id = this.id;
    // console.log(id);

    if (id == 'good') {
        // console.log('is good');
        $('.good').show();
        $('.bad').hide();
        isGood = true;
        isBad = false;
    } else if (id == 'bad') {
        // console.log('id bad');
        $('.good').hide();
        $('.bad').show();
        isGood = false;
        isBad = true;
    } else {
        alert('err');
    }
});


//puzzle
let winWidth = $(window).width();
if (winWidth >= 1000) {
    tileSize = 226;
    middleTile = 226;
    bottomTile = 452;
} else {
    tileSize = 113;
    middleTile = 113;
    bottomTile = 226;
}


// $('#testBtn').click(function () {
//     console.log(getTotal());
//     changeTile();
// });
let isToBig = false;
let isToSmall = false;

$(window).resize(function () {
    changeTile();
});



function changeTile() {
    let currentWidth = $(window).width();
    console.log('current width:' + currentWidth);
    let total = getTotal();
    if ((currentWidth < 1000) && (isToSmall == false)) {
        console.log('total:' + total);
        if (total != 1017) {
            console.log('to small');
            toSmall();
            isToSmall = true;
            isToBig = false;
        }
    }
    else if ((currentWidth >= 1000) && (isToBig == false)) {
        console.log('total:' + total);
        if (total != 2034) {
            console.log('to big');
            toBig();
            isToBig = true;
            isToSmall = false;
        }
    }
}

function toBig() {
    for (let i = 1; i < 9; i++) {
        let top = $(`#${i}`).position().top;
        let left = $(`#${i}`).position().left;
        // console.log(top);
        // console.log(left);
        $(`#${i}`).css({ top: top * 2 });
        $(`#${i}`).css({ left: left * 2 });
        top = $(`#${i}`).position().top;
        left = $(`#${i}`).position().left;
        // console.log(top);
        // console.log(left);
    }
    let blankTop = $('#blank').position().top;
    let blankLeft = $('#blank').position().left;
    $('#blank').css({ top: blankTop * 2 });
    $('#blank').css({ left: blankLeft * 2 });
}

function toSmall() {
    for (let i = 1; i < 9; i++) {
        let top = $(`#${i}`).position().top;
        let left = $(`#${i}`).position().left;
        // console.log(top);
        // console.log(left);
        $(`#${i}`).css({ top: top / 2 });
        $(`#${i}`).css({ left: left / 2 });
        top = $(`#${i}`).position().top;
        left = $(`#${i}`).position().left;
        // console.log(top);
        // console.log(left);
    }
    let blankTop = $('#blank').position().top;
    let blankLeft = $('#blank').position().left;
    $('#blank').css({ top: blankTop / 2 });
    $('#blank').css({ left: blankLeft / 2 });
}

function getTotal() {
    let total = 0;
    for (let k = 1; k < 9; k++) {
        let top = $(`#${k}`).position().top;
        console.log(top);
        total = total + top;
    }
    let blank = $('#blank').position().top;
    total = total + $('#blank').position().top;
    console.log('blank:' + blank);
    return total;
}


var game = new Object();
game.tiles = Array.from(document.getElementsByClassName('tile')); //is our board
game.folders = ["coin", "dragon", "ghost", "hourse", "msz", "pig", "zy", "dog", "bird", "turtle", "snake", "girl", "fish", "cat", "tiger"]; //while randoming picture
game.gameStarted = false;
game.img = {
    1: "01.jpg", //for setting the board up
    2: "02.jpg",
    3: "03.jpg",
    4: "04.jpg",
    5: "05.jpg",
    6: "06.jpg",
    7: "07.jpg",
    8: "08.jpg",
    9: ""
};
game.blanktile = document.getElementById('blank'); //the blank tile
game.winCondition = Array.from(document.getElementsByClassName('tile')); //current game condition will be checked against this
game.helpenabled = false;
// game.frame = document.getElementById('frame');
game.navigation = document.getElementById('navigation');
// game.slectImg = document.getElementsByClassName('imgsel');
game.options = document.getElementById('changeimage');

function setPuzzleImage(foldername) { //adding images to every tile in the game

    if (foldername == undefined) {

        var slectFolder = Math.floor((Math.random() * 4));
        var folder = game.folders[slectFolder];
        // game.frame.style.backgroundImage = "url('" + "resource/puzzle/" + folder + "/" + "frame.jpg" + "')"

        for (var i = 0; i < game.tiles.length; i++) {
            var tileImg = i + 1;
            game.tiles[i].style.backgroundImage = "url(" + "./resource/puzzle/" + folder + "/" + game.img[tileImg] + ")"
        }

    }

    else {

        // game.frame.style.backgroundImage = "url('" + "resource/puzzle/" + foldername + "/" + "frame.jpg" + "')"
        for (var i = 0; i < game.tiles.length; i++) {
            var tileImg = i + 1;
            game.tiles[i].style.backgroundImage = "url(" + "./resource/puzzle/" + foldername + "/" + game.img[tileImg] + ")"

        }

    }

}

$('.right-nav').click(function () {
    let id = this.id;
    // console.log(id);
    let text = this.text;
    $('.content div h1').text($(`#${id}`).text());
    console.log(text);
    game.tiles = Array.from(document.getElementsByClassName('tile'));
    setPuzzleImage(id);
    // console.log(id);
    setTiles(game);
    game.navigation.style.display = "none";
    $('#game').show();
    $('.s-game').show();
    $('.s-paragraph').css('min-height', '40vh');
});

function addClickEvent() { //adding click event to each tile

    for (var i = 0; i < game.tiles.length - 1; i++) {

        game.tiles[i].addEventListener('click', function () {

            shiftPuzzle(this);
            win();

        });

    }

    //reset button
    //shuffle button

    // for (var i = 0; i < game.slectImg.length; i++) {

    //     game.slectImg[i].addEventListener('click', function () {
    //         game.tiles = Array.from(document.getElementsByClassName('tile'));
    //         setPuzzleImage(this.name);
    //         console.log(this.name);
    //         setTiles(game);
    //         game.navigation.style.display = "none";
    //     });

    // }

    // game.options.addEventListener('click', function () {
    //     // body...

    //     game.wrapper.style.display = "inline-block";

    // });

}


function shuffle(array) { //shuffle is part of set tiles

    var a = Math.floor(((Math.random() * 150) + 150));
    //console.log(a);
    var bot_right = [-3, -1];
    var bot_left = [-3, 1];
    var top_right = [3, -1];
    var top_left = [3, 1];
    var middle_right = [-1, -3, 3];
    var middle_left = [1, 3, -3];
    var middle_top = [1, -1, 3];
    var middle_bot = [1, -1, -3];
    var middle = [1, 3, -3, -1];
    var moves;
    for (var i = 0; i < a; i++) {

        var position = Array.prototype.indexOf.call(array, game.blanktile);

        if (position == 0) {

            moves = top_left;

        }

        if (position == 1) {

            moves = middle_top;

        }

        if (position == 2) {

            moves = top_right;

        }

        if (position == 3) {


            moves = middle_left;

        }

        if (position == 4) {
            moves = middle;
        }

        if (position == 5) {
            moves = middle_right;
        }
        if (position == 6) {
            moves = bot_left;
        }
        if (position == 7) {
            moves = middle_bot
        }
        if (position == 8) {
            moves = bot_right;
        }

        move = moves[Math.floor(Math.random() * moves.length)];
        //console.log(moves)
        //console.log(move);
        //console.log(position);
        array[position] = array[position + move];
        array[position + move] = game.blanktile;

    }

    return array



}

function setTiles(gameobj) {
    var a = gameobj.tiles

    a = shuffle(a);

    var set = [[a[0], a[1], a[2]], [a[3], a[4], a[5]], [a[6], a[7], a[8]]];

    if (winWidth > 1000) {
        tileSize = 226;
        middleTile = 226;
        bottomTile = 452;
    } else {
        tileSize = 113;
        middleTile = 113;
        bottomTile = 226;
    }

    for (var i = 0; i < 3; i++) {
        position = (Array.prototype.indexOf.call(set[0], set[0][i])) * tileSize
        set[0][i].style.top = "0px";
        set[0][i].style.left = position.toString() + "px";

    }

    for (var i = 0; i < 3; i++) {


        position = (Array.prototype.indexOf.call(set[1], set[1][i])) * tileSize
        set[1][i].style.top = `${middleTile}px`;
        set[1][i].style.left = position.toString() + "px";

    }

    for (var i = 0; i < 3; i++) {


        position = (Array.prototype.indexOf.call(set[2], set[2][i])) * tileSize
        set[2][i].style.top = `${bottomTile}px`;
        set[2][i].style.left = position.toString() + "px";

    }


}




function shiftPuzzle(tile) {
    let winWidth = $(window).width();
    if (winWidth > 1000) {
        tileSize = 226;
        middleTile = 226;
        bottomTile = 452;
    } else {
        tileSize = 113;
        middleTile = 113;
        bottomTile = 226;
    }

    if (isRight(tile)) {
        moveRight(tile);
    }

    else if (isLeft(tile)) {
        moveLeft(tile);
    }

    else if (isTop(tile)) {
        moveTop(tile);
    }

    else if (isDown(tile)) {
        moveDown(tile)
    }

}

function isRight(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    //console.log(position);
    blank_position = position + 1;
    if (Object.is(game.tiles[blank_position], game.blanktile) && position != 5 && position != 2 && position != 8) {
        return true;
    }

}

function moveRight(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    var current_posX = tile.style.left;
    var res = current_posX.split('px')[0];
    current = eval(res);
    tile.style.left = (current + tileSize).toString() + "px";


    var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
    var current_blank_posX = game.blanktile.style.left;
    var res_blank = current_blank_posX.split('px')[0];
    var current_blank = eval(res_blank);
    game.blanktile.style.left = (current_blank - tileSize).toString() + "px";

    //game.tiles = Array.from(game.tiles);
    game.tiles[blank_position] = game.tiles[position]
    game.tiles[position] = game.blanktile;

}

function isLeft(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    blank_position = position - 1;
    if (Object.is(game.tiles[blank_position], game.blanktile) && position != 0 && position != 3 && position != 6) {
        return true;
    }
}

function moveLeft(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    var current_posX = tile.style.left;
    var res = current_posX.split('px')[0];
    current = eval(res);
    tile.style.left = (current - tileSize).toString() + "px";


    var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
    var current_blank_posX = game.blanktile.style.left;
    var res_blank = current_blank_posX.split('px')[0];
    var current_blank = eval(res_blank);
    game.blanktile.style.left = (current_blank + tileSize).toString() + "px";

    //game.tiles = Array.from(game.tiles);
    game.tiles[blank_position] = game.tiles[position]
    game.tiles[position] = game.blanktile;


}

function isTop(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    blank_position = position - 3;
    if (Object.is(game.tiles[blank_position], game.blanktile)) {
        return true;
    }




}

function moveTop(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    var current_posY = tile.style.top;
    var res = current_posY.split('px')[0];
    current = eval(res);
    tile.style.top = (current - tileSize).toString() + "px";

    var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
    var current_blank_posY = game.blanktile.style.top;
    var res_blank = current_blank_posY.split('px')[0];
    var current_blank = eval(res_blank);
    game.blanktile.style.top = (current_blank + tileSize).toString() + "px";

    game.tiles[blank_position] = game.tiles[position]
    game.tiles[position] = game.blanktile;


}

function isDown(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    blank_position = position + 3;
    if (Object.is(game.tiles[blank_position], game.blanktile)) {
        return true;
    }
}

function moveDown(tile) {

    var position = Array.prototype.indexOf.call(game.tiles, tile);
    var current_posY = tile.style.top;
    var res = current_posY.split('px')[0];
    current = eval(res);
    tile.style.top = (current + tileSize).toString() + "px";

    var blank_position = Array.prototype.indexOf.call(game.tiles, game.blanktile);
    var current_blank_posY = game.blanktile.style.top;
    var res_blank = current_blank_posY.split('px')[0];
    var current_blank = eval(res_blank);
    game.blanktile.style.top = (current_blank - tileSize).toString() + "px";

    game.tiles[blank_position] = game.tiles[position]
    game.tiles[position] = game.blanktile;

}

function isEqual(currentboard, winboard) {
    for (var i = 0; i < currentboard.length; i++) {
        if (currentboard[i] != winboard[i]) {
            return false
        }
    }
    return true;
}



function win() {
    // body...

    if (isEqual(game.tiles, game.winCondition)) {
        setTimeout(function () { alert("You win!"); }, 500);
    }
}


(function (global) {
    // body...
    setPuzzleImage();
    addClickEvent();
    setTiles(global);

}(game));

// function shownumbers() {

//     var help = document.getElementsByClassName('number');
//     if (game.helpenabled) {
//         game.helpenabled = false;
//         for (var i = 0; i < help.length; i++) {
//             help[i].style.display = "none";


//         }
//     }
//     else {
//         game.helpenabled = true
//         for (var i = 0; i < help.length; i++) {
//             help[i].style.display = "inline-block";

//         }
//     }

// }

