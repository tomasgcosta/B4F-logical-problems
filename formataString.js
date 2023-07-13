function formataString(string){
    // Escreve aqui o teu código
    let letras = ""
    for(let i = 0; i < string.length; i++){
        let letra = string[i]
        
    if(letra === letra.toUpperCase()){
        letras += letra.toLowerCase()
    } else if(letra === letra.toLowerCase()){
        letras += letra.toUpperCase()
        }
    }
    return letras
} 

console.log(formataString("tEEst"))

/*
function formataString(string){
    return string.split("")
    .map(letra => letra === letra.toUpperCase() ? letra.toLowerCase :  letra.toUpperCase()
    .join("")
        )
     }
    //  string.split() e [...string]   --  transforma strings em arrays
    return [...string]

*/