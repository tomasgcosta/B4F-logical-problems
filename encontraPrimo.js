function encontraPrimo(array){
    // escreve aqui a função

    const primeiroEle = array.find((ele) => {

        if(ele < 2){
            return false;
        }
        for(let i = 2; i < ele; i++){
            if(ele % i === 0){
                return false
            }
        }
        return true;
    })

    return primeiroEle;
}

