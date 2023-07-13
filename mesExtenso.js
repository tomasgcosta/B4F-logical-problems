function mesPorExtenso(data){

    console.log(data)

    let mes = new Map([
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
    
    // a var mesExt vai buscar à data o mês e adiciona 1 porque em JS o 0 representa Janeiro.
    let mesExt = data.getMonth()+1;
    return mes.get(mesExt)
} 
console.log(mesPorExtenso(new Date(2022, 3, 4)))
