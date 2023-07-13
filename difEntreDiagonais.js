function diferencaEntreDiagonais(matrizquadrada) {
    // escreve aqui a função

    let somaDiaPrin = 0;
    let somaDiaSec = 0;

    for(let i = 0; i < matrizquadrada.length; i++){
        somaDiaPrin += matrizquadrada[i][i]
        somaDiaSec += matrizquadrada[i][matrizquadrada.length - i - 1]
    }
    return somaDiaPrin - somaDiaSec
}