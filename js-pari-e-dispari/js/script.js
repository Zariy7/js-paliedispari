let goBtn = document.getElementById('go');

goBtn.addEventListener('click', EvenOdds);

function EvenOdds(){
    //GET PLAYER CHOICES
    let playerNum = parseInt(document.getElementById('number').value);
    let playerChoice = document.getElementById('select').value;

    //STUFF NEEDED FOR HTML RESULTS DISPLAYING
    let resultDisplay = document.getElementById('result');

    //RESETS RESULT FROM LAST USAGE
    resultDisplay.innerText = ``;

    //CHECK IF USER NUMBER IS BETWEEN 1 AND 5 UNTIL THEY GET IT RIGHT
    while(playerNum < 1 || playerNum > 5){
        playerNum = parseInt(prompt('Number has to be between 1 and 5!'));
        document.getElementById('number').value = playerNum;
    }

    //FUNCTION NAMES ARE ACCURATE I SWEAR
    let npcNum = npcNumGen();
    let result = isSumOddEven(playerNum, npcNum);

    //HTML RESULTS DISPLAYING PART 1
    resultDisplay.innerText = `Il numero del tuo avversario era ${npcNum}!`

    //HTML RESULTS DISPLAYING PART 2
    if(playerChoice == result){
        resultDisplay.innerText += ` Hai vinto!`;
    }
    else{
        resultDisplay.innerText += ` Hai perso!`;
    }
}

function npcNumGen(){
    return Math.floor(Math.random() * 5) + 1;
}

function isSumOddEven(x, y){
    if((x+y) % 2 == 0){
        return 'Even';
    }
    else{
        return 'Odd';
    }
}