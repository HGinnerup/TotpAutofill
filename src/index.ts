const totp = require("totp-generator");
const totpConf = require("./totp-config");

// Keys provided must be base32 strings, ie. only containing characters matching (A-Z, 2-7, =).
const token = totp(totpConf.secret);


console.log(token); // prints a 6-digit time-based token based on provided key and current time


const autofillInterval = setInterval(() =>{
    const totpInputField: HTMLInputElement = document.querySelector("#verificationCodeInput");
    if(totpInputField == null)
        return;

        totpInputField.value = totp(totpConf.secret);
    
    clearInterval(autofillInterval);
}, 500);
