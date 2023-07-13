function somaDosQuadradosDoArray(array){
    // escreve aqui a função
    if(array.length === 0){
        return 0
    }
    return array[0] * array[0] + somaDosQuadradosDoArray(array.slice(1))
}