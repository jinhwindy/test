//在全局作用域下声明一个变量，也相当于给window全局对象设置了一个属性，
//变量的值就是属性值（私有作用域中声明的私有变量和window没啥关系）


//带var
/*
console.log(a);//undefined
console.log(window.a);//undefined 
console.log('a' in window);//true 
//在变量提升阶段，在全局作用域中声明了一个变量A，
//此时就已经把A当作属性值赋值给window了，只不过此时还没有给a赋值，
//默认值为undefined
//in：检测某个属性是否隶属于这个对象
var a=12;//=>全局变量值修改，win的属性值也跟着修改
console.log(a);//全局变量A 12
console.log(window.a);//window的一个属性明A 12

a=13;
console.log(a);//=>13

window.a=14;
console.log(a);//=14
//全局变量和window中的属性存在‘映射机制’

*/


//不带var
/*
console.log(a);//uncaught referenceError: a is not defined
console.log(window.a);//undefined 不报错：对象的机制（没有这个属性则输出为undefined）
console.log(a in window);//false
a=12;//window.a=12的简写
console.log(a);//12  浏览器将a视作window.a
console.log(window.a);//12
*/



//不加var的本质是window的属性
//  加var的本质是全局变量




/*
var a=12,
    b=13;//这样写B是带var的

var a=b=12;//这样写B是不带var的，上述写法相当于：var a=12; b=12;
*/


console.log(a,b);//undefined undefined
var a=12,
    b=12;

function fn(){
    console.log(a,b);//undefined 12
    /**
     * 私有作用域中带var和不带var也有区别
     * 1. 带var的在私有作用域变量提升阶段，都声明为私有变量，和外界没有任何关系
     * 2. 不带var不是私有变量，会相它的上级作用域中查找，看是否为上级的变量，不是
     *    则继续向上查找，一直到找到window为止（我们把这种查找机制叫做：“作用域链”）
     *    也就是我们在私有作用域中操作的这个非私有变量，是一直操作别人的
     */
    var a=b=13;
    //把私有的a赋值为13
    //把全局的b赋值为13
    console.log(a,b);//13 13
}

fn();
console.log(a,b);//12 13