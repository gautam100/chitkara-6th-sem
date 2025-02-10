var a=20;
function sampleFunc(){
	var b = 10.5;
	//console.log(a,b);//20 10.5
	return function(){
		console.log(b);
	}
}
//console.log(a); // 20
//console.log(b); // error

let lv = sampleFunc();
lv();



