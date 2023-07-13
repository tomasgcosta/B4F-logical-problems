function calculaDiasAteAoNatal(dia, mes){
    // escreve aqui a função

    if(dia < 1 || dia > 31){
        return "Por favor introduza um dia entre 1 e 31."
    } else if(mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12."
    } else if(mes === 2 && (dia < 1 || dia > 28)){
        return "Por favor introduza um dia entre 1 e 28."
    } else if([4, 6, 9, 11].includes(mes) && dia > 30){
        return "Por favor introduza um dia entre 1 e 30."
    }
    let diasDosMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    let diasAteNatal = 0;
    const diaNatal = 359
    let somaDosMeses = 0;
    let somaDosDias = 0;

    for(let i = 0; i < diasDosMeses.length; i++){
        if(mes === 1){
            somaDosDias = dia
        } else {
            somaDosMeses = diasDosMeses.slice(0, mes-1)
            somaDosDias = somaDosMeses.reduce((total, numero) => total + numero)+ dia
        }
    }

    if(dia > 25 && mes === 12){
        diasAteNatal = diaNatal - somaDosDias + 365
        return `Faltam ${diasAteNatal} dias até ao Natal.`
    } else if( dia == 25 && mes == 12){
        return "Hoje é Natal!"
    } else {
        diasAteNatal = diaNatal - somaDosDias
        return `Faltam ${diasAteNatal} dias até ao Natal.`
    }
}