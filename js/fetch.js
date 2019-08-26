fetch('./test.json')
    .then(response => {
        // return true;
        if (response.ok) {
            console.log(response);  
            return response.json();
        }
    })
    .then(body => {
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

    // new Promise()

