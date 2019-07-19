var test = []

for(var i = 0; i <= 100;i++){
    test.push(i)
}

//Filtering out the datas

var filteredData = test.filter(function(value,index){
    if(value <= 30 && value > 9){
        return true
    }
    return false
})


var arr= [1,2,3,4,5,6,7,8,9];



function sumOfAllNo(first,second){
    return first + second;
}

var results = arr.reduce(sumOfAllNo)


var strArr= ["Hello","Bonjur","Hola"];

var strResults = strArr.reduce(function(a,b){
    return a+b;
})

//Enter the total number of inputs
// User : 5
//Enter your first input
// User: 10
//
//Enter your second input
// User: 20
//Enter your third input 
// User: 60



var tArray = [1,2,3,4,5,6,7,8,9,10];

function checkNumber(value){
    if(value > 4 && value < 9){
        return true;
    }
    return false
}

var filteredData = tArray.filter(checkNumber)



var names = ['J',"K"]

var newArr = [...names,...tArray]