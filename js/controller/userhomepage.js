validateLogin();
window.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#logout").addEventListener("click", logout);
    printName();
    productOperations.retrieve().then(data => {
        localStorage.products = data;
        localStorage.products.foreach(element => {

        });
    });
}

function retrieveProducts() {

}

function logout() {
    localStorage.clear();
    location.href = "login.html";
}

function printName() {
    document.querySelector("#welcomeTag").innerText = "Welcome " + localStorage.username;
}

function validateLogin() {
    if (!localStorage.username) {
        location.href = "login.html";
    }
}