var myAnchors = document.querySelectorAll('.container a')

for(let i = 0; i < myAnchors.length; i++){

    myAnchors[i].onclick = function(event){
        //Preventing a tag to navigate to other pages
        event.preventDefault();

        let parent = event.target.parentElement;

        let allChilds = parent.children
        allChilds[1].innerHTML += `<img height="100" src="images/logo.png" >` 
        console.log()

}
}