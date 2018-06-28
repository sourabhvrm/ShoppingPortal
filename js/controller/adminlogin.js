window.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#adminlogin").addEventListener("click", loginButtonAction);
}

function loginButtonAction() {
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;
    adminOperations.verifyLogin(username, password).then(data => {
        console.log(username);
        if(username==data["username"]&&password==data["password"]){
            localStorage.username="Admin";
            location.href="homepage.html";
        }
    }).catch(error => console.log(error));
}