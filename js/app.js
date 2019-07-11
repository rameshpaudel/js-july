var arr = ["Ram","Shyam","Hari", "Gita"];

// Old way of looping through the arrays
// for(var i=0; i < arr.length;i++){
//     console.log(arr[i])
// }

//ForEach Property
// arr.forEach(function(value,index){
//     console.log(index,value)  
// })

function outputAllItems(value,index){
    console.log(index,value)  
}

// arr.forEach(outputAllItems)

var numOfChars = arr.map(function(value,index){
    return value.toLowerCase();
});


var anotherArr = [
    ["Ram","Shyam","Hari", "Gita"],
    ["Student", "Doctor","Lawyer", "Teacher"],
    [24,28,30,18]
]

console.log("======================================")
// var i = 0;
// anotherArr.map(function(value,index){
//     console.log(value[i])
//     i++;
// })

console.log(anotherArr[0][0],anotherArr[1][0],anotherArr[2][0])
console.log(anotherArr[0][1],anotherArr[1][1],anotherArr[2][1])

var finalArray = [];
for(var i = 0; i < anotherArr[0].length;i++){
    finalArray.push(anotherArr[0][i])
    finalArray.push(anotherArr[2][i])
    finalArray.push(anotherArr[1][i])
 
}

for(var i=0; i < finalArray.length; i += 3){
    console.log(finalArray[i], finalArray[i+1], finalArray[i+2])
}