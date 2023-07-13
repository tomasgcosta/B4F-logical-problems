function arrayInfinito(A, esquerda, direita) {
    if (!Array.isArray(A) || A.length === 0) {
      return 0;
    }
  
    let soma = 0;
  
    for (let i = esquerda; i <= direita; i++) {
      soma += A[i % A.length];
    }
  
    return soma * Math.floor((direita - esquerda + A.length) / A.length);
  }


  function arrayInfinito(array, esquerda, direita) {
    // Escreve aqui a função
    if(!Array.isArray(array) || array.length === 0){
        return 0
    }

    let soma = 0

    for(let i = esquerda; i <= direita; i++){
        soma += array[i % array.length]
    }
    return soma /* * Math.floor((direita - esquerda + array.length) / array.length) */
}