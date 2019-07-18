var text = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur, amet ad molestiae molestias saepe deserunt provident cupiditate in perferendis. Lorem ipsum, asperiores dignissimos, quo, est eum ab sint quibusdam unde placeat esse. Lorem ipsum,"


/* 
console.log(text.length)

//Enter the text you want to search

"Occurances", "Postion", "Search Value", "searched data"
//

Task 1: Convert general name into ABBR format
// John Doe
// John D.

//Task2: Change the casing of the given data
/// Function => Total => tOTAL */


//This will also work
var output = "";
for(var i = 0; i < text.length; i++){
    if(i > 20){
        output += text[i]
    }
}

//Returns true if the character is uppercased
//False if its lowercase character
function checkCase(character){
    if(character === character.toUpperCase()){
        return "capital";
    }else{
        return "small"
    }
}

function askUser(){
    //Checking the case of the characters
    var question = prompt("Type a character")
    
    if(checkCase(question) == 'capital'){
        console.log("Capital letter found")
    }else{
        console.log("Small letter found")
    }
}

askUser()