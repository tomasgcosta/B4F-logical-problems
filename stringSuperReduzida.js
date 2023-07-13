function stringSuperReduzida(str) {
    // Escreve aqui o teu código

    const string = str.split('')
    
    for(let i = 0; i < string.length; i++){
        if(string[i] === string[i +1]){
            string.splice(i, 2)
            i = -1
        }
    }

    return string.length === 0 ? "String Vazia" : string.join('')
}

console.log(stringSuperReduzida("abbcbbca"))