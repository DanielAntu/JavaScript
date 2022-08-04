function contar() {
    let ini = document.getElementById('txti')
    let fin = document.getElementById('txtf')
    let pas = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fin.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = 'Impossivel contar!'
        alert('[ERRO] Faltam dados!')
        
    } else {
        res.innerHTML = 'Contando... <br>'
        i = Number(ini.value)
        f = Number(fin.value)
        p = Number(pas.value)
        if (p <= 0) {
            alert('Passo inválido Considerando passo 1')
            p = 1
        }
        if (i < f) {
           for(c = i; c <= f; c+=p) {
            res.innerHTML += `${c} \u{1F449}`
        }
         
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } 
        res.innerHTML += '\u{1F3F4}'     
    }
}