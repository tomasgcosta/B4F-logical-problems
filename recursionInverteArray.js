function inverteArray(array){
if(array.length === 0){
    return []
}

// return array[array.length-1] + inverteArray(array.slice(0, arr.length+1))
return [array[array.length - 1], ...inverteArray(array.slice(0, array.length - 1))];
}

const arrayDeInput = [1,2,3,4]

console.log(
    inverteArray(arrayDeInput), // [4,3,2,1]
    arrayDeInput // [1,2,3,4]
    )