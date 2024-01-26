const password = "sst";

function checkPassword() {
    const inputPassword = document.getElementById("password-input").value;
    if (inputPassword === password) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("content").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}