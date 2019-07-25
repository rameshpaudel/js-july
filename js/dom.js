
var container = document.getElementsByClassName('container');
var header = document.getElementById("header")

var allDiv = document.getElementsByTagName('div')
var allHeadings = document.getElementsByTagName('h1')


var firstContainer = document.querySelector(".container")
var firstHeader = document.querySelector("#header")


var firstDiv = document.querySelector('div');


var allDivs = document.querySelectorAll('div h1');


firstDiv.style = "background-color:#ededed; color: green"



var paragraph = document.querySelector('p')

// allDivs[0].style = 'text-tcxransform: uppercase'


function changeBackground(){
    console.log("test change bg",  allDiv[allDiv.length - 1])
    allDivs[allDivs.length - 1].style = 'background: yellow; color: green'
}


//TO redirect to another page

//document.location.assign("url_to_redirect_to")

firstHeader.onclick = function(){
    console.log("Clicked on header")
}

//Onclick fires the event when clicked so we won't invoke the function
allDiv[1].onclick = changeBackground


firstHeader.onclick = function(event){
    // console.log(event.target)
    firstHeader.classList.add("header")
}

function randomNumber(max = 255){
    return Math.round(Math.random() * max)
}


function changeBodyBg(){
    allDivs[0].style = `background:rgba(${randomNumber()} , ${randomNumber()} , ${randomNumber()}, ${Math.random()} )`
}

var theInterval = setInterval(changeBodyBg, 1000)



setTimeout(function(){
    clearInterval(theInterval)
}, 5000)