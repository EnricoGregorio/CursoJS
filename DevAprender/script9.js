function identificarNumeroPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

function showNumerosPrimos(limite) {
    for (let i = 2; i <= limite; i++) {
        if (identificarNumeroPrimo(i)) {
            console.log(i);
        }
    }
    return 0
}

showNumerosPrimos(15);