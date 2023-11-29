let btn = document.getElementById('checkBtn');
btn.addEventListener('click', palCheck);

function palCheck(){
    //GET INPUT WORD FROM USER
    let word = document.getElementById('wordCheck').value;

    //MAKE INPUT WORD ALL LOWERCASE
    word = word.toLowerCase();

    //TURN INPUT WORD INTO AN ARRAY
    let wordArray = word.split('');

    //REMOVE ALL PUNCTUATION
    removePunctuation(wordArray);
    //console.log(wordArray);

    //MAKE A SECOND ARRAY THAT IS THE REVERSE OF THE FIRST ARRAY
    let reverseWord = wordArray.toReversed();
    //console.log(reverseWord);

    //TURN BOTH ARRAYS INTO STRINGS AGAIN AND CHECK IF THEY ARE EXACTLY THE SAME
    if(wordArray.join('') === reverseWord.join('')){
        document.getElementById('result').innerText = `E' un palindromo!`;
    }
    else {
        document.getElementById('result').innerText = `Non e' un palindromo!`;
    }
}

function removePunctuation(array){
    let removeCharacters = [' ', ',', '-', '.', '_', '/', "'", '"', '?', '!'];

    //CHECKS EVERY ELEMENT INSIDE THE INPUT ARRAY
    for(let i=0; i<array.length; i++){
        //COMPARES THEM ALL TO THE REMOVECHARACTERS ARRAY ELEMENTS
        for(let j=0; j<removeCharacters.length; j++){
            //IF IT FINDS A MATCH IT REMOVES THAT ELEMENT FROM THE INPUT ARRAY
            if(array[i] === removeCharacters[j]){
                array.splice(i, 1);
            }
        }
    }
    
    //AND THEN IT RETURNS THE INPUT ARRAY BACK FROM WHENCE IT CAME
    return array;
}
