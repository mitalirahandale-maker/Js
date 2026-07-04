const prompt = require("prompt-sync")();


console.log("==== PRODUCTS====")
console.log("1. LAPTOP - 40000")
console.log("2.MOUSE - 500")
console.log("3. KEYBOARD - 1000")
console.log("4. HEADPHONE - 1500")

let choice = Number(prompt ("select product (1-4):"))
let qty = Number(prompt ("enter quantity:"))

let price = 0

if (choice === 1){
    price = 4000
}
else if( choice === 2){
    price = 500
}
else if (choice === 3){
    price = 1500
}
else if (choice === 4){
    price = 1500

}
else{
    console.log("invalid products")
    Process.exit()
}

let total = prices * qty

let discount = 0

if (total >=20000){
    discount = total * 20/100
}
else if (total >= 5000){
    discount = total * 10/100
}

let amountafterdiscount = total-discount;

let  gst = amountafterdiscount * 18/100

let finalamount = amountafterdiscount + gst

console.log("\n====bill====")

console.log("==== PRODUCTS====")
console.log("product prices:",price)
console.log("quantity:", qty)
console.log("total amount :", total)
console.log("discount:" , discount)
console.log("GST 18%:", gst)
console.log("final amount :",finalamount)











