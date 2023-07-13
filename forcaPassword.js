function calculaForcaDaPassword(string) {
    // Escreve aqui o teu código
    let forcaPw = 0

    if(string.length === 0){
        return "Por favor introduza uma password válida."
    }
    if(string.length >= 8){
        forcaPw += 1
    } 
    if(string.split('').some(ele =>  Number(ele) == ele)){
        forcaPw += 1
    }
    if(string.split('').some(ele => ele.toUpperCase() == ele)){
        forcaPw += 1
    }
    return forcaPw
}