function maiorString(array){
    // Escreve aqui o teu código
    console.log(array)

    let maiorString = ""
    let indiceMaiorString = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i].length > maiorString.length){
            maiorString = array[i]
            indiceMaiorString = i
        }
    }
    return array[indiceMaiorString]
}
const arr = ["avião","céu","piloto","voar","viajar"]

console.log(maiorString(arr))