/*function fatorialN(n){
    // escreve aqui a função

    let fatorial = BigInt(n);

    if(n === 0 || n === 1){
        return 1;
    }
    
    while(n > 1){
        n--;
        fatorial *= BigInt(n);
    }
    return fatorial
}

console.log(fatorialN(238))

/*
function fatorialN(n){
    // escreve aqui a função
    
    let fatorial = BigInt(n);
    
    if(n < 0){
        return 0;
    } else if(n === 0 || n === 1) {
        return 1;
    }

    while(n > 1){
        n--;
        fatorial *=  BigInt(n);
    }
    
    return fatorial;
}*/


// --------------------- em recursão

/*
function fatorialN(n){
if (n === 1){
    return 1
}
return n * fatorialN(n-1)
}
*/

// ------------------------ em for loop
/*
function fatorialN(n){
    let resultado = 1
    for(let i = 1; i <= n; i++){
        resultado = resultado * i
    }
    return resultado;
}
*/
