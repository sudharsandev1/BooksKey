// selecting popupoverlay popupbox button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("popup-add-btn")

addpopupbutton.addEventListener("click", function() {
    popupoverlay.style.display= "block"
    popupbox.style.display= "block"
})

var popupcancel=document.getElementById("cancel")
popupcancel.addEventListener("click", function(event){
    event.preventDefault()
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
})
var container=document.querySelector(".container")
var booktittleinput =document.getElementById("book-tittle-input")
var authornameinput=document.getElementById("author-name-input")
var descriptioninput=document.getElementById("book-description-input")
var popupadd=document.getElementById("add-book")
popupadd.addEventListener("click",function(event) {
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","books-container")
    div.innerHTML=`<h1>${booktittleinput.value}</h1> 
    <h5>${authornameinput.value}</h5>
    <p>${descriptioninput.value}</p>
    <button onclick="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display= "none"
    popupbox.style.display= "none"
})
function deletebook(event){
    event.target.parentElement.remove()
}