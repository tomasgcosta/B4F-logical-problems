function contaPares(array){
// ----------- do pos 0 à última
    if(array.length === 0){
        return 0;
    }
    let primeiro = array[0]
    if(primeiro % 2 === 0){
        return 1 + contaPares(array.slice(1))
    } else {
        return 0 + contaPares(array.slice(1))
    }
}

function contaPares(array){
// ------------ do pos última à 0
        if(array.length === 0){
            return 0;
        }
        let último = array[array.length-1]
        if(último % 2 === 0){
            return 1 + contaPares(array.slice(0, array.length-1))
        } else {
            return 0 + contaPares(array.slice(0, array.length-1))
        }
    }
console.log(contaPares([1,2,3,4,5,6,7]))