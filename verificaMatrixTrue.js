function eUmaMatriz(valor){
    // Escreve aqui o teu código

   if(Array.isArray(valor)){
       return valor.every(ele => Array.isArray(ele))
   }
   return false;
}


console.log(eUmaMatriz([[1,2,3], [1,2,3]]))