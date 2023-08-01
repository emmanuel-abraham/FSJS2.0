/*09. Boolean value is either true or false.
- Write three JavaScript statement example which provide truthy value.
- Write three JavaScript statement example which provide falsy value.*/




//Truthy Values :- 


console.log(Boolean(99));
console.log(Boolean("javascript"))
console.log(Boolean({}))

if (99) {
    console.log("if block executed") // 99 will be evaluated as true so this will execute.
} else {
    console.log("else block executed") // This won't execute.
}

if ("javascript") {
    console.log("if block executed") // "javascript" will be evaluated as true so this will execute.
} else {
    console.log("else block executed") // This won't execute.
}

if ({}) {
    console.log("if block executed") //{} will be evaluated as true so this will execute.
} else {
    console.log("else block executed") //This won't execute.
}

//Falsy values :-


console.log(Boolean(null)); //false
console.log(Boolean(0)); //false
console.log(Boolean(null)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean(undefined)); //false
if (null) {
    console.log("if block executed") // null will be evaluated as false so this won't execute
} else {
    console.log("else block executed") // This will execute
}

if (0) {
    console.log("if block executed") // 0 will be evaluated as false so this won't execute
} else {
    console.log("else block executed") // This will execute
}

if (NaN) {
    console.log("if block executed") // NaN will be evaluated as false so this won't execute
} else {
    console.log("else block executed") // This will execute
}






