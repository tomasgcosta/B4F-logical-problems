function arredondarAsDecimas(d){
    // escreve aqui a função
    console.log(d)
    const numeroArredondado = d*10/10
    return numeroArredondado.toFixed(1)
}

console.log(arredondarAsDecimas(12.206163567984259))