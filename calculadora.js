class Calculadora {
    constructor() {
        this.resultado = 0n;
        this.historico = [];
    }

    somar(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) + BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} + ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    subtrair(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) - BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} - ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    multiplicar(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) * BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} * ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    dividir(a, b) {
        let valor1 = !b ? this.resultado : a;
        let valor2 = b ? b : a;

        this.resultado = BigInt(valor1) / BigInt(valor2);
        this.historico = [
            ...this.historico,
            `${valor1} / ${valor2} = ${this.resultado}`,
        ];

        return this;
    }

    limparHistorico() {
        this.historico = [];
        this.resultado = 0n;

        return this;
    }

    obterResultado() {
        return BigInt(this.resultado)
    }

    toJSON() {
        let jsonObject = {
            historico: this.historico.map((el) => el),
            ultimoResultado: String(this.resultado)
        };

        return jsonObject;
    }

    toString() {
        if (this.historico.length === 0) {
            return "Calculadora Limpa";

        } else {
                return `=== Histórico da Calculadora ===
${this.historico.map((el, i) => i + 1 + ". " + el).join("\n")}
=== Fim do Histórico ===
Foram realizadas ${this.historico.length} operações
Último Resultado: ${this.obterResultado()}`;
        }
    }
}
﻿