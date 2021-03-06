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

9.  Prepare several images from initial, strip upper clothes, strip bottom clothes, strip underwear 1 as much as u like) (done)
10. display initial image (done)
11. if Player win 2 times in a row, then strip once. (done)
12. if Player lose 3 times in a row, cancel the strip once. (done)
13. when JS-chan reach her last strip, the game end. (done)
14. Add init function, restart button, and new game.

Optional
15. Add some CSS for Good Looks!


*/

// GLOBALS 
var playerChoice, battleBtn, scoreBoard, plScore, jsScore, roundPlayed, lastWin;

playerChoice = document.getElementById('playerChoice');
battleBtn = document.getElementById('battleNow');
plScore = document.getElementById('playerScore');
jsScore = document.getElementById('jsScore');
roundPlayed = document.getElementById('battleRound');
strip = document.getElementById('strip');

scoreBoard = [0, 0, 0, 0, 0, 0];
        
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
    var jsStance, jsHand, scr, ppr, rck, battleResult, battleBtn, currentResult ;
    scoreBoard[2] += 1;
    scr = 'Scissor';
    ppr = 'Paper';
    rck = 'Rock';

    // Stop Game if it's already reach 30 turns!
    if (scoreBoard[2] >= 21){
        stopGame();
        var word = document.createElement('h2');
        var node = document.createTextNode('Too Bad! Maybe Next Time');
        word.appendChild(node);
        document.querySelector('stripgirl').appendChild(word);
    }

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
    document.getElementById('jsHand').textContent = "JS stance is " + jsHand;

    // Display Battle Result
    document.getElementById('result').textContent = compare(playerChoice.value, jsHand);

    // Compare both hands to Get Result
    function compare(a, b){
       
        if ((a == scr && b == ppr) || (a == ppr && b == rck ) || ( a == rck && b == scr)) {
       
            scoreBoard[0] += 1;  // add 1 to win score 
            scoreBoard[4] += 1;  // add 1 to strip indicator 
            
            if( scoreBoard[4] >= 2){  //when this reach 2, then strip!
                scoreBoard[3] += 1;
                imgstrip(scoreBoard[3]); 
                scoreBoard[4] = 0;
                scoreBoard[5] = 0;
            }

            if ( scoreBoard[3] >= 5) {
                stopGame();
            }
            return battleResult = 'U Win!';

        } else if ((a == ppr && b == scr) || (a == rck && b == ppr ) || ( a == scr && b == rck)) {
            scoreBoard[1] += 1;
            scoreBoard[5] += 1; 
            if ( scoreBoard[5] >= 2){  //when this reach 2, then unstrip!
                if( scoreBoard[3] <= 0) {
                    scoreBoard[3] = 1; 
                }
                imgstrip(scoreBoard[3]); 
                scoreBoard[4] = 0;
                scoreBoard[5] = 0;
            }
            return battleResult = 'U Lose!';
        } else {
            return battleResult = 'It\'s a Draw!';
        }
    }


    // Strip Function 
    function imgstrip(x){
        if (x < 1){
            x = 1;
        } else if (x > 5){
            x = 5;
        }
        strip.src = './img/strip-0' + x + '.jpg'
        return strip;  
    }

    // Stop Game
    function stopGame(){
        document.getElementById('battleNow').disabled = true;
        document.getElementById('battleNow').innerText = 'Game Over!'
    }

    plScore.textContent = scoreBoard[0];
    jsScore.textContent = scoreBoard[1];   
    roundPlayed.textContent = scoreBoard[2]; 

    document.querySelector('.resultboard').classList.add('appear');
    
    //console.log('JS: ' + jsHand);
    //console.log('Player: ' + playerChoice.value);
});





// document.querySelector('.resultboard').classList.add('appear');


