# Auto-generate TOTP tokens
Can automatically generate and fill out login-fields for TOTP (authenticator app) tokens.

## Warning
Use at own risk. It **significantly reduces the security** of 2FA by effectively reducing it to 1-factor.

## Requirements
**For use**: Extension Greasemonkey for Chrome or Tampermonkey for Firefox

**For setting up**: Nodejs


## How to setup
1. Pull project
2. Go to service you want to add this to, add new authenticator. When it gives you the step to scan a QR-code, say you cannot scan it. You should then get a *secret* a roughly 16 character random string.
3. Copy the *secret*.
4. In the code, go to ./src/totp-config.js, insert the secret instead of `ENTER TOTP SECRET HERE`.
5. In command line, run: `npm install`, then `npm run build`
6. Go to ./dist/totp-autofill.user.js
7. If the authenticator setup asks for a token to verify, paste the contents of `./dist/totp-autofill.user.js` into a javascript console to get a token.
8. On the login page you want this to work for, add a new grease- or tampermonkey userscript, insert contents of `./dist/totp-autofill.user.js`.
9. In the top of the script in Grease- or Tampermonkey, replace `// @match        http*://example.com/` with `// @match        [whatever url you're currently on]`
