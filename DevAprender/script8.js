function showAsteriscos(qtd) {
    let message = "";
    for (let i = 1; i <= qtd; i++) {
        message += "*";
        console.log(message);
    }
    return 0;
}

showAsteriscos(10);