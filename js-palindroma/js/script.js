let btn = document.getElementById('checkBtn');
btn.addEventListener('click', palCheck);

function palCheck(){
    let word = document.getElementById('wordCheck').value;
    word = word.toLowerCase();
    let wordArray = word.split('');

    removePunctuation(wordArray);
    console.log(wordArray);
    let reverseWord = wordArray.toReversed();
    console.log(reverseWord);

    if(wordArray.join('') === reverseWord.join('')){
        document.getElementById('result').innerText = `E' un palindromo!`;
    }
    else {
        document.getElementById('result').innerText = `Non e' un palindromo!`;
    }
}

function removePunctuation(array){
    let removeCharacters = [' ', ',', '-', '.', '_', '/', "'", '"', '?', '!']

    for(let i=0; i<array.length; i++){
        for(let j=0; j<removeCharacters.length; j++){
            if(array[i] === removeCharacters[j]){
                array.splice(i, 1);
            }
        }
    }

    return array;
}
