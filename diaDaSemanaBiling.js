function diaDaSemanaPorExtensoBilingue(data, lingua){
    // escreve aqui a função
    console.log(data)

  /*   const diasPt = new Map([
        [0, "domingo"],
        [1, "segunda-feira"],
        [2, "terça-feira"],
        [3, "quarta-feira"],
        [4, "quinta-feira"],
        [5, "sexta-feira"],
        [6, "sábado"]
        
    ]);
    const diasEn = new Map([
        [0, "sunday"],
        [1, "monday"],
        [2, "tuesday"],
        [3, "wednesday"],
        [4, "thursday"],
        [5, "friday"],
        [6, "saturday"]
    ]);

    let semana = data.getDay()
    let dias = diasPt.get(semana)
    let days = diasEn.get(semana)
    if(lingua === "en"){
        return days
    }
    if(lingua === "pt"){
        return dias
    } */
    if(lingua === 'en'){
        let dataEn = data.toLocaleString('en-GB', { weekday: 'long'})
        return dataEn.charAt(0).toLowerCase() + dataEn.slice(1)
    }

    if(lingua === 'pt'){
        return data.toLocaleString('pt-PT', { weekday: 'long'}) 
    }

} 
const data1 = new Date('Mon Feb 08 1999 08:05:40 GMT+0100 (Central European Standard Time)')
console.log(diaDaSemanaPorExtensoBilingue(data1, 'en'))