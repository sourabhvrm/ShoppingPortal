window.addEventListener("DOMContentLoaded", init);

var userId = 0;

function init() {
    document.querySelector("#userlogin").addEventListener("click", signin);
}
function signin() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    userOperations.verifyUser(username, password).then(data => {
        if (data) {
            localStorage.username = data.name;
            localStorage.id = data.id;
            location.href = "homepage.html";
        }
        else {
            document.querySelector("#error").style = "visiblity:true";
        }
    });
}