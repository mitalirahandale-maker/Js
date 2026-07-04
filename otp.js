const prompt = require("prompt-sync")();

let username = "admin"
let password = "1234"

let userNameInput = prompt("Enter Username :")
let passwordInput = prompt("Enter Password :")

if (userNameInput == username && passwordInput == password) {
    console.log("/n Username & Password Verified ")

    let otp = Math.floor(Math.random() * 9000) + 1000
    console.log("Your OTP is :", otp)
    let userOtp = Number (prompt("Enter Otp :"))

    if (userOtp == otp){
        console.log("n/✅ Login Succesfull")
    } else{
        console.log("/n ❌ Invaild Otp")
    }

}else{
    console.log("/n ❌ Invaild username or password")
}