let sum=function(a){
	return function(b){
		return function(c){
			return a+b+c;
		}
	}
}
console.log(sum(10)(5)(20));