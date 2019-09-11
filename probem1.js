let check = document.getElementById("myCheck");



function dont(event) {

    event.preventDefault();
    alert("i told you not to click this");

}
check.addEventListener("click", dont);
