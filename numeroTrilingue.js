function traduzNumero(numero, lingua) {
    const numerosPorExtenso = {
      pt: {
        0: "zero",
        1: "um",
        2: "dois",
        3: "três",
        4: "quatro",
        5: "cinco",
        6: "seis",
        7: "sete",
        8: "oito",
        9: "nove",
        10: "dez"
      },
      eng: {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten"
      },
      fr: {
        0: "zéro",
        1: "un",
        2: "deux",
        3: "trois",
        4: "quatre",
        5: "cinq",
        6: "six",
        7: "sept",
        8: "huit",
        9: "neuf",
        10: "dix"
      }
    };
  
    if (numerosPorExtenso[lingua] && numerosPorExtenso[lingua][numero]) {
      return numerosPorExtenso[lingua][numero];
    } 
  }

  console.log(traduzNumero(0, "fr"))