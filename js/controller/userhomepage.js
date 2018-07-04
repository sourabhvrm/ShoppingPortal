validateLogin();
window.addEventListener("DOMContentLoaded", init);
var products;
function init() {
    document.querySelector("#logout").addEventListener("click", logout);
    printName();
    categoryOperations.retrieveCategory().then(data => {
        localStorage.category = data;
        localStorage.category.split(",").forEach((element, index) => {
            printCategory(element, index);
        });
        addListenerButton();
    });
    productOperations.retrieveProducts().then(data => {
        products = data;
        console.log(products);
    })
}

function catButtonListener() {
    // console.log("Listener");
    let catid = this.getAttribute("catId");
    var parent = document.querySelector("#productBody");
    parent.innerHTML = "";
    products.forEach(element => {
        if (element.catId == catid) {
            let child = document.createElement("li");
            child.innerText = element.name + "\t" + element.price;
            parent.appendChild(child);
        }
    });
}

function addListenerButton() {
    document.querySelectorAll(".catButton").forEach(button => {
        // console.log("Button loop");
        button.addEventListener("click", catButtonListener);
    });
}

function printProducts() {

}

function printCategory(name, id) {
    let button = document.createElement("button");
    button.className = "btn btn-secondary catButton";
    button.innerText = name;
    button.setAttribute("catId", id);
    document.querySelector("#menu").appendChild(button);
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