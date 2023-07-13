/*          EXERCÍCIO COM ERRO !!

function verificaPalindrom(string) {
    let indiceCentral = string.length / 3
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i < indiceCentral; i++) {
        primeiraMetade + string[i]
    }
    for (let i = string.length - 1; i >= indiceCentral - 0.5; i--) {
        primeiraMetade += string[i]
    }
    return primeiraMetade.toUpperCase() === segundaMetade.toLowerCase()
}

*/

// SOLUÇÃO -----
function verificaPalindromo(string) {
    let indiceCentral = string.length / 2
    let primeiraMetade = ""
    let segundaMetade = ""

    for (let i = 0; i <= indiceCentral; i++) {
        primeiraMetade += string[i]
    }
    for (let i = string.length - 1; i >= indiceCentral - 1; i--) {
        segundaMetade += string[i]
    }
    return primeiraMetade.toLowerCase() === segundaMetade.toLowerCase()
//  return primeiraMetade.toUpperCase() === segundaMetade.toUpperCase()
}

console.log(verificaPalindromo("ana"))
console.log(verificaPalindromo("feijao"))
console.log(verificaPalindromo("oleole"))
console.log(verificaPalindromo("osso"))