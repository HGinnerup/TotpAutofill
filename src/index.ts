const totp = require("totp-generator");
const totpConf = require("./totp-config");

const secret = totpConf.secret;

// Keys provided must be base32 strings, ie. only containing characters matching (A-Z, 2-7, =).
const token = totp(secret);


console.log(secret + ":" + token); // prints a 6-digit time-based token based on provided key and current time


const autofillInterval = setInterval(() =>{
    const totpInputField: HTMLInputElement = document.querySelector("#verificationCodeInput");
    if(totpInputField == null)
        return;

        totpInputField.value = totp(secret);
    
    clearInterval(autofillInterval);
}, 500);
