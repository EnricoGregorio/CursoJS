const filme = {
    titulo : "Duna",
    ano : 2021,
    diretor : "Harry Potter",
    personagem : "Timóteo"
}

function exibirPropriedades(obj) {
    for (let i in obj) {
        if (typeof obj[i] === "string"){
            console.log(i, obj[i]);
        }
    }
}

exibirPropriedades(filme)