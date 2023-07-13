function cloneDoArray(array){
    // escreve aqui a função
    if(array.length === 0){
        return []
    }
    return [array[0], ...cloneDoArray(array.slice(1))]

}