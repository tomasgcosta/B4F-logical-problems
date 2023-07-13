

function contarNsNoArray(n, array){
    // escreve aqui a função
    let nNoArray = array.filter(ele => ele === n)
    return nNoArray.length
}

console.log(contarNsNoArray(1, [1,2,3,4,5,6,7]))
/*const arr = [1, 2, 3, 5, 2, 8, 9, 2]
const numEvens = arr.filter(x => x % 2 === 0).length
console.log(numEvens)*/