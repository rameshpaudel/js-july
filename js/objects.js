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
    }
}

