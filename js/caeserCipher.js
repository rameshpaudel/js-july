function encryptData(myValue){
    var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    var result = "";

    for(var i = 0; i < myValue.length; i++){
        //Converting the current character to lower case
        let currentCharacter = myValue[i].toLowerCase();
        let currentIndex = alphabets.indexOf(currentCharacter);
    
        let finalIndex = currentIndex + 2;
        
        let finalCharacter = alphabets[finalIndex];

        if(myValue[i] == myValue[i].toUpperCase()){
            finalCharacter = finalCharacter.toUpperCase()
        }
        result = result + finalCharacter;
        
    
    }
    console.log("The input was ", myValue, ' and the encrypted text is ', result)    
    return result;
}


function decryptData(myValue){
    var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
    var result = "";

    for(var i = 0; i < myValue.length; i++){
        //Converting the current character to lower case
        let currentCharacter = myValue[i].toLowerCase();
        let currentIndex = alphabets.indexOf(currentCharacter);
    
        let finalIndex = currentIndex - 2;
        let finalCharacter = alphabets[finalIndex];

        if(myValue[i] == myValue[i].toUpperCase()){
            finalCharacter = finalCharacter.toUpperCase()
        }
        result = result + finalCharacter;
    
    }
    console.log("The input was ", myValue, ' and the encrypted text is ', result)    
    return result;
}

