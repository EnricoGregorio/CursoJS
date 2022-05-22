// 0 - 59:   F
// 60 - 69:  D
// 70 - 79:  C
// 80 - 89:  B
// 90 - 100: A

function calcMedia(notas) {
    if (typeof notas === "object") {
        let soma = 0;
        for (let i of notas) {
            soma += i;
        }
        const media = soma / notas.length;
        return media;
    } else {
        console.log("O valor não é um array.");
        return 0;
    }
}

function mediaAnualAluno(media) {
    if (media < 60) {
        return "F";
    } else if (media < 70) {
        return "D"
    } else if (media < 80) {
        return "C"
    } else if (media < 90) {
        return "B"
    } else {
        return "A"
    }
}

const notas = [90, 90, 10, 90];
const media = calcMedia(notas);
const resultado = mediaAnualAluno(media)

console.log(resultado);