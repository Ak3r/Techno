// 1) Написать функцию, которая раскладывает 
// число на входе на простые множители 
// а) В императивном стиле
// б) В декларативном стиле

//imperative style
function getPrimeFactors(n) {
    const primeFactors = [];
    let div = 2;

    while (n >= 2) {
        if (n % div === 0) {
            primeFactors.push(div);
            n = n / div;
        } else {
            div++;
        }
    }

    return primeFactors;
}

console.log(getPrimeFactors(84));

//declarative style
function getPrimeFactors(n) {
    const primeFactors = [];
    
    for (let i = 2; i <= n; i++) {
        while(isPrime(i) && n % i === 0) {
            primeFactors.push(i);
            n /= i;
        }
    }

    return primeFactors;
}

function isPrime(n) {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}

console.log(getPrimeFactors(84));