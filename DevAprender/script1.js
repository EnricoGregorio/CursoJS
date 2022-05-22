function retornarMaior(n1, n2) {
    if (n1 > n2) {
        return n1 + " é maior do que " + n2 + ".";
    } else if (n2 > n1){
        return n2 + " é maior do que " + n1 + ".";
    } else {
        return "Os dois números são iguais.";
    }
    // let valorMaior = max(10, 10);
    // return n1 > n2 ? n1 : n2;
}

console.log(retornarMaior(8, 8));