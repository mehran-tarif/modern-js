let n = 1000000007;

let isPrime = true;

let i = 2;
while (i < parseInt(n ** 0.5) + 1) {
	if (n % i == 0) {
		isPrime = false;
		console.log(i)
		break;
	}
	i++;
}

console.log(n, isPrime)

