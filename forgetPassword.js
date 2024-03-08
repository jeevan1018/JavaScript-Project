function generateOTP() {
    var otp = Math.floor(1000 + Math.random() * 9000);
    alert("Your OTP is: " + otp);
   let storeOtp=sessionStorage.setItem("generatedOTP", otp);
  }
  
  
  function checkOTP() {
    var enteredOTP = document.getElementById("otpInput").value;
    var generatedOTP = sessionStorage.getItem("generatedOTP");
    
    
    if (enteredOTP === generatedOTP) {
      //alert("OTP Matched!");
    
      window.location.href = "setNewPassword.html";
    } else {
      alert("Incorrect OTP! Please try again.");
    }
  }