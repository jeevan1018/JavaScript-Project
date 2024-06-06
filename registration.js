/* let EmptyArray = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("user").value;
    var gender = document.getElementById("gender").value;
    var place = document.getElementById("place").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (phone.length !== 10) {
        document.getElementById("phoneError").style.display = "block";
    } else if (username.length < 6) {
        document.getElementById("userError").style.display = "block"; // Corrected to target the error message element
    } else if (password.length < 8) {
        document.getElementById("passError").style.display = "block";
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        var storeData = {
            email: email,
            phone: phone,
            username: username,
            gender: gender,
            place: place,
            password: password
        };
        EmptyArray.push(storeData);
        localStorage.setItem("storeData", JSON.stringify(EmptyArray));
        alert("Registration successful.");
        window.location.href = "login.html";
    }
}); // <-- Added closing curly brace here
 */

let EmptyArray = [];

document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("user").value;
    var gender = document.getElementById("gender").value;
    var place = document.getElementById("place").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (phone.length !== 10) {
        document.getElementById("phoneError").style.display = "block";
    } else if (username.length < 6) {
        document.getElementById("userError").style.display = "block"; // Corrected to target the error message element
    } else if (password.length < 8) {
        document.getElementById("passError").style.display = "block";
    } else if (password !== confirmPassword) {
        alert("Passwords do not match.");
    } else {
        var storeData = {
            email: email,
            phone: phone,
            username: username,
            gender: gender,
            place: place,
            password: password
        };
        EmptyArray.push(storeData);
        localStorage.setItem("storeData", JSON.stringify(EmptyArray));
        alert("Registration successful.");
        window.location.href = "login.html";
    }
});
