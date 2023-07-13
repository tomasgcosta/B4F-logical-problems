/* Completa a classe  "GARRAFA DE ÁGUA" que tem um construtor que recebe uma "QUANTIDADE". [x]

Deve ter a propriedade "ABERTA", que é um booleano e deve inicializada a . [x]

Deve ter a propriedade "QUANTIDADE", que é um valor entre  0 e "CAPACIDADE" e deve ser inicializada com o valor 0. []

Deve ser possível aceder às propriedades "CAPACIDADE", "QUANTIDADE" e "ABERTA" garantindo as regras acima. [x]

Deve ser possível abrir e fechar a GarrafaDeAgua através do método "abrirFechar". [x]

Deve ser possível beber da garrafa, através do método , consumindo  da quantidade e deve ser possível encher a garrafa através do método  que recebe um argumento . []

*/
class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta

    constructor(quantidade, capacidade) {
        this.#capacidade = capacidade
        this.#quantidade = Math.min(quantidade, capacidade)
        this.#aberta = false;
    }

    beber() {
        if (this.#aberta) {
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            } else {
                this.#quantidade = Math.max(0, this.#quantidade - 200)
            }
        } else { 
            return "A garrafa está fechada" 
        }
    }

    encher(quantidade) {
        if (this.#aberta) {
            this.#quantidade = Math.min(this.#capacidade, this.#quantidade + quantidade)
        } else { 
            return "A garrafa está fechada" 
        }
    }

    abrirFechar() {
        if (!this.#aberta) {
            this.#aberta = true;
        } else {
            this.#aberta = false; 
        }
    }

    get quantidade() {
        return this.#quantidade
    }

    get aberta() {
        return this.#aberta
    }

    get capacidade() {
        return this.#capacidade
    }
}