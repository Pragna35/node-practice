let http = require("http");
let port1 = 5000;
let url = require("url");

let {strToObj} = require("../otp-module/query.js")


let server1  = http.createServer((req,res) => {
    const parsedUrl  = url.parse(req.url);
    //  console.log(parsedUrl)


    if(req.method == "POST" && parsedUrl.pathname == "/register"){
        const object = strToObj(parsedUrl.query)
        // console.log(object)
         req.statusCode = 200
         const output = {
           result: (req.statusCode == 200)?"sucessfully registered" : "not registered",
           details: object
         }
           res.write(JSON.stringify(output))
    }else{
        res.write("not a proper request method")
    }
 
    res.end();
})

server1.listen(port1,() => {
    console.log("I'm running on the port " +port1)
})