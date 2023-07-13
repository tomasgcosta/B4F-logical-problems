function gerarCodigoCor(){
    let resultado = '';
    const codigo = 'ABCDEF123456789';
    for (let i = 0; i < 6; i++) {
      resultado += codigo.charAt(Math.floor(Math.random() * codigo.length));
    }
    return '#' + resultado;
  }

  console.log(gerarCodigoCor())