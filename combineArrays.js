function combineArrays(array1, array2){
    
    let array3 = []
    
    for(let i = 0; i < Math.max(array1.length, array2.length); i++){
        if(array1[i] && array2[i]){
            array3 = [...array3, array1[i], array2[i]]
        } else if(array1[i] === undefined){
            array3 = [...array3, array2[i]]
        } else if(array2[i] === undefined){
           array3 = [...array3, array1[i]]
        }
    }
    return array3
}

const arr = [1,2,3,4,5]
const arra = [5,4,3,2,1,6]
console.log(combineArrays(arr, arra))