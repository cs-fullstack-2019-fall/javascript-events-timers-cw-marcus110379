let stop = document.getElementById("box");
let btn1 = document.getElementById("btn1");
let btn2= document.getElementById("btn2");

btn2.addEventListener("click", button2Disable);
btn1.addEventListener("click", buttonDisable);
function buttonDisable() {
    stop.removeAttribute("disabled", "");

}

function button2Disable() {
    add1.setAttribute("disabled", "");

}






// let button1 =document.getElementById("btn1");
// let button2 = document.getElementById("btn2");
//
//
// button1.addEventListener("click", btn1click);
// button2.addEventListener("click", btn2click);
//
//
//
// function btn1click(){
//     // alert("Clicked button 1")
//     button2.removeAttribute("disabled","");
//     button1.setAttribute("disabled",'');
//     button1.innerText="Don't Click Me!";
//     button2.innerText="Click Me"
// }
//
// function btn2click() {
//     button1.removeAttribute("disabled","");
//     button2.setAttribute("disabled","");
//     button2.innerText="Don't Click Me!";
//     button1.innerText="Click Me"
// }
