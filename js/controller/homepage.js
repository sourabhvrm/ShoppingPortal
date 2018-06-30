validateUser();

var mainBody = document.querySelector("#mainBody");
function validateUser() {
    if (!localStorage.username) {
        location.href = "login.html";
    }
}