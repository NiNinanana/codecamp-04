function bigNum(str) {
	let abc = 0;
	for (let i=0; i <= str.length; i++) {
		if (Number(str[i]) >= abc) {
			abc = Number(str[i])
		}
	}
	console.log(abc)
}


// bigNum("12345") // 5
// bigNum("87135") // 8