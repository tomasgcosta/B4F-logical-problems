// ENUNCIADO //

/* 
Corrige a função binarySearch, a ideia do algoritmo é pesquisar por um VALOR, dentro de um array ordenado.

A função recebe como argumentos um array ordenado e um VALOR.

O método de funcionamento do algoritmo é a escolha de um elemento e a comparação desse elemento com NUM.

Suponhamos que invocámos a função

1. Escolhe-se um pivot, que é o elemento central das opções. Neste caso como o array possui elementos entre os indices 0 e 8, obtemos o elemento no índice 4, que é o 7.

2. Agora compara-se o  PIVOT com o elemento que pretendemos obter, neste caso o elemento pivot (7) é maior que o número que é pretendido (4). Sabe-se que todos os elementos maiores que o pivot, estão à sua direita, e como o pivot é maior que o número pretendido, pode-se remover todos os elementos que nunca poderiam ser o número pretendido.

Agora repete-se este ciclo de ESCOLHER PIVOT e COMPARAR PIVOT até que não seja possível fazer a comparação. (O menor índice possível tem que ser menor que o maior índice possivel)

A função deve retornar um objeto com duas propriedades:
    1. foundAtIndex - Índice do elemento quando é encontrado, NULL quando não está incluído no array.
    2. numberOfGuesses - O número de vezes que se iterou sobre o ARRAY.


*/


function binarySearch(array, num) {
    //Calcula o pivot, sendo um valor central entre 2 outros valores (máximo e mínimo)
    const findPivot = (a, b) => Math.round((a + b) / 2)

    //No início, o número está entre o primeiro elemento do array
    let min = 0
    //e o último
    let max = array.length - 1

    //Obtem-se o primeiro pivot
    let pivot = findPivot(max, min)
    let count = 0

    //Enquanto o índice mínimo possível for menor ou igual que o máximo possível
    while (min <= max) {
        count++

        //Se o elemento no pivot for o número pretendido
        if(array[pivot] === num) {
            //retorna o objeto
            return {
                foundAtIndex: pivot,
                numberOfGuesses: count
            }
        //Case o elemento no pivot seja menor, atualiza-se o máximo de modo a que não inclua o pivot e os números maiores que o pivot 
        } else if (array[pivot] > num) {
            max = pivot - 1
            pivot = findPivot(max, min)
        //Semelhante caso o pivot seja maior
        } else {
            min = pivot + 1
            pivot = findPivot(max, min)
        }
    }

    //Se não encontrou, retorna com o valor de undefined
    return {
        foundAtIndex: undefined,
        numberOfGuesses: count
    }
}


console.log(binarySearch([1,3,5,6,7,9,10,14], 5))