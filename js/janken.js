// 各要素を取得
const myHeading = document.querySelector('h1');
const myTest = document.getElementById('test');
const myResult = document.getElementById('result');
const myImage = document.getElementsByClassName("jankenimg")
const myBattle = document.getElementById('battle');
let elements = document.getElementsByName('janken');

// 初期化
var a = 0;
var myOption = "";

// ボタンがクリックされたときに起動
function buttonClick() {

    // チェックされているラジオボタンを探す。
    for (var i = 0; i < elements.length; i++) {
        if (elements.item(i).checked) {
            myOption = elements.item(i).value;
        }
    }

    // 敵の手を決める。
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    cpuNum = getRandomInt(3);

    // 数字と手の対応
    const num2Jan = {
        0: "グー",
        1: "チョキ",
        2: "パー"
    }

    const jan2Num = {
        "グー": 0,
        "チョキ": 1,
        "パー": 2
    }

    const num2Img = {
        0: "images/gu.png",
        1: "images/choki.png",
        2: "images/pa.png"
    }

    myBattle.textContent = "ジャンケン　" + num2Jan[cpuNum] + "!!";
    myImage[0].src = num2Img[cpuNum];

    myNum = jan2Num[myOption]

    var winner = (myNum - cpuNum + 3) % 3 === 0 ? "draw" : (myNum - cpuNum + 3) % 3 === 1 ? "負け" : "勝ち";

    // myHeading.textContent = 'Hello world!';
    if (winner === "draw") {
        myResult.textContent = "あいこ";
    } else {
        myResult.textContent = "あなたの" + winner;
    }

}

let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', buttonClick);
