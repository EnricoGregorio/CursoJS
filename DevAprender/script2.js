function fizzBuzz(num) {
    if (typeof(num) !== "number") {
        return "Não é um número.";
    } else {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } else if (num % 3 === 0) {
            return "Fizz";
        } else if (num % 5 === 0) {
            return "Buzz";
        } else {
            return "Não é divisível por 3 ou 5."
        }
    }
}

console.log(fizzBuzz("7"))