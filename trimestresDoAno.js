function trimestresDoAno(t) {
    // escreve aqui a função
        if(t > 4){
            return "Número inválido. Por favor insira um número entre 1 e 4."
        }
    switch(t){
        case 1:
        return "Janeiro"+", "+"Fevereiro"+", "+"Março"
        break;
        case 2:
        return "Abril"+", "+"Maio"+","+"Junho"
        break;
        case 3:
        return "Julho"+", "+"Agosto"+", "+"Setembro"
        break;
        case 4:
        return "Outubro"+", "+"Novembro"+", "+ "Dezembro"
        default:
        break;
    }
}

console.log(trimestresDoAno(2))