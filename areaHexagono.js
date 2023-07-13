function areaDoHexagono(lado) {
    // escreve aqui a função
    const area = Number(3*Math.sqrt(3)*Math.pow(lado,2)) / 2
    return Math.floor(area)
}