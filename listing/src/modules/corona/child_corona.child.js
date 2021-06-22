process.on('message', message => {
    console.log('I am in child process', message);
    const primeNumber = primeNumberGenerator(message.number);
    process.send(primeNumber);
    process.exit();
});

function primeNumberGenerator(number) {
    let numberArray = new Array(number + 1).fill(true);

    for (let i = 2; i <= number; i++) {
        if (numberArray[i] == true && i % i == 0) {
            for (let j = i + 1; j <= number; j++) {
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

            primeNumber.push(i);
        }
    }
    return primeNumber;
};