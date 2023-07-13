function superficieDaPiramideQuadrada(ladodabase, altura){
    // escreve aqui a função

    // ÁREA DE UM QUADRADO
    const areaBase = ladodabase ** 2
    // TEOREMA PITÁGORAS 
    const alturaTriangulo = Math.sqrt((ladodabase / 2) ** 2 + (altura ** 2))

    const areaLateral = ladodabase * alturaTriangulo / 2


    const areaTotal = areaBase + 4 * areaLateral

    return areaTotal
}
console.log(calculaASupPiramideQuad(71, 32))