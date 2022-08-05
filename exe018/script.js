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
}