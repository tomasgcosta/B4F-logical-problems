function somaDoArray(array){
    // escreve aqui a função
    if(array.length === 0){
        return 0;
    }
    return array[0] + somaDoArray(array.slice(1))
}

const arr = [29,27,12,6,12,8,12,14,7,10,25]

console.log(somaDoArray(arr))