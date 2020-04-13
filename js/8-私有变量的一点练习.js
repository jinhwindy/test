var ary=[12,23];

function fn(ary){
    console.log(ary);//[12,23]
    ary[0]=100;
    ary=[100];
    ary[0]=0;
    console.log(ary);//[0]
}
fn(ary);
console.log(ary);//[100,23]