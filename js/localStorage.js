var products =[
    {
        name: "Bag",
        price: 2000,
        description: "Awesome bag",
        quantity: 50
    },
    {
        name: "Bok",
        price: 200,
        description: "Awesome book",
        quantity: 20
    }
]

//Conversion of JSON to string
var strigifiedProducts = JSON.stringify(products)

//Adding items to the localStorage
localStorage.setItem('products', strigifiedProducts)

//Parsing the string localstorage item to JSON
var parsed = JSON.parse(localStorage.getItem('products'))