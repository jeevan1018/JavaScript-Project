document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var username = document.getElementById("username").value;
    var gender = document.getElementById("gender").value;
    var place = document.getElementById("place").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (phone.length !== 10) {
        // Display phone validation error message
        document.getElementById("phoneError").style.display = "block";
    } else if (password.length < 8) {
        // Display password length validation error message
        document.getElementById("passError").style.display = "block";
    } else if (password !== confirmPassword) {
        // Passwords do not match
        alert("Passwords do not match.");
    } else {
        // All validations passed
        // Store data in local storage
        var storeData = {
            email: email,
            phone: phone,
            username: username,
            gender: gender,
            place: place,
            password: password
        };
        localStorage.setItem("storeData", JSON.stringify(storeData));
        alert("Registration successful.");
        window.location.href="login.html";
    }
});
