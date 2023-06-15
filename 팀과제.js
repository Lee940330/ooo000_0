
// function 1 (랜덤수 생성) 2(s, b 개수 파악) 3(유저 숫자 받아오기, 반복문)

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// 랜덤 넘버 제너레이터
function generateNumber() {
    let randomNumber = new Set()
    while (randomNumber.size < 3) {
        randomNumber.add(Math.floor(Math.random() * 10));
    }
    let a = []
    randomNumber.forEach(element => { a.push(element) })

    return a;
}

// 스트라이크, 볼 개수 파악

function checkGuess(computerNumber, userNumber) {
    var strikes = 0;
    var balls = 0;



    for (var i = 0; i < 3; i++) {
        if (userNumber[i] === computerNumber[i]) {
            strikes++;
        } else if (computerNumber.includes(userNumber[i])) {
            balls++;
        }
    }

    return [strikes, balls];
}


// 사용자에게 입력값 받기


function playGame() {
    var computerNumber = generateNumber();
    // console.log(computerNumber)
    var attempts = 0;

    function restart() {
        rl.question('세 자리 숫자를 입력하세요: ', (userNumber) => {
            attempts++;
            console.log(userNumber);
            let b = userNumber.split('').map(x => Number(x));
            // console.log(b)

            let result = checkGuess(computerNumber, b);
            let strikes = result[0];
            let balls = result[1];

            let output = `${attempts}번째 시도: ${b} - ${strikes}S${balls}B`;
            console.log(output)

            if (strikes === 3) {
                console.log('축하합니다! 숫자를 맞췄습니다.');
                console.log(`총 시도 횟수: ${attempts}`);
                console.log('게임을 종료합니다.');
                rl.close();
            } else {
                restart();
            }
        });
    }
    restart();

}

// 게임 시작
playGame();