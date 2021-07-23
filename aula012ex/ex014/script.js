function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    if (hora >= 0 && hora < 12) {
        //Bom dia.
        msg.innerHTML = `Bom dia! Agora são ${hora} horas.`
        img.src = 'imagens/manha.jpg'
        //document.body.style.background = '#2a195a'
    } else if (hora < 18) {
        //Boa tarde.
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas.`
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#749fc7'
        
    } else {
        //Boa noite
        msg.innerHTML = `Boa noite! Agora são ${hora} horas.`
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#040424'
    }
}