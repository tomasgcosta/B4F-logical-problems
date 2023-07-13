function verificaIdade(pessoa) {
    
    pessoa.maiorDeIdade = pessoa.idade >= 18
    return pessoa;
}



let pessoa1 = {
    nome: 'Tomás',
    idade: 15
  }

  const pessoa2 = {
    nome: "Luís",
    idade: 39
  }


  console.log(verificaIdade(pessoa1))

