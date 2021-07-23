let number = window.document.querySelector('input#fnum')
let list = window.document.querySelector('select#flist')
let result = document.querySelector('div#res')
let values = []

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function isOnTheList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function add() {
    if (isNumber(number.value) && !isOnTheList(number.value, values)) {
        values.push(Number(number.value))
        let option = document.createElement('option')
        option.text = `Valor ${number.value} adicionado.`
        list.appendChild(option)
        result.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    number.value = ''
    number.focus()
}

function finalizar() {
    if (values.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        let total = values.length
        let bigger = values[0]
        let smaller = values[0]
        let sum = 0
        let average = 0
        for (let i in values) {
            sum += values[i]
            if (values[i] > bigger) {
                bigger = values[i]
            }

            if (values[i] < smaller) {
                smaller = values[i]
            }
        }
        average = sum / total
        result.innerHTML = ''
        result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        result.innerHTML += `<p>O maior valor inserido é ${bigger} e o menor é ${smaller}.</p>`
        result.innerHTML += `<p>Somando todos os valores, temos ${sum}.</p>`
        result.innerHTML += `<p>A média dos valores é ${average}.</p>`

    }
}