function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura) {
    // escreve aqui a função
    const lado = Math.sqrt(Math.pow((comprimentoMaior - comprimentoMenor)/2, 2) + Math.pow(altura, 2))
    const perimetro = 2 * lado + comprimentoMaior + comprimentoMenor
    return perimetro;
}