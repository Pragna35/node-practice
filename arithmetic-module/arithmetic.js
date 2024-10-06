function operation(a,b,ope){
    switch(ope){
    case "add":
       return a+b;
        break;
        case "sub":
       return a-b;
        break;
        case "mul":
         return a*b;
        break;
        case "mod":
         return a%b;
        break;
        case "div":
      return a/b;
        break;
        default:
      return "select a valid operator"
}

}
//console.log(operation(5,5,"mul"));

module.exports = {operation}