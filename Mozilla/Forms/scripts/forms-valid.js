
var form = document.getElementsByTagName("form")[1];
var email = document.getElementById('mail');
var error = document.querySelector(".error");

email.addEventListener("input", function (event) {
    if (email.validity.valid) {
        error.innerHTML = "";
        error.className = "error";
    }
}, false);

form.addEventListener("submit", function(event) {
    if (!email.validity.valid) {
        error.innerHTML = "I except an e-mail, darling!";
        error.className = "error active";
        event.preventDefault();
    }
}, false);