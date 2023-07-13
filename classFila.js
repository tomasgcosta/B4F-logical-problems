/*Implementa a classe Fila, lembra-te que deve seguir as regras FIRST IN, FIRST OUT.

A classe deve ter três métodos:

adicionar, recebe um elemento como argumento e insere-o na Fila.
remover, remove o elemento da frente da Fila, caso a Fila esteja vazia, retorna 
obterElemento, retorna o elemento que esteja na frente da Fila, caso a Fila esteja vazia, retorna */

class Fila {
    constructor(){
        this.elementos = []
    }

    adicionar(elemento){
        return this.elementos.push(elemento)
    }
    remover(){
        return this.elementos.length === 0 ? "Fila vazia!" : this.elementos.shift()
    }
    obterElemento(){
        return this.elementos.length === 0 ? "Fila vazia!" : this.elementos[0]
    }
    obterTodos(){
        return this.elementos
    }
}

const filo = new Fila()

console.log(filo.obterElemento())
console.log(filo.obterElemento())
console.log(filo.adicionar("vinte"))
console.log(filo.adicionar("crazy"))
console.log(filo.adicionar("ya"))
console.log(filo.obterTodos())
console.log(filo.obterElemento())
console.log(filo.remover())
console.log(filo.obterTodos())