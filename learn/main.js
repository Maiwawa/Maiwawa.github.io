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
$('.btn').click(function () {
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
    console.log(randomAnwers);
    document.getElementById("q").innerHTML = quastions[aa];
    document.getElementById("a").innerHTML = answers[randomAnwers[0]];
    document.getElementById("b").innerHTML = answers[randomAnwers[1]];
    document.getElementById("c").innerHTML = answers[randomAnwers[2]];
    document.getElementById("d").innerHTML = answers[randomAnwers[3]];
});

$('.answer').click(function (event) {
    console.log($(this).text());
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
                        window.alert("correct");
                        console.log(japanese + "," + quastion + "," + correctAnswer + "," + select)
        
                    } else {
                        window.alert('wrong');
                        console.log(japanese + "," + quastion + "," + correctAnswer + "," + select)
        
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
    if (time < 46) {
        getInt();
        if (verify(aa)) {
            // console.log("same:" + aa)
            getRandomQuation();
        } else {
            console.log("different:" + aa)
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
            console.log("different:" + aa)
            randomMath.push(aa);
            time++;
            console.log(time);
        }
    }
}

function getRandomAnswer1() {
    getInt2();
    if (bb == aa) {
        getRandomAnswer1();
    } else {
        console.log("different bb:" + bb);
    }
}

function getRandomAnswer2() {
    getInt3();
    if (cc == aa || cc == bb) {
        getRandomAnswer2();
    } else {
        console.log("different cc:" + cc);
    }
}

function getRandomAnswer3() {
    getInt4();
    if (dd == aa || dd == bb || dd == cc) {
        getRandomAnswer3();
    } else {
        console.log("different dd:" + dd);
    }
}

//抽數字
function getInt() {
    aa = getRandomInt(46);
    // console.log(aa);
}

function getInt2() {
    bb = getRandomInt(46);
    // console.log(aa);
}

function getInt3() {
    cc = getRandomInt(46);
    // console.log(aa);
}

function getInt4() {
    dd = getRandomInt(46);
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