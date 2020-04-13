/**
 * 当前函数执行，形成一个私有作用域A，A的上级作用域是谁，和他在
 * 哪里执行的没有关系，和他在哪里创建（定义）的有关系，他的上级作用域就是谁
 */

var a=12;
function fn(){
    //arguments: 实参集合
    //arguments.callee：函数本身fn
    //arguments.callee.caller:当前函数在哪里执行的，caller就是谁（记录的是
                    //执行的宿主环境），在全局作用域下执行caller的结果是null
    console.log(a);
}
fn();//=>12

function sum(){
    var a=120;
    fn();//=> 12
}
sum();





var n=10;
function fn(){
    var n=20;
    function f(){
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x=fn();
x();
x();
console.log(n);
/**
 * 输出：
 * 21
 * 22 
 * 23
 * 10
 */