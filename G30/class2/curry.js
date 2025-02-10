let outer = function(a){
	return function(b){
		return function(c){
			return a+b+c;
		}
	}
}

console.log(outer(5)(10)(2));
console.log(outer(5)(10));