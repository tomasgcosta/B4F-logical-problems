function calculaModa(array){
    // escreve aqui a função
   
    
    const frequencia = new Map();
    let moda = [];
    let maxFrequencia = 0;

    for(let i = 0; i < array.length; i++){
        const numero = array[i];
        const contagem = frequencia.has(numero) ? frequencia.get(numero) : 0;
        frequencia.set(numero, contagem + 1);
        if(contagem + 1 > maxFrequencia){
            maxFrequencia = contagem + 1;
            moda = [numero];
        } else if (contagem + 1 === maxFrequencia) {
            moda.push(numero);
        }
    }
    return Math.min(...moda)
}

const novoArray = [787,938,694,503,611,456,294,220,863,470,869,732,3,705,812,776,991,338,480,691,154,127,440,79,79,736,214,807,953,3,703,655,233,303,181,931,730,971,708,458,974,902,409,104,910,658,248,406,67,637,37,268,969,857,122,115,891,732,562,644,825,162,999,561,520,266,419,961,811,283,942,745,788,284,123,893,618,254,100,183,531,419,823,871,241,275
]
console.log(calculaModa(novoArray))