// Faixa de preço

// Primeira opção.
let faixas = [
    {tooltip: 'até R$700', minimo: 0, maximo: 700},
    {tooltip: 'de R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
];

// Segunda opção.
function FaixaPreco(tooltip, minimo, maximo) {
    this.tooltip = tooltip;
    this.minimo = minimo;
    this.maximo = maximo;
}

let faixas2 = [
    new FaixaPreco('até R$700', 0, 700),
    new FaixaPreco('de R$700 a R$1000', 700, 1000),
    new FaixaPreco('R$1000 ou mais', 1000, 9999999)
]