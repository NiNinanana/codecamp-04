function makeOdd(num){
	if(num % 2 === 1){	
	let str = '';
	for(i=0; i<=num; i++){
		if(i % 2 === 1){
			str = str + i	
		}
	}
	} else {
		console.log("홀수를 입력하시오.");
	}
}


// makeOdd(5) // 135
// makeOdd(7) // 1357