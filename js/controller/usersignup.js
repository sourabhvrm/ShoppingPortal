window.addEventListener("DOMContentLoaded", init);

var userId = 0;

function init() {
    document.querySelector("#signup").addEventListener("click", signupAction);
    userOperations.generateUserId();
}

function signupAction() {
    var name = document.querySelector("#name").value;
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    var email = document.querySelector("#email").value;
    var address = document.querySelector("#address").value;
    var pincode = document.querySelector("#pincode").value;
    var mobno = document.querySelector("#mobno").value;
    userOperations.addUser(new User(userId, name, username, email, password, address, pincode, mobno));
    localStorage.user = userId;
    console.log("Signed Up");
    location.href = "homepage.html";
}