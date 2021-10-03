function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = window.document.getElementById('txtano')
    let res = document.querySelector('div#res')

    if (fano.value < 1920 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else if (fano.value == ano) {
        window.alert('COMO VOCÊ CONSEGUE DIGITAR COM MENOS DE 1 ANO DE VIDA?!')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            if (idade >= 1 && idade <= 11) {
                //Criança
                genero = 'um menino'
                img.setAttribute('src', 'imagens/h-bebe.jpg')
            } else if (idade < 26) {
                //Adolescente
                genero = 'um jovem'
                img.setAttribute('src', 'imagens/h-jovem.jpg')
            } else if (idade < 60) {
                //Adulto
                genero = 'um homem'
                img.setAttribute('src', 'imagens/h-adulto.jpg')
            } else {
                //Idoso
                genero = 'um idoso'
                img.setAttribute('src', 'imagens/h-idoso.jpg')
            }
        } else {
            if (idade >= 1 && idade <= 11) {
                //Criança
                genero = 'uma menina'
                img.setAttribute('src', 'imagens/m-bebe.jpg')
            } else if (idade < 26) {
                //Adolescente
                genero = 'uma jovem'
                img.setAttribute('src', 'imagens/m-jovem.jpg')
            } else if (idade < 60) {
                //Adulto
                genero = 'uma mulher'
                img.setAttribute('src', 'imagens/m-adulto.jpg')
            } else {
                //Idoso
                genero = 'uma idosa'
                img.setAttribute('src', 'imagens/m-idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Pelo visto, você é ${genero} com ${idade} anos de idade.`
        img.style.borderRadius = '50%'
        res.appendChild(img)
    }
}