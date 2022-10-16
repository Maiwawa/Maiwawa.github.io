let count = 0;

$(document).ready(function () {
    // countN();
    add();
    remove();
});

// function countN() {
//     setTimeout(() => {
//         console.log(count);
//         count++;
//         countN();
//     }, 1000);
// }

let r = 0,
    a = 1;

function add() {
    setTimeout(() => {
        if (a == 3) {
            a = 0;
        }
        a++;
        setTimeout(() => {
            console.log("a");
            $(`.left-img${a}`).addClass('pre');
            $(`.right-img${a}`).addClass('pre');
        }, 1000);
        setTimeout(() => {
            console.log("aa");
            $(`.left-img${a}`).addClass('leftshow');
            $(`.right-img${a}`).addClass('rightshow');
            $(`.left-img${a}`).addClass('big-left');
            $(`.right-img${a}`).addClass('big-right');
        }, 3000);
        setTimeout(() => {
            console.log("aa");
            $(`.left-img${a}`).removeClass('pre');
            $(`.right-img${a}`).removeClass('pre');
        }, 5000);
        add();
    }, 5000);
}

function remove() {
    setTimeout(() => {
        removeSet();
        console.log('r');
    }, 1000);
};

function removeSet() {
    setTimeout(() => {
        if (r == 3) {
            r = 0;
        }
        r++;
        setTimeout(() => {
            console.log('r set');
            $(`.left-img${r}`).removeClass('leftshow');
            $(`.left-img${r}`).removeClass('big-left');
            $(`.right-img${r}`).removeClass('rightshow');
            $(`.right-img${r}`).removeClass('big-right');
        }, 3000);
        removeSet();
    }, 5000);
}