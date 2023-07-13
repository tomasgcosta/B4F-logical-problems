function diaDoAno (data){

    const atual = Date.UTC(
        data.getFullYear(),
        data.getMonth(),
        data.getDate(),
    )
    const primeiro = Date.UTC(data.getFullYear(), 0, 0)
    let diferenca = atual - primeiro;
    return diferenca /1000/60/60/24
    
}

console.log(diaDoAno(new Date("2024", "04","04")))
