// Given a number, return the total sum of that number multiplied by every number between 1 and 10.

function multiSum(num, ten=10) {
	let total = 0;
	for(let i = 0; i <= 10; i++){
		total += i * num;
	}
	return total;
}



console.log(multiSum(1));