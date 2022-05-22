function somar(num) {
    let total = 0;

    for (let i = 0; i <= num; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }

    return total;
}

console.log(somar(15));