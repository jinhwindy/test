//让a和b交换位置
var a=10;
var b=20;
var c=a;
a=b;
b=c;
console.log(a,b);

//让e和f交换位置
var e=10;
var f=20;
e=e+f;
f=e-f;
e=e-f;
console.log(e,f);

//让G和F交换位置
var g=10;
var h=20;
[g,h]=[h,g];
console.log(g,h);