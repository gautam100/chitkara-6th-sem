let myFunc = function(a){
	return function(b){
		return function(c){
			return a+b+c;
		}
	}
}

console.log(myFunc(5)(10)(6));
console.log(myFunc(5)(10));