function formataData(data){
    // escreve aqui a função
    console.log(data)

    let dia = data.getDate();
    let mes = data.getMonth() +1;
    let ano = data.getFullYear();

    if(dia < 10){
        dia = "0"+ dia
    }
    if(mes < 10){
        mes = "0" + mes
    }
    return dia+"-"+mes+"-"+ano
} 

console.log(formataData(new Date(2022, 3, 4))) // 04-04-2022