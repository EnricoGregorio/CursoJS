function Pessoa(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
    this.andar = function() {
        acao = "andando...";
        return acao;
    }
}

const p1 = new Pessoa('Enrico', 17, 'Estudante');
console.log(p1.andar());