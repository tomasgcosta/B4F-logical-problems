// Cria uma função que mapeia cada elemento de um array de strings para o seu comprimento.
// EXERCICIO 1

function mapeia(array) {
  return array.map((ele) => ele.length);
}

console.log(mapeia(["abc", "bcd344", "cde44"]));

// Cria uma função que filtra os elementos pares, mapeia cada elemento para o seu quadrado e por fim reduz o array para calcular o somatório dos elementos resultantes.
// EXERCICIO 2
// let arrayPares = [1,2,3,4,5,6]

function calculaSomatorioDoQuadradoDosPares(array) {
  console.log(
    array
      .filter((ele) => ele % 2 === 0)
      .map((element) => element ** 2)
      .reduce((acc, cv) => {
        return (acc = acc + cv);
      })
  );
}

// Cria uma função que mapeia cada elemento de um array de strings para a string invertida.
// A inversão de cada string deve ser implementada utilizando uma função recursiva.
// EXERCICIO 3

function inverteStringsEmArray(array) {
  return array.map((ele) => inverteString(ele));
}

function inverteString(string) {
  if (string.length === 1) {
    return string;
  }
  return (
    string[string.length - 1] +
    inverteString(string.slice(0, string.length - 1))
  );


  
  // CAO
  // o + f(ca)
  //      a + f(c)
  //            c
}

// Cria uma função que retorna true se todos os elementos do array forem pares.
// EXERCICIO 4

function verificaPares(array) {
  return array.every((ele) => ele % 2 === 0);
}

//Cria uma função que retorna true se pelo menos um dos elementos do array for par.
// EXERCICIO 5

function verificaUmPar(array) {
  return array.some((ele) => ele % 2 === 0);
}

// Cria uma função que reduz um array de números para um Map que tem como chaves os valores do array e como valores o número de ocorrências da chave. (mapa de ocOrrências)
// EXERCICIO 6

function contaOcorrencias(array){
    return array.reduce((mapaOcorr, ele) => {
        
        if(mapaOcorr.has(ele)){
            return retorno = new Map([...mapaOcorr, [ele, mapaOcorr.get(ele) + 1]])  
        } else {
            return retorno = new Map([...mapaOcorr, [ele, 1]])  
        }
    }, new Map([]))
}

// Cria uma função que mapeia cada elemento de um array de objetos com as propriedades name e birthday para um objeto que além destas propriedades, tem a propriedade age.
// EXERCICIO 7

function adicionaIdade(array){
    return array.map((pessoa) => (
        {...pessoa, age: calculaIdade(pessoa.birthday)}
    ))
}

function calculaIdade(birthday){
    const atual = new Date();
    const diferencaEmMs = atual.valueOf() - birthday.valueOf
    const msNumAno = 365*24*60*60*1000
    return Math.round(diferencaEmMs/msNumAno)
}