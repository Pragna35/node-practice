

//converting given string to object

function strToObj(str){
 let ar = str.split("&")
//console.log(ar)
let obj = {}
for(var i of ar){
  
// let [key,value]=[i.split("=")[0],i.split("=")[1]] 
// obj[key] = value;
obj[i.split("=")[0]] = i.split("=")[1]

}
//console.log(obj)
return obj

}
//strToObj("id=1&name=pragna")

module.exports = {
    strToObj
}





