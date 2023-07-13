/*
class FabricaDeTestes {
    constructor(testes){
        this.testes = testes
    }
    
    testar(func){
        let testesPassados = 0;
        let mensagemDeErro = ""
        const quantidadeDeTestes = this.testes.length

        this.testes.forEach(teste => {
            if(func(...teste.argumentos) === teste.resultadoEsperado){
                testesPassados++;
            } else if(mensagemDeErro.length === 0 || mensagemDeErro === ""){
                mensagemDeErro = teste.nome
            }
    });
        if(testesPassados === quantidadeDeTestes){
        return "Todos os testes executados com sucesso."
        } else {
        return `Falhou ${quantidadeDeTestes - testesPassados}/${quantidadeDeTestes}, exemplo : ${mensagemDeErro}`
        }
    }
}

function soma(a, b){
    return a + b
}


const testes = [
    {argumentos: [3,2], resultadoEsperado: 5, nome: "Soma 3 e 2"},
    {argumentos: [4,8], resultadoEsperado: 12, nome: "Soma 4 e 8"},
    {argumentos: [2,2], resultadoEsperado: 4, nome: "Soma 2 e 2"}
]

const fabrica = new FabricaDeTestes(testes)
console.log(fabrica.testar(soma))
*/

function vogaisParaMaiusculo (matriz){
    const vogais = ["a", "e", "i", "o", "u"]

    return matriz.map((linha) => linha.map((letra) => vogais.includes(letra) ? letra.toUpperCase() : letra))
}


//Exercio 4 class gato

class Cat {
    constructor(name, weight, maxJumpHeight, verticalPosition){
        this.name = name,
        this.weight = weight,
        this.maxJumpHeight = maxJumpHeight,
        this.verticalPosition = verticalPosition
    }

    jump(power){
        const jumpHeight = this.maxJumpHeight * power
        this.verticalPosition += jumpHeight
    }
}

//Exercicio 5 
//Junta objetos em que se os dados forem repetidos, ficam os dados do obj2
function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2} //!= {obj1, obj2}, dado que cada um se torna uma propriedade dentro do objeto novo "{}", com os dados de cada um em cada propriedade
}

//Exercicio 6

function contaOcorrencias(array){
    let resultado = new Map([])
    for(let i = 0; i < array.length; i++){
        const element = array[i]
        if(resultado.has(element)){
            const valorAtual = resultado.get(element)
            resultado.set(element, valorAtual + 1)
        } else {
            resultado.set(element, 1)
        }
    }
    return resultado
}

//Exercicio 7

class ContadorDeInstancias {
    static nrInstancias = 0;
    constructor(){
        ContadorDeInstancias.nrInstancias++
    }

}

// Exercicio 8
// CALCULA CAMINHO


console.log(calculaCaminho(matriz, inicio, final))