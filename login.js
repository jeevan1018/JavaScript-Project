/* var storedData = JSON.parse(localStorage.getItem("storeData"));
console.log(storedData)

//console.log(storedData.email)
document.getElementById("loginForm").addEventListener("submit", function(event) {
event.preventDefault();

var enteredUsername = event.target[0].value;

console.log(enteredUsername)
var enteredPassword = event.target[1].value;
console.log(enteredPassword)

if (storedData.email === enteredUsername  && storedData.password === enteredPassword) {
   alert("Login Successful")
   
   window.location.href = "home.html";
} else {
   alert("Invalid credentials. Please try again.");
}
}); */


document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    var enteredUsername = document.getElementById("loginUsername").value;
    var enteredPassword = document.getElementById("loginPassword").value;

    var storedData = JSON.parse(localStorage.getItem("storeData"));

    if (!storedData) {
        console.error("No stored data found.");
        return;
    }

    var isAuthenticated = storedData.map(user => user.email === enteredUsername && user.password === enteredPassword)
                                    .some(isMatch => isMatch);

    if (isAuthenticated) {
        alert("Login Successful");
        window.location.href = "home.html"; 
    } else {
        alert("Invalid credentials. Please try again.");
    }
});
