class Pessoa {
    // Escreve aqui o teu código
    constructor(nome, idade, sexo) {
        this.nome = nome
        this.idade = idade
        this.sexo = sexo
    }

    comparaIdade(pessoa) {
        if (pessoa.idade < this.idade) {
            return `${pessoa.sexo === 'm' ? 'O' : 'A'} ${pessoa.nome} é mais nov${pessoa.sexo === 'm' ? 'o' : 'a'} do que eu.`
        } else if (pessoa.idade > this.idade) {
            return `${pessoa.sexo === 'm' ? 'O' : 'A'} ${pessoa.nome} é mais velh${pessoa.sexo === 'm' ? 'o' : 'a'} do que eu.`
        } else if (pessoa.idade === this.idade) {
            return `${pessoa.sexo === 'm' ? 'O' : 'A'} ${pessoa.nome} é da mesma idade que eu.`
        }
    }
}

const pessoa1 = new Pessoa ('john', '19', 'f')
const pessoa2 = new Pessoa ('mary', '20', 'm')

console.log(pessoa1.comparaIdade.pessoa1)
