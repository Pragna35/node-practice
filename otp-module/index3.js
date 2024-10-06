let api = require("http");
//pre-defined url module
let url = require("url");

//here we are destructuring(assigning key to the function definition getting from otepgenerator module) the object { otpGen: [Function: otpGen] } getting from otpgenerator module
 let { otpGen } = require("./otpgenerator.js")


const { strToObj } = require("./query");

let server =api.createServer(function(req,res){
    //getting path & query params from api using req.url
    console.log(req.url)

    //parsing the req.url using parse method of URL module (we get url object)
    let  urlObject = url.parse(req.url)

    //we get url object
   // console.log(urlObject)

    //console.log(urlObject.pathname)  //it returns pathname of url


    let queryparams = urlObject.query
   // console.log(queryparams)   //it returns only query of url
    
      let bb = strToObj(queryparams)
     // console.log(bb)

    res.write(otpGen(bb.count))
    res.end();
})

server.listen(3001,()=>{
    console.log("conneced to port")
})