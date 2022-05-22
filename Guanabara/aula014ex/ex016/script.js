function contar() {
    let ini = document.getElementById('txti')
    let fim = document.querySelector('input#txtf')
    let passo = document.querySelector('input#txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar! Por favor, preencha todos os dados!'
        //window.alert('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando:</br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Consideramos que será 1 passo.')
            p = 1
        }
        if (i < f) {
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (let c = i; c >= f; c-= p) {
                res.innerHTML += ` ${c} \u{1F449}`               
            }
        }
        res.innerHTML += `\u{1F3c1}`
    }
}