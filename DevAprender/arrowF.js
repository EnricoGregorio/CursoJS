// Arrow functions

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

// Se vc tem apenas 1 parâmetro, vc n precisa dos () que o cercam.
// Se vc tem apenas um parâmetro, vc n precisa das {} e do return.
// No caso de nenhum parâmetro, o () já bastará.

const marca = marcas.find(marca => marca.nome === 'a');

// const marca = marcas.find(function(marca) {
//     return marca.nome === 'a';
// });

const numeros = [1, 2, 3, 38, 12, 100, 23, 54, 86, 26];

const maiorQ50 = numeros.find(numero => numero >= 50);
console.log(maiorQ50);
// 100