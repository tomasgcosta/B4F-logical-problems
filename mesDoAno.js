function mesesDoAno(mes){
    // escreve aqui a função
    const mesExt = new Map([
        [1, "Janeiro"],
        [2, "Fevereiro"],
        [3, "Março"],
        [4, "Abril"],
        [5, "Maio"],
        [6, "Junho"],
        [7, "Julho"],
        [8, "Agosto"],
        [9, "Setembro"],
        [10, "Outubro"],
        [11, "Novembro"],
        [12, "Dezembro"],
    ]);
let meses = mesExt.get(mes)
    if(mes < 1 || mes > 12){
        return "Por favor insira um número entre 1 e 12."
    } 
    return meses;
}

console.log(mesesDoAno(4))