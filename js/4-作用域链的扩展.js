function fn(){
    /**
     * 代码提升：无
     */
    console.log(b);//Uncuaght regerenceError: b is not defined
    b=13;
    console.log('b' in window);//true
    //在作用域链查找的过程中，如果找到window也没有这个变量，
    //相当于给window设置了一个属性B（window.b=13）
    console.log(b);//13
}
fn();
console.log(b);//13



function fn(){
    var a=12;
    b=13;
    console.log(a,b);
}
fn();
console.log(a,b)