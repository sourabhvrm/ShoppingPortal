window.addEventListener("DOMContentLoaded", init);

var userId = 0;

function init() {
    document.querySelector("#userlogin").addEventListener("click", signin);
    userOperations.generateUserId();
}
function signin() {
    var username=document.querySelector("#username").value;
    var password=document.querySelector("#password").value;
}