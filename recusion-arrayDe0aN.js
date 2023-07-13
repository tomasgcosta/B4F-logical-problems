function arrayDe0AN(n){

    if(typeof n !== 'number' || n < 0){
        return "Por favor introduza um numero maior que 0."
    }

    if(n === 0){
        return [0];
    }

    return [...arrayDe0AN(n-1),n]
}
//----------------------------------------------------------------
function arrayDeNAZero(n){
    // escreve aqui a função

    if(typeof n !== 'number' || n < 0){
        return "Por favor introduza um numero maior que 0."
    }

    if(n === 0){
        return [0];
    }

    return [n, ...arrayDeNAZero(n-1)]
}

console.log(arrayDe0AN(5))
console.log(arrayDeNAZero(5))