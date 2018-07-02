window.addEventListener("DOMContentLoaded", init);

function init() {
    document.querySelector("#welcomeTag").innerHTML = "Welcome " + localStorage.username;
    document.querySelector("#logout").addEventListener("click", logout);
}

function logout() {
    localStorage.username = "";
    if (!localStorage.username) {
        location.href = "../index.html";
    }
}