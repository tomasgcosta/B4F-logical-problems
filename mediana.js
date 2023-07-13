function mediana(array) {
    
    // 1 - Ordenas o array por ordem crescente.
    // 2 - Verificas se o array contém um número par/ímpar de elementos.
    // 2.5 - Caso seja par, a mediana será a MÉDIA dos dois valores centrais.
    // 2.5 - Caso seja ímpar, a mediana será o valor central.
    // 3 - Retornar (pode ser em cada caso IF!)

   
    array.sort(function(a, b) {
      return a - b;
    });
  
    let meio = Math.floor(array.length / 2);
    if (array.length % 2 == 0) {
    //              MÉDIA -- pares
      return Math.round((array[meio - 1] + array[meio]) / 2);
    } else {
      //                    ímpares
      return Math.round(array[meio]);
    }
  }

console.log(mediana([6,8,9,3,5,7,2,1]))