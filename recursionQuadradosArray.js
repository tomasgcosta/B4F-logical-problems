function quadradosDoArray(array){
    // escreve aqui a função

    if(array.length === 0){
        return []
    }
    return [array[0] * array[0], ...quadradosDoArray(array.slice(1))]
}