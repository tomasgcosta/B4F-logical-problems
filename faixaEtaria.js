function calculaFaixaEtaria(idade){
    // escreve aqui a função

    if(idade <= 11){
        return 'Criança'
    } else if(idade < 18){
        return 'Adolescente'
    } else if(idade < 65){
        return 'Adulto'
    } else if(idade >= 65){
        return 'Sénior'
    }
}

console.log(calculaFaixaEtaria(65))