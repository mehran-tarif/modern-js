function isPrime(n) {
	let isPrime = true;
	let i = 2;
	while (i < parseInt(n ** 0.5) + 1) {
		if (n % i == 0) {
			isPrime = false;
			// console.log(i)
			break;
		}
		i++;
	}
	return isPrime;
}

let a = 1000000007;
let b = 1000000008;
let c = 1000000021;

console.log(a, isPrime(a))
console.log(b, isPrime(b))
console.log(c, isPrime(c))