function mesPorExtensoBilingue(data, lingua){
    // escreve aqui a função
   /*  console.log(data, lingua)

    const mesesPt = new Map([
        [0, "Janeiro"],
        [1, "Fevereiro"],
        [2, "Março"],
        [3, "Abril"],
        [4, "Maio"],
        [5, "Junho"],
        [6, "Junho"],
        [7, "Agosto"],
        [8, "Setembro"],
        [9, "Outubro"],
        [10, "Novembro"],
        [11, "Dezembro"]
    ]);
    const mesesEn = new Map([
        [0, "January"],
        [1, "Februaryo"],
        [2, "March"],
        [3, "April"],
        [4, "Mat"],
        [5, "June"],
        [6, "July"],
        [7, "August"],
        [8, "September"],
        [9, "October"],
        [10, "November"],
        [11, "December"]
    ]);
  
    let mes = data.getMonth()
    let mesPt = mesesPt.get(mes)
    let mesEn = mesesEn.get(mes)
    if(lingua === "en"){
        return mesEn
    }
    if(lingua === "pt"){
        return mesPt
    } */

    if(lingua === 'en'){
        return data.toLocaleString("en-GB", { month: 'long' })
    }
    if(lingua === 'pt'){
        const mes = data.toLocaleString('pt-PT', { month: 'long'})
        return mes.charAt(0).toUpperCase() + mes.slice(1)
    }
} 