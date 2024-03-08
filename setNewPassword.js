 /*   var storedData = JSON.parse(localStorage.getItem("storeData"));
        console.log(storedData) */
        let form = document.getElementById('setpassword');

        form.addEventListener("submit", function(event) {
            event.preventDefault();

            var enteredPassword = event.target.querySelector('#password').value;
            var enteredConfirmPassword = event.target.querySelector('#confirmPassword').value;

            if (enteredPassword === "" || enteredConfirmPassword === "") {
                alert("Passwords should not be empty");
            } else if (enteredPassword !== enteredConfirmPassword) {
                alert("Passwords do not match");
            } else {
                
                var storedData = JSON.parse(localStorage.getItem("storeData"));

storedData.password=event.target[1].value;

localStorage.setItem("storeData",JSON.stringify(storedData)); 
                alert("Password changed successfully!");
                window.location.href = "home.html";
            }
        });