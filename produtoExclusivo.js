function produtoExclusivo(array) {
    // Escreve aqui a função
    
    const resultado = [];
    let produto = 1;

    for(let i = 0; i < array.length; i++){
        produto = 1;

        for(let j = 0; j < array.length; j++){
            if(i !== j){
                produto *= array[j]
            }
        }

        resultado.push(produto)
    }
    return resultado
}

const arr = [3,4,3,2]
console.log(produtoExclusivo(arr))