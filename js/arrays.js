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