/*
WAP to find out factorial of any number between 1 and 8

WAP in which find out a number is prime or not
*/

function checkPrimeNum(num){
	let isPrime = false;
	for(i=2;i<num;i++){
		if(num%i ===0){
			isPrime = true;
			break;	// <<<<<<<<<<<<<
		}
	}

	if(isPrime === true){
		console.log(num,"is a prime number");
	}else{
		console.log(num,"is not a prime number");
	}

}

checkPrimeNum(6);
