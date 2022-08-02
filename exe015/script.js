function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value == 0 || fano.value > ano) {
        alert('Verifique os dados e tente novamente.')
    } else {
        var sexo = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img', 'src')
        img.setAttribute('id', 'foto')
        genero = ''
        if (sexo[0].checked) {
            genero = 'Homem'
            if (idade > 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'homem-crianca-m.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'homem-jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'homem-adulto.png')
            } else {
                //Idoso
                img.setAttribute('src', 'homem-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade > 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'mulher-crianca-f.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'mulher-jovem.png')
            } else if (idade < 60) {
                //Adulto
                img.setAttribute('src', 'mulher-adulta.png')
            } else {
                //Idoso
                img.setAttribute('src', 'mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectei ${genero} com ${idade} anos</p>`
        res.appendChild(img)
    }
}