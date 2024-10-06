var res = require("./app.js");
console.log(res)

//calling addition function from app.js 
console.log(res.add(50,10));

//substraction
console.log(res.sub(30,10));

//otp generator function
console.log(res.otpGenerator()); //method-1
console.log(res.generateOTP());   //method-2
console.log(res.otpGen(4))       //method-3

//password generator 
console.log(res.passwordGenerator(6));
