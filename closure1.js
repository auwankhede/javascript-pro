/**
 * Closure is created when a child function keep the environment of the parent scope even scope 
 * after the pararent funtion has already executed
 */


function foo() {
    var b = 1;
    function inner() {
        return b;
    }
    return inner;

}

var get_func_inner = foo();

console.log(get_func_inner());
console.log(get_func_inner());
console.log(get_func_inner);