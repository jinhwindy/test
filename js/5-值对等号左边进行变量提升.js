/**
 * 变量提升：
 *  var fn; =>只对等号左边进行变量提升
 *  sum=AAAFFF111;
 */

sum();
fn();//typeError: fn is not function
//只有函数才能执行，此时fn是变量，所以类型错误

//匿名函数之函数表达式
var fn=function(){
    console.log(1);
};//代码执行到此处，会把韩素华赋值给FN

//普通函数
function sum(){
    console.log(2);
}
