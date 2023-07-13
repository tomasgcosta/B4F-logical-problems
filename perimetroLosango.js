function perimetroDoLosango(diagonalMaior, diagonalMenor) {
    // escreve aqui a função
    const lado = Math.sqrt(Math.pow(diagonalMaior/2, 2) + Math.pow(diagonalMenor/2, 2));
    const perimetro = lado *4
    return perimetro
}