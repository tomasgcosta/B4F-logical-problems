function maiorAbsoluto(a, b){
    // escreve aqui a função
    console.log(a, b)
    
    /* 
    
    let absA = a < 0 ? -a : a; O "a" é menor que 0? Se sim, "a" = valor negativo. Se não, valor positivo.
    let absB = b < 0 ? -b : b 

    Retorna-me o valor - o "absA" é maior que "absB" ? Se sim, o "absA" é o maior valor. Se não, é o "absB."
    return absA > absB ? absA : absB 
    
    */

    let absA = Math.abs(a)
    let absB = Math.abs(b)

    return Math.max(absA, absB)
}