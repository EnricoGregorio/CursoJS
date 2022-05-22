// Obj postagem de blog
/*
Eu quero que você crie neste exercício um obj de postagem de blog que vai conter as seguintes propriedades:
título,
mensagem,
autor
vizualizações,
comentários (autor, mensagem),
estaAoVivo
*/


const postagem = {
    titulo : 'a',
    mensagem : 'b',
    autor : 'c',
    vizualizacoes : 384,
    comentarios : [
        {autor : 'd', mensagem : 'e'},
        {autor : 'f', mensagem : 'g'},
        {autor : 'h', mensagem : 'h'}
    ],
    estaAoVivo : true
}

console.log(postagem);