function arrayDeZeroAN(n){
    // escreve aqui a função
    if(n <= 0){
        return "Por favor insira um número superior a 0."
    }
    let numeros = []

    for(let i = 0; i <= n; i++){
        numeros.push(i)
    }
    return numeros;
}
console.log(arrayDeZeroAN(4))


// O CONTRÁRIO  -- de n a zero

function arrayDeNAZero(n){
    // escreve aqui a função
    if(n <= 0){
        return "Por favor insira um número superior a 0."
    }
    
    let array = [];
    for(let i = n; i >= 0; i--){
        array.push(i)
    }
    return array;
}