var alphabets = "abcdefghijklmnopqrstuvwxyz".split("");

function encryptData(myValue,rounds = 2){
    
    var result = "";

    for(var i = 0; i < myValue.length; i++){
        //Converting the current character to lower case
        let currentCharacter = myValue[i].toLowerCase();
        let characterIndexCount = alphabets.length -1;
        let currentIndex = alphabets.indexOf(currentCharacter);
        
        let finalIndex = currentIndex + rounds;
        
        if(finalIndex > characterIndexCount){
            finalIndex  = finalIndex - alphabets.length 
        } 
        let finalCharacter = alphabets[finalIndex];

        if(myValue[i] == myValue[i].toUpperCase()){
            finalCharacter = finalCharacter.toUpperCase()
        }
        result = result + finalCharacter;
        
    
    }
    // console.log("The input was ", myValue, ' and the encrypted text is ', result)    
    return result;
}


function decryptData(myValue, rounds = 2){
    var result = "";

    for(var i = 0; i < myValue.length; i++){
        //Converting the current character to lower case
        let currentCharacter = myValue[i].toLowerCase();

        let characterIndexCount = alphabets.length -1;

        let currentIndex = alphabets.indexOf(currentCharacter);

        let finalIndex = currentIndex - rounds;
      
        if(finalIndex < 0){
            finalIndex  =   alphabets.length + finalIndex
        } 

        let finalCharacter = alphabets[finalIndex];


        if(myValue[i] == myValue[i].toUpperCase()){
            finalCharacter = finalCharacter.toUpperCase()
        }
        
        result = result + finalCharacter;
    
    }
    return result;
}



var enc = "bbbzzzaeee"
var dec = "zzzxxxyccc"

var encrypted = encryptData(enc);
var decrypted = decryptData(encrypted);