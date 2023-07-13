class Ventoinha {
    #ligada
    #intensidade
    constructor() {
        this.#intensidade = 5;
        this.#ligada = false
    }
    aumentarIntensidade() {
        if (this.#intensidade < 11) {
            this.#intensidade += 1
        }
    }
    diminuirIntensidade() {
        if (this.#intensidade > 1) {
            this.#intensidade -= 1
        }
    }
    ligarDesligar() {
        if (this.#ligada) {
            this.#ligada = false
        } else {
            this.#ligada = true
        }
    }
    get ligada() {
        return this.#ligada
    }
    get intensidade(){
        return this.#intensidade
    }
}
console.log(Ventoinha.intensidade)