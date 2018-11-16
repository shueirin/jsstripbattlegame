/*

ver. 1
1. Create a Rock Paper Scissor game (done)
2. User pick one option (done)
3. Submit -> CPU will pick random option (done)
4. compare -> show result (done)

ver. 1.5

5. show result when battle now button is clicked (done)
6. battle now button only appear when user pick options first time (done)
7. add round counter (done)
8. Add score board for player and JS-chan (done)


ver 1.7 Add Strip Opponent Feature
9.  Prepare several images from initial, strip upper clothes, strip bottom clothes, strip underwear 1 as much as u like)
10. display initial image
11. if Player win 2 times in a row, then strip once.
12. if Player lose 2 times in a row, cancel the strip once.
13. when JS-chan reach her last strip, the game end.
14. Add init function, restart button, and new game.



*/

// GLOBALS 
var playerChoice, battleBtn, scoreBoard, plScore, jsScore, roundPlayed;

playerChoice = document.getElementById('playerChoice');
battleBtn = document.getElementById('battleNow');
plScore = document.getElementById('playerScore');
jsScore = document.getElementById('jsScore');
roundPlayed = document.getElementById('battleRound');

scoreBoard = [0, 0, 0];
        
//display battle button 
playerChoice.addEventListener('change', function(){
    if (playerChoice.value !== ""){
        battleBtn.className = 'appear';
    } else {
        console.log('please enter');
    }
});

battleBtn.addEventListener('click', function(){
    //set variable
    var jsStance, jsHand, scr, ppr, rck, battleResult, battleBtn;
    scoreBoard[2] += 1;
    scr = 'Scissor';
    ppr = 'Paper';
    rck = 'Rock';

    //let js pick her hand
    jsStance = Math.floor(Math.random() * 3) + 1;
    if (jsStance == 1){
        jsHand = scr;
    } else if (jsStance == 2){
        jsHand = ppr;
    } else {
        jsHand = rck;
    }

    // Display your pick on DOM
    document.getElementById('playerHand').textContent = "Your stance is " + playerChoice.value;

    // Display JS pick on DOM
    document.getElementById('jsHand').textContent = "JS-chan stance is " + jsHand;

    // Display Battle Result
    document.getElementById('result').textContent = compare(playerChoice.value, jsHand);

    // Compare both hands to Get Result
    function compare(a, b){
        if ((a == scr && b == ppr) || (a == ppr && b == rck ) || ( a == rck && b == scr)) {
            scoreBoard[0] += 1;
            return battleResult = 'U Win!';
        } else if ((a == ppr && b == scr) || (a == rck && b == ppr ) || ( a == scr && b == rck)) {
            scoreBoard[1] += 1;
            return battleResult = 'U Lose!';
        } else {
            return battleResult = 'It\'s a Draw!';
        }
    }

    plScore.textContent = scoreBoard[0];
    jsScore.textContent = scoreBoard[1];   
    roundPlayed.textContent = scoreBoard[2]; 

    document.querySelector('.resultboard').classList.add('appear');
    
    //console.log('JS: ' + jsHand);
    //console.log('Player: ' + playerChoice.value);

    
});


// document.querySelector('.resultboard').classList.add('appear');


