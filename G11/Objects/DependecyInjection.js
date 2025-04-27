function anyFunc(a,b){
    return this.x *a + this.y*b;
}

const obj = {
    x:5,
    y:6
}

console.log(anyFunc.call(obj,2,3));