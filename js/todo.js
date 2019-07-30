function toggleModal(){
    document.querySelector('.modal').classList.toggle('show');
}

//List of all tasks
var allTasks = [];


function createARow(sn, task, createdAt){
    //When getting data from param the obj sets the key automatically
    
    var obj = {sn,task,createdAt}
    //Appending the object to tasklist
    allTasks.push(obj);

     //Table row
    var tableRow = document.createElement('tr');
    //Table descriptions
    var fDescription = document.createElement('td')
        fDescription.innerText = sn
    var sDescription = document.createElement('td')
        sDescription.innerText = task
    var tDescription = document.createElement('td')
        tDescription.innerText = createdAt

    var fourthDescription = document.createElement('td')
    //Buttons
    var hideBtn = document.createElement('button')
    hideBtn.innerText = "Hide"
    var delBtn = document.createElement('button')
    delBtn.innerText = "Delete"

    //Adding buttons to the fourth column
    fourthDescription.appendChild(hideBtn)
    fourthDescription.appendChild(delBtn)

    //Adding all description to the row
    tableRow.appendChild(fDescription)
    tableRow.appendChild(sDescription)
    tableRow.appendChild(tDescription)
    tableRow.appendChild(fourthDescription)

    return tableRow;

}


function createTask(e){

    var tBody = document.querySelector('tbody');    
    e.preventDefault();
    
    //Fetching the value from the input 
    var value = e.srcElement.children.item('input').value;

    if(value.length < 5){
        document.querySelector('.modal').innerHTML += "Must be more than 5 characters"
        return ;
    }
    
    //Figuring out the SN
    let finalSn = 1;

    //Fetch the last sn from the dom
    if(document.querySelector('tbody tr:last-child')){
        let sn = document.querySelector('tbody tr:last-child td').textContent
        finalSn = parseInt(sn) + 1;
    }    

    //Generating the Row
    var theRow = createARow(finalSn, value, Date());
    //Adding row into the tBody
    tBody.appendChild(theRow);

    //Empty the text field value
    // e.srcElement.children.item('input').value = "";
    
    //Close the modal 
    setTimeout(toggleModal, 500)

}






document.querySelector("#addTask").addEventListener('click', toggleModal)
document.querySelector(".close").addEventListener('click', toggleModal)
// var form = document.querySelector('form')
// form.addEventListener('submit',createTask)
document.body.addEventListener('submit',createTask)


window.addEventListener('keydown', function(e){
    // console.log(e)
    if(e.code === 'ControlRight'){
        toggleModal()
    }
})

// window.addEventListener('keypress', function(e){
//     // console.log(e)
//     // if(e.key === 't'){
//     //     toggleModal()
//     // }
// })
// window.addEventListener('keyup', function(e){
//     console.log(e)
//     // if(e.key === 't'){
//     //     toggleModal()
//     // }
// })

window.addEventListener('load',function(){
    //
    console.log('Hello World, I\'m loaded')
})