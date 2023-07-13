function arrayFromBigInt(numero){

    let numArr = numero.toString().split('')
    return numArr.map(alga => Number(alga))
}