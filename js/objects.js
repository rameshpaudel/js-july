var person = {
    firstName: "John",
    lastName: "Doe",
    profile:[
        {
            name: "Nepal College of Medical Science",
            date: '2019-01-02'
        },
        {
            name: "Nepal HSEB College",
            date: '2017-01-02'
        }
    ],
    fullName: function(){
        return person.firstName + ' '+ person.lastName
    }
}


var car = {
    model : "T1",
    madeYear: 2019,
    madeIn: "China",
    price: 400000000000,
    description: "One of the best cars available on the market",
    mileage: '20km/l',
    height: 5.10,
    width: 5,
    length: 10,
    weight: '2000kg',

    area: function(){
        return car.width * car.length
    },
    formattedPrice : function(){
     return "Rs."+ car.price
    }
}

var testObject = {}

//Dynamic property loading

var key = prompt("Enter the key you want to see the value of")

if(key){
    // These two are same 
    //Check if the object has the property
    // car[key] !== undefined , car.hasOwnProperty(key)
    if(car.hasOwnProperty(key)){
        //If the property is a function
        if(typeof car[key] === "function"){
            //We invoke the function 
            alert("Property "+key+ " Value:" + car[key]())

        } else{
            alert("Property "+key+ " Value:" + car[key])
        }
        
    }
}