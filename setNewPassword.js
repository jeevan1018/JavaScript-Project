 /*   var storedData = JSON.parse(localStorage.getItem("storeData"));
        console.log(storedData) */

        /*
        let form = document.getElementById("setpassword");

        form.addEventListener("submit", function(event) {
            event.preventDefault();
            console.log("working")

            var enteredPassword = event.target.querySelector("#password").value;
            var enteredConfirmPassword = event.target.querySelector("#confirmPassword").value;

            if (enteredPassword === "" || enteredConfirmPassword === "") {
                alert("Passwords should not be empty");
            } else if (enteredPassword !== enteredConfirmPassword) {
                alert("Passwords do not match");
            } else {
                
                var storedData = JSON.parse(localStorage.getItem("storeData"));

storedData.password=event.target.querySelector("#confirmPassword").value

localStorage.setItem("storeData",JSON.stringify(storedData)); 
                alert("Password changed successfully!");
                window.location.href = "home.html";
            }
        }); */
        document.getElementById("setPasswordForm").addEventListener("submit", function(event) {
            event.preventDefault();
        
            var newPassword = document.getElementById("newPassword").value;
            var confirmNewPassword = document.getElementById("confirmNewPassword").value;
        
            if (newPassword === "" || confirmNewPassword === "") {
                alert("Passwords should not be empty.");
                return;
            }
        
            if (newPassword !== confirmNewPassword) {
                alert("Passwords do not match.");
                return;
            }
        
            // Retrieve stored user data from local storage
            var storedData = JSON.parse(localStorage.getItem("storeData"));
        
            if (!storedData) {
                alert("User data not found.");
                return;
            }
        
            // Update the password in the stored data
            storedData.password = newPassword;
        
            // Save the updated data back to local storage
            localStorage.setItem("storeData", JSON.stringify(storedData));
        
            alert("Password changed successfully!");
            window.location.href = "home.html"; // Redirect to home page
        });
        