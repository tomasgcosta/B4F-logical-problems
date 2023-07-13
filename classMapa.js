/* 
A classe  MAPA tem quatro métodos:

SET, este método adiciona um novo CHAVEVALOR ao MAPA, o método recebe dois argumentos, sendo o primeiro a chave e o segundo o valor. Caso um elemento com essa chave já exista na coleção, substitui o seu valor com o novo valor.
HAS, este método verifica se uma chave existe no MAPA, retorna  TRUE caso exista, e FALSE caso contrário, recebe um argumento .
get, este método recebe como argumento uma CHAVE e retorna o VALOR associado a essa chave, retorna  UNDEFINED se a chave não existir no .
CLEAR, este método "limpa" a lista, removendo todos os pares CHAVEVALOR.
DELETE, este método recebe uma CHAVE como argumento e remove o par CHAVEVALOR que tenha a mesma chave.
A classe CHAVEVALOR tem um construtor que recebe como argumentos uma CHAVE e um VALOR respetivamente. Deve ter duas propriedades, chave e valor, deve ser possível  ACEDER e ALTERAR à propriedade valor, e deve ser possível  à propriedade . 
*/

class Mapa {
    constructor(chave, valor) {
      this.chave = chave;
      this.valor = valor;
    }
  
    set(chave, valor) {
      this.chave = chave;
      this.valor = valor;
    }
  
    has(chave) {
      return this.chave === chave;
    }
  
    get(chave) {
      if (this.chave === chave) {
        return this.valor;
      }
      return undefined;
    }
  
    clear() {
      this.chave = undefined;
      this.valor = undefined;
    }
  
    delete(chave) {
      if (this.chave === chave) {
        this.chave = undefined;
        this.valor = undefined;
      }
    }
  }

class ChaveValor {
    constructor(chave, valor) {
      this.chave = chave;
      this.valor = valor;
    }
  
    getValor() {
      return this.valor;
    }
  
    setValor(valor) {
      this.valor = valor;
    }
  }