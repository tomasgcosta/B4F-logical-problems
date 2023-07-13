class Calculadora {
    constructor(){
        this.historico = []
    }

    somar(a, b){
        const resultado = a + b
        const operacao = { operacao: "soma", a: a, b: b, resultado: resultado}
        this.historico.push(operacao)
        return resultado;
    }
    subtrair(a, b){
        const resultado = a - b
        const operacao = { operacao: "subtração", a: a, b: b, resultado: resultado}
        this.historico.push(operacao)
        return resultado;
    }
    multiplicar(a, b){
        const resultado = a * b
        const operacao = { operacao: "multiplicação", a: a, b: b, resultado: resultado}
        this.historico.push(operacao)
        return resultado;
    }
    dividir(a, b){
        const resultado = a / b
        const operacao = { operacao: "divisão", a: a, b: b, resultado: resultado}
        this.historico.push(operacao)
        return resultado;
    }

    lerHistorico(operacao){
        if(operacao === undefined){
            return this.historico;
        } else {
            return this.historico.filter((ele) => ele.operacao === operacao)
        }
    }
}

let calc = new Calculadora();

console.log(calc.somar(3,4))
console.log(calc.multiplicar(7,3))
console.log(calc.dividir(10,5))
console.log(calc.subtrair(7,3))
console.log(calc.lerHistorico())