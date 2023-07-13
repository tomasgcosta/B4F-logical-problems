function stringSuperReduzida(string) {
    let arr = Array.from(string)
    let finished = false
    while(!finished) {
        finished = true
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] === arr[i + 1]) {
                arr[i] = " "
                arr[i + 1] = " "
                finished = false;
            }
        }
        arr = arr.filter(c => c !== " ")
    }
    if (arr.length === 0) return "String Vazia"
    return arr.join('');
}

console.log(stringSuperReduzida("abbcd"))