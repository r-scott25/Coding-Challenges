// There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.


function remainder(x, y) {
	const remain = x % y;
	
	return remain;
}

console.log(remainder(1, 3));

console.log(remainder(3, 4));

console.log(remainder(-9, 45));

console.log(remainder(5, 5));