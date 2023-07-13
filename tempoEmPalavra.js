function tempoEmPalavras(horas, minutos){
    // escreve aqui a função
    const minutosPorExtenso = new Map([
      [0, "em ponto"],
      [1, "um"],
      [2, "dois"],
      [3, "três"],
      [4, "quatro"],
      [5, "cinco"],
      [6, "seis"],
      [7, "sete"],
      [8, "oito"],
      [9, "nove"],
      [10, "dez"],
      [11, "onze"],
      [12, "doze"],
      [13, "treze"],
      [14, "catorze"],
      [15, "um quarto"],
      [16, "dezasseis"],
      [17, "dezassete"],
      [18, "dezoito"],
      [19, "dezanove"],
      [20, "vinte"],
      [21, "vinte e um"],
      [22, "vinte e dois"],
      [23, "vinte e três"],
      [24, "vinte e quatro"],
      [25, "vinte e cinco"],
      [26, "vinte e seis"],
      [27, "vinte e sete"],
      [28, "vinte e oito"],
      [29, "vinte e nove"],
      [30, "meia"],
    ]);
    const horasPorExtenso = new Map([
      [0, "meia noite"],
      [1, "uma"],
      [2, "duas"],
      [3, "três"],
      [4, "quatro"],
      [5, "cinco"],
      [6, "seis"],
      [7, "sete"],
      [8, "oito"],
      [9, "nove"],
      [10, "dez"],
      [11, "onze"],
      [12, "meio dia"],
    ]);

    let h;
    let m;
    let horaAtual = horas - horasPorExtenso.size + 1;
    let horaSeguinte = horas - horasPorExtenso.size + 2;
  
    if (horas === 23) {
      h = minutos <= 30 ? horasPorExtenso.get(horaAtual) : horasPorExtenso.get(0);
    } else if (horas > 12) {
      h = minutos <= 30 ? horasPorExtenso.get(horaAtual) : horasPorExtenso.get(horaSeguinte);
    } else if (horas === 12) {
      h = minutos <= 30 ? horasPorExtenso.get(horas) : horasPorExtenso.get(1);
    } else {
      h = minutos <= 30 ? horasPorExtenso.get(horas) : horasPorExtenso.get(horas + 1);
    }
  
    m = minutos <= 30 ? minutosPorExtenso.get(minutos) : minutosPorExtenso.get(60 - minutos);
  
    if(minutos > 30){
      if (h === "uma" || h === "meia noite") {
          return `${m} para a ${h}`;
  
      } else if (h === "meio dia") {
          return `${m} para o ${h}`;
          
      } else {
          return `${m} para as ${h}`;
      }
  
    } else{
      return `${h} e ${m}`
    }
  }