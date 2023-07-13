function diferencaEmDias(data1, data2) {
    // escreve aqui a função
    
    const primeira = data1.getTime()
    const segunda = data2.getTime()
    const diferencaMs = segunda > primeira ? Math.abs(segunda-primeira) : Math.abs(primeira-segunda)
    const diferencaDias = Math.floor(diferencaMs / (1000*60*60*24))

    return Math.abs(diferencaDias)
}


// outra solução
function diferencaEmDias(data1, data2) {
    // escreve aqui a função
    console.log(data1, data2)
    return Math.floor(Math.abs(data1.valueOf() - data2.valueOf())/1000/60/60/24)
}