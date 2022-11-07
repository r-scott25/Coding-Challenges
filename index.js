// Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualToZero(num) {
	if (num <= 0) {
		return true;
	} else {
		return false;
	}
}

console.log(lessThanOrEqualToZero(5));

console.log(lessThanOrEqualToZero(0));

console.log(lessThanOrEqualToZero(-2));