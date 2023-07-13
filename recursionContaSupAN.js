function contaSuperioresAN(array, n){
    // escreve aqui a função

    if(array.length === 0){
        return 0
    }
    let contagem = array[array.length-1] > n ? 1 : 0
    return contagem + contaSuperioresAN(array.slice(0, array.length-1), n)
    
}

console.log(contaSuperioresAN([1,2,3,4,5,6,7],3))