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
        }); 
        
        
         */

        document.getElementById("setPassword").addEventListener("submit", function(event) {
            event.preventDefault();
        
        
            var username = document.getElementById("username").value;
            var newPassword = document.getElementById("password").value;
            var confirmNewPassword = document.getElementById("confirmPassword").value;
        
            
            if (newPassword === "" || confirmNewPassword === "") {
                alert("Passwords should not be empty.");
                return;
            }
        
            if (newPassword !== confirmNewPassword) {
                alert("Passwords do not match.");
                return;
            }
        
            
            var storedData = JSON.parse(localStorage.getItem("storeData")) || [];
            console.log(storedData);
    
            var userToUpdate = storedData.map(function(user) {
                if(user.username === username || user.phone === username){
                    user.password= confirmNewPassword
                    alert("password chnaged")
                }
                else{
                    alert("user not found")
                }
            });
            console.log(userToUpdate);
        
            // if (!userToUpdate) {
            //     alert("User not found.");
            //     return;
            // }
        
            
            // userToUpdate.password = newPassword;
        
        
            localStorage.setItem("storeData", JSON.stringify(storedData));
        
            
            alert("Password changed successfully!");
            window.location.href = "home.html";
        });
        