function fatoriaisDoArray(array){
    // escreve aqui a função

    //Se o comprimento do array for 0 (ele está vazio), retorna o array vazio (não tem conteudo)
    if(array.length === 0){
        return []
    }
    //A função fatorialElemento está dentro da função fatoriaisDoArray
   function fatorialElemento(elemento){
    //Se o elemento(cada posição no array), for 0, retornas 1 porque o fatorial de 0 é 1. Para além disso, precisas duma condição para parar a recursão. É esta!
       if(elemento === 0){
           return 1;
       }
       //Utilizas o elemento para multiplicar pela função fatorialElemento, em que o argumento é elemento - 1, ou seja, o elemento anterior a cada elemento multiplicado. EX: 5! = 5 * 4 * 3 * 2 * 1
       return elemento * fatorialElemento(elemento - 1)
   }
   //Retornas tudo o que está dentro array copias, através do slice, elemento a elemento, do inicio até ao fim, para um array novo mas cada um dele é retornado sendo submetido à função de fatorialElemento, sofrendo as alterações acima. 
    return [...fatoriaisDoArray(array.slice(0, array.length-1)), fatorialElemento(array[array.length-1])]
}

console.log(fatoriaisDoArray([10,40,27,15,18,20,8]))