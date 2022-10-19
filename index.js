// Create a function that takes a number as an argument. Add up all the numbers from 1 to the number you passed to the function. For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.

function addUp(num) {
	let sum = 0;
	for (let i = 0; i <= num; i++){
		sum += i;
	}
	return sum;
}

console.log(addUp(4));
console.log(addUp(13));
console.log(addUp(600));