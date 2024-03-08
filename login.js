var storedData = JSON.parse(localStorage.getItem("storeData"));
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
});