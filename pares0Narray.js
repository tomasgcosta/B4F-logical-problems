function paresDeZeroAN(n){
    // escreve aqui a função
    console.log(n)
    
    let array = [] 
    if(n === 0){
        return "Por favor insira um número superior a 0."
    }
    for(let i = 0; i < n; i++){
        i += i % 2
        array.push(i)
    }
    return array
}
console.log(paresDeZeroAN(37))