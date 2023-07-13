let arrayNumeros = [17,98,6,34,22,83,2,86,2,30,69,77,100]

function minimoPar(array){
    // escreve aqui a função
    return array.reduce((acc, cv) => {
        if(cv % 2 !== 0) return acc
        return Math.min(acc, cv)})
}

console.log(minimoPar(arrayNumeros))