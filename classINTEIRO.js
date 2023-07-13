class Inteiro {
    #inteiro
    constructor(inteiro) {
        if(typeof inteiro === 'number') {
             this.#inteiro = Math.floor(inteiro);
        } else {
            this.#inteiro = 0;
        }

    }
    get valor() {
        return this.#inteiro
        }
    set valor(novo) {
        if (typeof novo !== "number") {
            this.#inteiro = this.#inteiro ? this.#inteiro : 0;
        } else {
            this.#inteiro = Math.floor(novo);
        }
    }
}

// outra solução
class Inteiro {
    #inteiro
    constructor(inteiro) {
        this.#inteiro = typeof inteiro === "number" ? Math.floor(inteiro) : 0 
    }

    get valor() {
        return this.#inteiro
    }

    set valor(nv) {
        if (Number.isNaN(Number(nv))) {
            this.#inteiro = this.#inteiro ? this.#inteiro : 0;
        } else {
            this.#inteiro = Math.floor(nv);
        }
    }
}