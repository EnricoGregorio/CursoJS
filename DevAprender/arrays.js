// Add elementos.
const numeros = [1, 2, 3];
// console.log(numeros);
// Início
numeros.unshift(0);
// console.log(numeros);
//Meio
numeros.splice(1, 0, 'a');
// console.log(numeros);
// Final
numeros.push(5);
// console.log(numeros);
//////////////////////////////////////////////////////////////////
// Econtrando elementos
const numeros2 = [1, 2, 3, 4];
// console.log(numeros2.indexOf(3));
// Verifica se um elemento existe.
// console.log(numeros.includes(2));

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

// console.log(marcas.includes({id: 1, nome: 'a'})); Retorna false, porque como se trata de objs, temos referências diferentes.

const marca = marcas.find(function(marca) {
    return marca.nome === 'a';
});
// console.log(marca);
//////////////////////////////////////////////////////////////////
// Removendo elementos
const numeros3 = [1, 2, 3, 4, 5, 6];
//Final
const ultimo = numeros3.pop();
// console.log(ultimo);
// console.log(numeros3);
// Início
const inicio = numeros3.shift();
// console.log(inicio);
// console.log(numeros3);
// Meio
const meio = numeros3.splice(2, 1);
// console.log(meio);
// console.log(numeros3);
//////////////////////////////////////////////////////////////////
// Esvaziando um array
const numeros4 = [1, 2, 3, 4, 5, 6];
// Solução 1
//numeros4 = []; Precisa que o array n seja const

// ***** Solução 2 - para apagar todas as referências
// numeros4.length = 0;
// console.log(numeros4);

// Solução 3 - para apagar todas as referências
// numeros4.splice(0, numeros4.length);
// console.log(numeros4);

// Solução 4
while(numeros4 > 0) {
    numeros4.pop();
}
// console.log(numeros4);
//////////////////////////////////////////////////////////////////
// Combinando e cortando arays
const primeiro = [1, 2, 3];
const segundo = [4, 5, 6];
// Combinar
const combinado = primeiro.concat(segundo)
// console.log(combinado);
// Dividir
const repartido = combinado.slice(-5); // Ou pode ter só um parâmetro (positivo ou negativo) ou nenhum.
// console.log(repartido);
//////////////////////////////////////////////////////////////////
// Operador Spread
const combinado2 = [...primeiro, 'a', ...segundo, 4*5];
// console.log(combinado2);
const clonado = [...combinado];
// console.log(clonado);
//////////////////////////////////////////////////////////////////
// Iterando um array com foreach
const numeros5 = [1, 2, 3, 4, 5, 6];
// numeros5.forEach((numero, indice) => console.log(numero, indice));
//////////////////////////////////////////////////////////////////
// Combinando arrays
const numeros6 = [1, 2, 3, 4, 5, 6];
const juntado = numeros6.join(', ');
console.log(juntado);

const frase = "Olá bem vindo ao curso";
const resultado = frase.split('-'); // Slug - estilo de URL com hífen entre as palavras.
console.log(resultado);