// while loop

//initilazation

// while (condition) {}
// code
// inc/dec
// }


// print 1 to 5

// let i =1

// while (i  <= 5){
//     console.log(i)
//     i++
// }

// SUM OF DIGITS
// 1234

// let num = 657

// let sum = 0
// while (num > 0){

// let digit = num % 10

//  sum = sum + digit

// num = Math.floor(num / 10)

// }
// console.log("sum of digit:",sum)



// PALINDROME NUMBER :- kisi bhi number ko revers  kro to ohh apne orignal numbwr kee brabr hota 

// let num = 122

// let original = num

// let reverse = 0

// while (num > 0){
// let digit = num % 10
// reverse = reverse * 10 + digit
// num = Math.floor(num / 10)
// }

// if (original == reverse){
//     console.log("Palindrome")
// }else{
//     console .log("Not palindrome")
// }


// login password retry system

// const prompt = require ("prompt-sync")();
// let password = ""
// let attempts = 3

// while (attempts > 0) {
//     password = prompt("Enter Password :")

//     if (password == "1234"){
//         console.log("✅Login Successfull")
//         break
//     }else{
//         attempts---

//         console.log("wrong password")

//         console.log("Remaining attempts:", attempts)
//     }
// }

// if (attempts == 0){
//     console.log("Account locked")
// }

// print 1 -10

// for (let i = 0 ; i<= 10 ; 1++)

// break

// 1-100

// for(let i = 1 ; i<= 100; i++){
//     if (i === 33){
//         break;
//     }
//     console.log(i)
}

CONTINUE

1-10

for(let i = 1 ; i<= 10; i++){
    if (i === 4){
        continue;
    }
    console.log(i)
}



MENU -DRIVEN PROGRAM

const prompt =require ("prompt-sync")();
let choice = 0

while (choice !== 5){
    console.log("=====MENU=====")
    console.log("1. ADDITION")
    console.log("2.Substraction")
    console.log("3. Multiplication")
    console.log("4.Division ")
    console.log("5.Exit")

    choice = Number(prompt("Enter your choice:"))


    if(choice >= 1 && choice <= 4){
        let num1 = Number(prompt("Enter your number:"))
        let num2= Number(prompt("Enter your number"))

        if (choice === 1){
            console.log("Result =", num1 + num2)
        }
         else if (choice === 2){
            console.log("Result =", num1 - num2)
        }
        else if (choice === 3){
            console.log("Result =", num1 * num2)
        }
        else if (choice === 4){
            console.log("Result =", num1 / num2)
        }
        

    }
    else if (choice === 5){
            console.log("Thank you !")
        }

        else {
            console.log("Invalid choices")
        }

}





















