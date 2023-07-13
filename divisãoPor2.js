/* function contaNumeroDeDivisoesPorDois(n){
   
 let contagem = 0;
 while(n >= 2){
    n /= 2
    contagem++
 }
 return contagem
}
console.log(contaNumeroDeDivisoesPorDois(2824))  */

function contaNumeroDeDivisoesPorDois(n){

   let contagem = 0

   for(let i = n; i >= 2; i = i / 2){
      contagem++
   }
   return contagem
}
console.log(contaNumeroDeDivisoesPorDois(2824)) 