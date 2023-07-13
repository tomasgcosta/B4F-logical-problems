function contaInteiros(array){
    if(array.length === 0){
        return 0
    }

    return 1+ contaInteiros(array.slice(1))
}

const arr = [15,80,79,15,8,20,30,55,66]

console.log(contaInteiros(arr))