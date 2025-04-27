const someRandomNum = () => 5;
let ar = [someRandomNum(), { a: 1, b: 2 }, ["Raj", 100, true]];
console.log(ar);

console.log("----------------------------");
ar.forEach((i) => {
    if(typeof i === "number"){
        console.log(i);
    }else if (Array.isArray(i)) {
      for(let temp of i){
        console.log(temp);
      }
    }else if(!Array.isArray(i)){
        for(let key in i){
            console.log(i[key]);
        }
    }
    
    
});
