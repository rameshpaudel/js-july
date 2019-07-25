var myAnchors = document.querySelectorAll('.container a')

for (let i = 0; i < myAnchors.length; i++) {

    myAnchors[i].onclick = function (event) {
        //Preventing a tag to navigate to other pages
        event.preventDefault();
        console.log(event)
        let parent = event.target.parentElement;

        let allChilds = parent.children
        allChilds[1].innerHTML += `<img height="100" src="images/logo.png" >`
        console.log()

    }
}

var btn = document.querySelector('button');
var footer = document.querySelector('footer');

function logEvent(e){
    console.log(e)
}


btn.addEventListener("click", logEvent)


// btn.onclick = function(e){
//     console.log(e)
// }

footer.onclick = function(e){
    console.log('clicked on footer', e)
}


document.addEventListener('copy', function(e){
    e.preventDefault();
    alert("You are not allowed to copy our data")
})

var logo = document.querySelector('.logo')

logo.addEventListener('mouseenter', function(e){
    e.srcElement.style = "padding: 40px"
})
logo.addEventListener('mouseleave', function(e){
    e.srcElement.style = "padding: 0px; background-color: #000"
})


document.addEventListener('scroll', function(e){
    // console.log(e.target.clientX)

    // console.log(window.scrollX)
    console.log(window.scrollY)

    if(window.scrollY > 400){
        document.body.style= 'padding: 80px'
    } else{
        document.body.style = 'padding:0'
    }
})