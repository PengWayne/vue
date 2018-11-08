// index3
//作用域的不同

var a = 1;
let b = 2;
function foo() {
    if (false){
        var a = 1;
        let b = 2;
    }
    console.log('a:'+a); //undefined
    console.log('b:'+b) //2
}
foo();




console.log('c:'+c); //undefined
console.log('d:'+d); //no defined
var c;
let d;