// slowest
function primeNumberGenerator(number) {

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0 && number != i) isPrime = false;
    }
    return isPrime;

}


// Medium 

function primeNumberGenerator(number) {

    let isPrime = true;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i == 0 && number != i) isPrime = false;
    }
    return isPrime;

}


// fastest
function primeNumberGenerator(number) {

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i == 0 && number != i) isPrime = false;
    }
    return isPrime;

}

const startTime = Date.now();
const isPrime = primeNumberGenerator(1111111111111111);
const endTime = Date.now();
console.log('time take', endTime - startTime);
console.log(isPrime);

/* 

function primeNumberGenerator(number) {
    let numberArray = new Array(number + 1).fill(true)

    for (let i = 2; i <= number; i++) {
        if (numberArray[i] == true && i % i == 0) {
            for (let j = i + 1; j <= number / 2; j++) {
                if (j % i == 0) {
                    numberArray[j] = false;
                }
            }
        }
    }

    const primeNumber = [];
    // console.log(numberArray)
    for (let i = 2; i <= number; i++) {
        if (numberArray[i] == true) {

            primeNumber.push(i)
        }
    }
    return primeNumber;
}



const startTime = Date.now();
const primenumber = primeNumberGenerator(1111111);
const endTime = Date.now();
console.log('time take', endTime - startTime);
console.log(primenumber); */