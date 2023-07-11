$(document).ready(function () {
    getData();
});

let quastions = [],
    answers = [],
    aa,
    bb,
    cc,
    dd,
    abcd,
    randomMath = [0],
    time = 0,
    randomOrder = [],
    randomAnwers = [],
    dataUrl = "data.json";


$('#btn').click(function () {
    $('.top').removeClass('hide');
    $('.bottom').removeClass('hide');
    $('.start-btn').hide();
    getQuation();
});

//取得json資料
function getData() {
    $.ajax({
        url: dataUrl,
        method: "GET",
        dataType: "json",
        data: "",
        async: true,
        success: data => {
            copyData(data);
        },
        error: err => {
            console.log(err);
        }
    });
}

//資料轉為變數
function copyData(data) {
    for (let i = 0; i < data.length; i++) {
        quastions.push(data[i].japanese);
        answers.push(data[i].rome);
    }
}

//按按鈕
function getQuation() {
    getRandomQuation();
    getRandomAnswer1();
    getRandomAnswer2();
    getRandomAnswer3();
    getRandomOrder();
    abcd = [aa, bb, cc, dd];
    randomAnwers = [];
    for (let i = 0; i < randomOrder.length; i++) {
        randomAnwers.push(abcd[randomOrder[i]]);
    }
    // console.log(randomAnwers);
    document.getElementById("q").innerHTML = quastions[aa];
    document.getElementById("a").innerHTML = answers[randomAnwers[0]];
    document.getElementById("b").innerHTML = answers[randomAnwers[1]];
    document.getElementById("c").innerHTML = answers[randomAnwers[2]];
    document.getElementById("d").innerHTML = answers[randomAnwers[3]];
};

$('.answer').click(function () {
    // console.log($(this).text());
    $.ajax({
        url: dataUrl,
        method: "GET",
        dataType: "json",
        data: "",
        async: true,
        success: checkData => {
            for (let i = 0; i < checkData.length; i++) {
                let japanese = checkData[i].japanese,
                    quastion = $('#q').text(),
                    correctAnswer = checkData[i].rome,
                    select = $(this).text();
                if (japanese == quastion) {
                    if (correctAnswer == select) {
                        // window.alert("correct");
                        console.log('correct');
                        // console.log(japanese + "," + quastion + "," + correctAnswer + "," + select)
                        $(this).css('background', '#91AD70')
                        setTimeout(() => {
                            $('.answer').css('background', '#FCE8E5')
                            getQuation();
                        }, 1000);
                        break;
                    } else {
                        // window.alert('wrong');
                        console.log('wrong');
                        $(this).css('background', '#554236');
                        // console.log(japanese + "," + quastion + "," + correctAnswer + "," + select)
                        break;
                    }
                }
            }
        },
        error: err => {
            console.log(err);
        }
    });
});

//是否重抽
function getRandomQuation() {
    if (time < quastions.length - 15) {
        getInt();
        if (verify(aa)) {
            // console.log("same:" + aa)
            getRandomQuation();
        } else {
            // console.log("different:" + aa)
            randomMath.push(aa);
            time++;
        }
    } else {
        randomMath = [9999];
        time = 0;
        getInt();
        if (verify(aa)) {
            // console.log("same:" + aa)
            getRandomQuation();
        } else {
            // console.log("different:" + aa)
            randomMath.push(aa);
            time++;
            // console.log(time);
        }
    }
}

function getRandomAnswer1() {
    getInt2();
    if (bb == aa) {
        getRandomAnswer1();
    } else {
        // console.log("different bb:" + bb);
    }
}

function getRandomAnswer2() {
    getInt3();
    if (cc == aa || cc == bb) {
        getRandomAnswer2();
    } else {
        // console.log("different cc:" + cc);
    }
}

function getRandomAnswer3() {
    getInt4();
    if (dd == aa || dd == bb || dd == cc) {
        getRandomAnswer3();
    } else {
        // console.log("different dd:" + dd);
    }
}

//抽數字
function getInt() {
    aa = getRandomInt(quastions.length);
    // console.log(aa);
}

function getInt2() {
    bb = getRandomInt(quastions.length);
    // console.log(aa);
}

function getInt3() {
    cc = getRandomInt(quastions.length);
    // console.log(aa);
}

function getInt4() {
    dd = getRandomInt(quastions.length);
    // console.log(aa);
}

//驗證數字
function verify(aa) {
    for (let j = 0; j < randomMath.length; j++) {
        if (randomMath[j] == aa) {
            // console.log('same');
            return (true);
        };
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function getRandomOrder() {
    const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
    randomOrder = shuffleArray([0, 1, 2, 3]);
}