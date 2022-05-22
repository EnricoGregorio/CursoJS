// Igualdade de objetos.

function Endereco(rua, cidade, cep) {
    this.rua = rua;
    this.cidade = cidade;
    this.cep = cep;
    this.exibirEndereco = function () {
        const endereco = `Rua: ${this.rua}\nCidade: ${this.cidade}\nCEP: ${this.cep}`;

        return endereco;
    }
}

const e1 = new Endereco('a', 'b', 1);
const e2 = new Endereco('a', 'b', 1);
const e3 = e1;

function saoIguais(endereco1, endereco2) {
    // Comparar se as propriedades são iguais. Se forem, retornará true, caso contrário retornará false.
    return endereco1.rua === endereco2.rua && endereco1.cidade === endereco2.cidade && endereco1.cep === endereco2.cep;
}

function temEnderecoMemoriasIguais(endereco1, endereco2) {
    // Comparando se a referência dos objetos aponta para o mesmo local na memória. Ou seja, se um for reutilizado pelo outro retorna true, caso contrário retorna false.
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriasIguais(e1, e3));