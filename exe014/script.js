function carregar() {
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'manha.png'
        document.body.style.background = '#a88b5c'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'tarde.png'
        document.body.style.background = '#fbad84'
    } else {
        //Boa noite
        img.src = 'noite.png'
        document.body.style.background = '#693737'
    }
}