function parimpar(n) {
    if (n % 2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

var res = parimpar(12)
console.log(res)