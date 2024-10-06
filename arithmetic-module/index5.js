let webserver = require("http");
let link = require("url");

const { strToObj } = require("../otp-module/query.js");
const {operation} = require("./arithmetic.js")


let server3 = webserver.createServer((req,res) => {
   // console.log(req.url)

    const parsed = link.parse(req.url);
    //console.log(parsed)

    const parsedQuery = parsed.query;
   // console.log(parsedQuery)

const obj =strToObj(parsedQuery)
//console.log(+obj.a,+obj.b,obj.ope)


let z = operation(+obj.a,+obj.b,obj.ope)
console.log(z)

let output = {
    op: z
}
res.statusCode = 200;
res.write(JSON.stringify(output))
    res.end();
})

server3.listen(3005,() => {
    console.log("sever connected to the port")
})