var city = prompt("Enter the name of the city");
var link = `http://api.openweathermap.org/data/2.5/weather?q=${city}&apikey=afa9d0b68e1e20833b4611872a177f31`;

fetch(link)
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error while making the request', error))

// #Cat link
//https://aws.random.cat/meow
