function somatorioAteN(n){
    // escreve aqui a função
    let i = 1;
    let somatorio = 0;
    while(i <= n){
        somatorio += i
        i++;
    }
    return somatorio
}

console.log(somatorioAteN(5))