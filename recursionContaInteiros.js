function contaInteirosDoArray(array){
    // escreve aqui a função
    console.log(array)
    if(array.length === 0){
        return 0
    }
    if(Number.isInteger(array[0])){
        return 1 + contaInteirosDoArray(array.slice(1))
    } else {
        return contaInteirosDoArray(array.slice(1))
    }
}