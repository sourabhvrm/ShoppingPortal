validateUser();
window.addEventListener("DOMContentLoaded", init);

var catId = 0;

function init() {
    document.querySelector("#addCategoryBtn").addEventListener("click", addCategory);
    categoryOperations.generateCatId();
}

function validateUser() {
    if (!localStorage.username) {
        location.href = "login.html";
    }
}

function addCategory() {
    var catName = document.querySelector("#catName").value;
    categoryOperations.addCategory(new Category(catId, catName));
    // catId++;
    document.querySelector("#catName").value = "";
}