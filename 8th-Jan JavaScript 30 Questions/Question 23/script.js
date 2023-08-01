//23. Write a program to check that the number given by the user is a prime number or not.


function checkPrimeNumber(num){
    if(num <= 1){
        console.log(`Please enter a number greater than 1`)
        return
    } else {
        let isPrime = true;

        for (let i = 2; i<= Math.sqrt(num); i++){
            if (num % i === 0){
                isPrime = false
                break;
            }
        }

        if (isPrime){
            console.log(`${num} is a prime number`)
        } else {
            console.log(`${num} is not a prime number`)
        }
    }


}

let userInput = 7;
checkPrimeNumber(userInput);

userInput = 2;
checkPrimeNumber(userInput);

userInput = 24;
checkPrimeNumber(userInput);