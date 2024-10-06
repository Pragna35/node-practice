 //addition
 let add = function (a,b){
return a+b;
}

//substraction
let sub = function (x,y){
    return x-y;
    }

 //random otp generator  --- method-1
    function otpGenerator(){
       
       let otp=Math.floor( Math.random()*10000);
       if(otp<1000){
        otp+= 1000
       }
    //    console.log(otp)
    return otp;
    }


 //random 6-digit  otp generator using array   -----  method-2
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function generateOTP() {
  let otp = '';
  for (let i = 0; i < 6; i++) {
    otp += numbers[Math.floor(Math.random() * numbers.length)];
  }
  return otp;
}

//console.log(generateOTP());




 //random otp generator  --- method-3
function otpGen(n){
  let otp ="";
  for(i=0;i<n;i++){
      num = Math.floor(Math.random()*10);
      otp+=num
  }
  return otp;
}
// console.log(otpGen(4))


//random password generator

let passwordGenerator = function(length){ 
    const allCharacters ="ABCDEFGHIJKLMNOPQRSTUVWXYZ`)$@^#@&!*_+-.>|{/:,};<0123456789abcdefghijklmnopqrstuvwxyz";
   
    let password = "";
    for(let i=0;i<length;i++){

        const randomIndex =Math.floor( Math.random()*allCharacters.length);
        password+= allCharacters[randomIndex];
     
    }
    return password;
}

module.exports = {add,sub,otpGenerator,generateOTP,passwordGenerator,otpGen}