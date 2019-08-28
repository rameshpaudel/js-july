fetch('./test.json',{
    method: "POST",
    body:{
        name: "test",
        email: "test@test.com"
    }
})
    .then(response => {
        // return true;
        if (response.ok) {
            console.log(response);  
            return response.json();
        }
    })
    .then(function(body) {
        console.log(body[0])
        
        return [body[1],body[2]]
    
    })
    .then( data =>{
        console.log(data)
    })
    //Error listen 
    .catch(error => console.log(error))

    .finally(()=>console.log('COmpleted'))

    // Promise framework

var test = new Promise((resolve,reject)=>{
    
    setTimeout(()=>{
        
        return resolve(1000000);
    },5000)
    setTimeout(()=>{
        
        return reject({error: "The response was ended"});
    },1000)
})



test.then(data=>{
    console.log("The response from the test",  data)
}) 
.catch(error => console.error("Error occured", error))