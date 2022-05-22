function calcular() {
    var x = window.document.querySelector('input#num')
    var saida = document.querySelector('div#res')
    if (x.value.length == 0) {
        window.alert('[ERRO] Por favor, digite um número!')
    } else {
        saida.style.display = 'block'
        saida.innerHTML = ''
        for (let i = 0; i <= 10; i++) {
            saida.innerHTML += `${x.value} x ${i} = ${x.value*i}</br>`
        }
    }
}