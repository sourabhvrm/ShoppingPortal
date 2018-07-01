validateUser();
window.addEventListener("DOMContentLoaded", init);

var id = 0;

function init() {
    document.querySelector("#addProductBtn").addEventListener("click", addProduct);
    productOperations.generateId();
    categoryOperations.retrieveCategory().then((data) => {
        // console.log(data);
        populateCategory(data);
    }).catch(err => console.log(err));
}

function validateUser() {
    if (!localStorage.username) {
        location.href = "login.html";
    }
}

function populateCategory(categories) {
    var categoryParent = document.querySelector("#category");
    categoryParent.innerHTML = "";
    categories.forEach((value, index) => {
        let option = document.createElement("option");
        option.setAttribute("value", index);
        option.innerText = value;
        categoryParent.appendChild(option);
    });
}

function validateProductData() {

}

function clearFields() {
    document.querySelector("#prodName").value = "";
    document.querySelector("#prodDesc").value = "";
    document.querySelector("#imageUrl").value = "";
    document.querySelector("#price").value = "";
}

function addProduct() {
    var date = new Date();
    var curDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    var name = document.querySelector("#prodName").value;
    var desc = document.querySelector("#prodDesc").value;
    var image = document.querySelector("#imageUrl").value;
    var price = document.querySelector("#price").value;
    var category = document.querySelector("#category").value;
    var product = new Products(id, name, desc, category, 0, image, curDate, price, 0, 0, 0, true);
    productOperations.addProduct(product);
    clearFields();
    id++;
}