/*Implementa a class Pilha, que recebe no construtor um argumento "capacidade".

Deve possuir pelo menos uma propriedade:

1. capacidade, inicializada com o  se estiver definido, ou  se esse valor não estiver definido.
Não deve ser possível adicionar mais elementos à pilha do que a  da mesma.

Deve possuir dois métodos:

1. adicionar(elem)
2. remover()
3. obterValor()
O método "adicionar" recebe como argumento o elemento que se pretende inserir na pilha, se a pilha já estiver com tantos quanto a capacidade, retorna "Pilha cheia!".

O método "remover", retira um elemento da pilha, caso a pilha esteja vazia, deve retornar "Pilha vazia!".

O método "obterValor" deve retornar o elemento mais recentemente adicionado à pilha, caso a pilha esteja vazia, deve retornar "Pilha vazia!".

Lembra-te que uma  Pilha é sempre LIFO - Last In, First Out.

*/

class Pilha {
    constructor(capacidade){
        this.elementos = [];
        if(typeof capacidade !== undefined){
            this.capacidade = capacidade
        } else {
            this.capacidade = Infinity
        }
    }
    adicionar(elem){
        if(this.elementos.length >= this.capacidade){
            return "Pilha cheia!"
        }else {
            this.elementos.push(elem)
        }
    }

    remover(){
        if(this.elementos.length === 0){
            return "Pilha vazia!"
        } else {
            return this.elementos.pop()
        }
    }

    obterValor(){
        if(this.elementos.length === 0) {
            return "Pilha vazia!"
        } else {
            return this.elementos[this.elementos.length-1]
        }
    }

}