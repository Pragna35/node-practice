//5-10-24

function otpGen(n){
    let otp ="";
    for(i=0;i<n;i++){
        num = Math.floor(Math.random()*10);
        otp+=num
    }
    return otp;
  }
 // console.log(otpGen(4))

  module.exports = {otpGen}
