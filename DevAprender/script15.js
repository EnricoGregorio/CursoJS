// Criar um obj postagem usando Construction Function.
/*
propriedades:
título,
mensagem,
autor
vizualizações,
comentários.
estaAoVivo
*/

function Blog(titulo, mensagem, autor, vizualizacoes, comentarios, estaAoVivo) {
    this.tit = titulo;
    this.msg = mensagem;
    this.autor = autor;
    this.views = vizualizacoes;
    this.coment = comentarios;
    this.aoVivo = estaAoVivo;
}

const p1 = new Blog('a', 'b', 'c', 200, [{autor : 'a', comentario : 'b'}, {autor : 'b', comentario : 'c'}], true);

console.log(p1);