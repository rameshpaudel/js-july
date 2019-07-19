//Basics of function
function sum(a,b){
    return a+b;
}



//Rest spread operator
function add(...args){
    return args.reduce(sum)
}
