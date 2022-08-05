let num = document.getElementById('txtn')
let sel = document.getElementById('inum')
let res = document.getElementById('res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && ! inLista(num.value, valores)) {
        valores.push(num.value)
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        sel.appendChild(item)
    } else {
        alert('Número inválido, ou ja existe!')
    }
    num.value = ''
    num.focus()
    res.innerHTML = ''
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor digite um valor')
    } else {
        let tot = valores.length
        let maior =Number(valores[0])
        let menor = Number(valores[0])
        let soma = 0
        let media = 0
        for (let pos in valores) {
            soma += Number(valores[pos])
            if (Number(valores[pos]) > maior) {
                maior = valores[pos]
            }
            if (Number(valores[pos]) < menor) {
                menor = valores[pos]
            }
        }
        media = soma / valores.length
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `A média do valores é ${media}`
    }
}