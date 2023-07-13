function dataMaisAntiga(datas) {
    // escreve aqui a função
    
    const dataMaisAntiga = datas.reduce((data1, data2) => {

        let dataA = new Date(data1)
        let dataB = new Date(data2)

        return dataA.getTime() < dataB.getTime() ? data1 : data2
    })

    return dataMaisAntiga
}