function calculaDiaDoAno(dia, mes){
    // escreve aqui a função

    if([1,3,5,7,8,10,12].includes(mes) && (dia < 1 || dia > 31)){
        return "Por favor introduza um dia entre 1 e 31."
    } else if(mes < 1 || mes > 12){
        return "Por favor introduza um mês entre 1 e 12."
    } else if(mes === 2 && (dia < 1 || dia > 28)){
        return "Por favor introduza um dia entre 1 e 28."
    } else if([4, 6, 9, 11].includes(mes) && (dia < 1 || dia > 30)){
        return "Por favor introduza um dia entre 1 e 30."
    }

    let diasDosMeses = [0,31,59,90,120,151,181,212,243,273,304,334]
    let diaDoAno = diasDosMeses[mes - 1] + dia
    return diaDoAno

    }

    console.log(calculaDiaDoAno(25,12))