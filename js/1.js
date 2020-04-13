var a=10;
/**
 * 1. 先声明一个变量，没有赋值（默认是undefined）
 * 2. 在当前作用域中开辟一个位置存储10这个值
 * 3. 让变量a和10关联起来(定义：赋值)
 */
var b=a;
b=13;
console.log(a);

// var obj1={name:'珠峰培训'};
var ary1=[12,23];
var ary2=ary1;
ary2.push(100);
console.log(ary1);

function sum(list){
    var s=0;
    for(var i=0;i<arguments.length;i++){
        var item=arguments[i];
        item=parseFloat(item);
        if(!isNaN(item)){
            s+=Number(item);
        }
    }
    return s;
}
