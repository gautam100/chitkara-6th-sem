const anyRandomNum = ()=>5;

const ar = [anyRandomNum(), {a:1,b:2,c:3}, [1,'a',true]];

//console.log(ar);
console.log(ar[1].a);
console.log(ar[2][0]);

//----------------------------------------------------------
//-- Dependency Injection
function presentDI(param1,param2){
    return myObj.a + myObj.b + param1 + param2;
}

let myObj = {
    'a':1,
    'b':2
}
console.log(presentDI.call(myObj,10,20));