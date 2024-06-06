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

   // Retrieve stored user data from local storage
   var storedData = JSON.parse(localStorage.getItem("storeData"));

   if (!storedData) {
       console.error("No stored data found.");
       return;
   }

   // Check if entered credentials match stored data
   if (storedData.email === enteredUsername && storedData.password === enteredPassword) {
       // Successful login
       alert("Login Successful");
       window.location.href = "home.html"; // Redirect to home page
   } else {
       // Invalid credentials
       alert("Invalid credentials. Please try again.");
   }
});
