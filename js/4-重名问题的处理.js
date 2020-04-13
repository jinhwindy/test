/**
 * 1. 带var 和 function 关键字声明相同的名字，这种也算是
 * 重名（其实是一个fn，只是存储值得类型不一样）
 * 
 */
//在全局作用域下声明的变量，都相当于给window增加了一个属性
var fn=12;
function fn(){

}

/**
 * 2. 关于重名得处理：如果名字重复了，不会重新得声明，但是会重新得
 * 定义(重新赋值)[不管是变量提升还是代码执行阶段解释如此]
 */

/**
 * 变量提升：
 *  fn =...(1)
 *      ...(2)
 *      ...(3)
 *      ...(4)
 */

 /**
  * 输出结果：
  *     4
  *     4
  *     4
  *     uncaught TypeError:fn is not a function
  */
fn();
function fn(){console.log(1);}
fn();
function fn(){console.log(2);}
fn();
var fn=100;//=>带VAR的在提升阶段只把声明处理了,
           //赋值操作没有处理,所以在代码执行的时候需要完成赋值 FN=100

fn();//uncaught TypeError:fn is not a function
function fn(){console.log(3);}
fn();
function fn(){console.log(4);}
fn();