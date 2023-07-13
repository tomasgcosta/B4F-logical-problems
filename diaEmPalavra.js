function diaEmPalavras(dia, mes, ano) {
    const meses = new Map([
      [1, "janeiro"],
      [2, "fevereiro"],
      [3, "março"],
      [4, "abril"],
      [5, "maio"],
      [6, "junho"],
      [7, "julho"],
      [8, "agosto"],
      [9, "setembro"],
      [10, "outubro"],
      [11, "novembro"],
      [12, "dezembro"]
    ]);
  
    const dias = new Map([
      [0, 'zero'],
      [1, 'um'],
      [2, 'dois'],
      [3, 'três'],
      [4, 'quatro'],
      [5, 'cinco'],
      [6, 'seis'],
      [7, 'sete'],
      [8, 'oito'],
      [9, 'nove'],
      [10, 'dez'],
      [11, 'onze'],
      [12, 'doze'],
      [13, 'treze'],
      [14, 'catorze'],
      [15, 'quinze'],
      [16, 'dezasseis'],
      [17, 'dezassete'],
      [18, 'dezoito'],
      [19, 'dezanove'],
      [20, 'vinte'],
      [21, 'vinte e um'],
      [22, 'vinte e dois'],
      [23, 'vinte e três'],
      [24, 'vinte e quatro'],
      [25, 'vinte e cinco'],
      [26, 'vinte e seis'],
      [27, 'vinte e sete'],
      [28, 'vinte e oito'],
      [29, 'vinte e nove'],
      [30, 'trinta'],
      [31, 'trinta e um']
    ]);
  
    if (mes === 2) {
      if (ano % 4 !== 0 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28";
      } else if (ano % 4 === 0 && dia > 29) {
        return "Por favor introduza um dia entre 1 e 29."
      }
    }
  
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && (dia < 1 || dia > 30)) {
      return "Por favor introduza um dia entre 1 e 30.";
    }
  
    if ((mes === 1 || mes === 3 || mes === 5 || mes === 7 || mes === 8 || mes === 10 || mes === 12) && (dia < 1 || dia > 31)) {
      return "Por favor introduza um dia entre 1 e 31."
    }
  
    if (mes < 1 || mes > 12) {
      return "Por favor introduza um mês entre 1 e 12."
    }

    // a var mesNome vai buscar ao mapa (meses) algo que coincida com o input do (mes)
    const mesNome = meses.get(mes);
    // a var diaNome vai buscar ao mapa (dias) algo que coincida com o input do (dia)
    const diaNome = dias.get(dia);
    //a var anoNome vai buscar através do mapa (dias) o que coincidir com o resto da divisão do input (ano) por 100
    let anoNome = 'dois mil e ' + dias.get(ano % 100);
    
    //EXEMPLO: 2023 % 10 = 23 ou vinte e três, no mapa

    if(ano === 2000){
        anoNome = 'dois mil'
    }
  
    return `${diaNome} de ${mesNome} de ${anoNome}`;
  }

console.log(diaEmPalavras(16, 5, 2000))