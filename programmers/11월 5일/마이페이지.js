const myShopping = [
		{ category: "과일", price: 12000　},
		{ category: "의류", price:10000　 },
		{ category: "의류", price: 20000　},
		{ category: "장난감", price: 9000 },
		{ category: "과일", price: 5000　 },
		{ category: "의류", price: 10000  },
		{ category: "과일", price: 8000　　},
		{ category: "의류", price: 7000　　},
		{ category: "장난감", price: 5000  },
		{ category: "의류", price: 10000　 },
]


let gradeCount = 0;
let grade = 0;
let price = 0;

let count = myShopping.length - 1

for(i=0; i<myShopping.length; i++){
if(myShopping[i].category === "의류") {
	price = price + myShopping.price[i];
	gradeCount++
}
}

if(gradeCount <= 2){
	grade = "Bronze"
} else if(gradeCount <=4) {
	grade = "Silver"
} else {
	grade = "Gold"
}



console.log(`의류를 구매한 횟수는 총 ${count}회 금액은 ${price}원이며 등급은 ${grade}입니다.`);


// 의류를 구매한 횟수는 총 5회 금액은 57000원이며 등급은 Gold입니다.