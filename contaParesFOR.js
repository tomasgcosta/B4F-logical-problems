function contaParesEntreDoisValores(valor1, valor2){
    // escreve aqui a função

    let contaPares = 0;
    const maior = Math.max(valor1, valor2)
    const menor = Math.min(valor1, valor2)
    if(valor1 === valor2){
        return "Por favor introduza dois valores diferentes."
    }
    for(let i = menor; i <= maior; i++){
        if(i % 2 === 0){
            contaPares++;
        }
    }
    return contaPares;
}