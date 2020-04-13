/**
 * 单例设计模式：
 *  1.表现形式
 *  var obj={
 *     xxx:xxx
 *  };
 * 
 *  在单例设计模型中，OBJ不仅仅是对象名，它被称为‘命名空间’[namespace],
 *  把描述事务的属性存放到命名空间中，多个命名空间是独立分开的，互不冲突
 * 
 *  2.作用
 *  =>把描述同一个事务的属性和特征进行‘分组、归类’（存储在同一个堆内存空间中）
 *  因此避免了全局变量之间的冲突和污染
 *  var pattern1={name:xxx}
 *  var pattern2={name:xxx}
 * 
 *  单例设计模式命名的由来
 *  =>每一个命名空间都是JS中Object这个内置类型的实例，而实例之间是相互独立，
 *  互补干肉的，所以我们称它为‘单例：单独的实例’
 */
var person1={
    name:'陆某某',
    age:18
};
var person2={
    name:'刘某某',
    age:21
};


/**
 * 高级单例模式
 *  1. 在给命名空间赋值的时候，不是直接赋值一个对象，而是先执行匿名函数，
 *  形成一个私有作用域AA（不销毁的栈内存），在AA中创建一个堆内存，把堆内
 *  存地址赋值给命名空间
 * 
 *  2. 这种模式的好处：我们完全可以在AA中创造很多内容（变量OR函数），哪些
 *  需要供外面调取使用的，我们可以暴露到返回对象中（模块化实现对的一种思想）
 */

 var namespace=(function(){
     var n=12;
     function fn(){
         //...
     }
     return{
         fn:fn
     }
 })();




/**
 * THIS
 *  1. 给当前元素的某个事件绑定方法，当时间触发方法执行的时候，方法中的THIS
 *  是当前操作的元素对象
 *  oBox.onclick=function(){
 *      //=>this.oBox
 *  }
 *  2. 普通函数执行，函数中的this取决于执行的主体，谁执行的，this就是谁（执行
 * 主体：方法执行，看方法名前面是否有"点"，有的话，点前面是谁，this就是谁，没
 * 有this是window）
 *      function fn(){
 *          console.log(1);
 *      }
 *      var obj={
 *          fn:fn
 *      }
 *      //执行的是相同的方法(不同地方在于函数子还行方法中的this是不一样的)
 *      obj.fn(); //this: obj
 *      fn();   //this: window
 * 
 *  //自执行函数执行，方法中的this是window
 *  ~function(){
 *      //=>this.window
 *  }();
 */
//========实例========
var n=2;
var obj={
    n:3,
    fn:(function(n){
        n*=2;
        this.n+=2; //自执行函数执行，this是window
        var n=5;
        return function(m){
            this.n*=2; //依执行者而定
            console.log(m+(++n));
        }
    })(n)//实参：n=2（是全局变量n的值）
         //不可以是obj.n，因为自执行函数执行的时候，堆内存还没有存储完成键值对，
         //和obj还没有关系，此时obj=undefined，obj.n会报错
}
var fn=obj.fn;
fn(3);
obj.fn(3);
console.log(n,obj.n);


/**
 * 输出：
 * 9
 * 10
 * 8 6 
 */


/*
 * 模块化开发
 *   1.团队协作开发的时候，会把产品按照功能板块进行划分，每一个功能板块有专人负责开发
 *   2.把各个版块之间公用的部门进行提取封装，后期在想实现这些功能，直接的调取引用即可（模块封装）
 */
var utils=(function () {
    return {
        aa:function () {

        }
    }
})();

//=>少帅
var skipRender = (function () {
    var fn = function () {
        //...
    };
    //...
    return {
        init: function () {

        },
        fn:fn
    }
})();
skipRender.init();

//=>敏洁
var weatherRender = (function () {
    var fn = function () {

    };
    return {
        init: function () {
            fn();//=>调取自己模块中的方法直接调取使用即可
            skipRender.fn();//=>调取别人模块中的方法
        }
    }
})();
weatherRender.init();
