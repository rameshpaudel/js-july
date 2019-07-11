var arr = ["Ram","Shyam","Hari", "Gita"];

for(var i=0; i < arr.length;i++){
    console.log(arr[i])
}

//ForEach Property
arr.forEach(function(value,index){
    console.log(index,value)  
})

function outputAllItems(value,index){
    console.log(index,value)  
}

arr.forEach(outputAllItems)