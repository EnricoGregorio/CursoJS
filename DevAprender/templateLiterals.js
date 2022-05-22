// Template Literal

const nome = "Enrico";

const mensagem =
'Olá ' + nome + ', essa é a minha\n' +
'\'primeira\' mensagem.\n\n';

// Object {}
// Boolean true ou false
// String '' ou ""
// Template ```

const outra = 
`Olá ${nome}, essa é a minha 
'segunda' mensagem, dps da 1ª mensagem. ${2+2}`;

console.log(mensagem);
console.log(outra);