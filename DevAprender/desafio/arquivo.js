function verificarConvidado() {
    let dono = 'enrico';
    let convidados = ['fabricio', 'gregorio', 'lucas', 'rafael'];
    let nomeConvidado = window.document.getElementById('nome').value;
    let inputDono = window.document.getElementById('dono').value;
    
    if (convidados.includes(nomeConvidado) && inputDono === dono) {
        return document.getElementById('permissao').innerHTML = 'Aprovado!';
    } else {
        return document.getElementById('permissao').innerHTML = 'Negado!';
    }
}