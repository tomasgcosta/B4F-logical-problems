const jogo = {

    tabuleiro: [
        ["X", " ", "X",],
        [" ", "O", "O",],
        [" ", " ", " ",]
    ]
}


function adicionarJogada(jogo, jogador, linha, coluna){

    // const novoJogo = structuredClone(jogo)
    // const novoJogo = JSON.parse(JSON.stringify(jogo))

    const novoJogo = {
        tabuleiro: novoTabuleiro = []
    }
    for(let linhas = 0; linhas < jogo.tabuleiro.length; linhas++){
        novoTabuleiro[linhas] = jogo.tabuleiro[linhas].slice();
    }
    
    if(novoTabuleiro[linha][tabuleiro] === " "){
        novoTabuleiro[linha][coluna] = jogador
    }
    return novoJogo
    /* 
    for(let linhas = 0; linhas < jogo.tabuleiro.length; linhas++){
        novoTabuleiro[linhas] = new Array(jogo.tabuleiro[linhas].length);
        for(let colunas = 0; colunas < jogo.tabuleiro[linhas].length; colunas++){
            novoTabuleiro[linhas][colunas] = jogo.tabuleiro[linhas][colunas];
        }
    }
    */
    
}

function verificarLinhas(jogo){
    let linhas = []
    for (let linhas = 0; linhas < jogo.tabuleiro.length; linhas++){
    jogo.tabuleiro[linhas].join("")
}
    return linhas;
}

function verificarColunas(jogo){
    let colunas = [];
    for(let i = 0; i < jogo.tabuleiro.length; i++){
        for(let j = 0; j < jogo.tabuleiro[i].length; j++){
        colunas.push(jogo[j][i])
    }
    }
}
function verificarDiagonais(jogo){
let diagonais = ["",""]
for (let i = 0; i < jogo.tabuleiro.length; i++){
    diagonais[0] += jogo.tabuleiro[i][i];
    diagonais[i] += jogo.tabuleiro[i]
}
}

function obtemSequencias(jogo){
    return obtemLinhas(jogo)
    .concat(obtemColunas(jogo))
    .concat(obtemDiagonais(jogo))
}


function obterJogadasPossiveis(jogo){
    let jogadasPossiveis = [];
    for (let linhas = 0; linhas < jogo.tabuleiro.length; linhas++){
        //o jogo.tabuleiro[linhas].length é necessário para percorrer a matiz se não for um 3x3 (exemplo), ou seja, se não tiver mesmo comprimento x altura.
        for(let colunas = 0; colunas < jogo.tabuleiro[linhas].length; colunas++){
            if(jogo.tabuleiro[linhas][colunas] === " "){
                jogadasPossiveis.push({
                    linha: linhas,
                    coluna: colunas
            })
            }
        }
    }

}


function verificarVencedor(jogo){
/*
    const combinacoesVencedoras = [
        [[0,0], [0,1], [0,2]], // linha 1
        [[1,0], [1,1], [1,2]], // linha 2
        [[2,0], [2,1], [2,2]], // linha 3
        [[0,0], [1,0], [2,0]], // coluna 1
        [[0,1], [1,1], [2,1]], // coluna 2
        [[0,2], [1,2], [2,2]], // coluna 3
        [[0,0], [1,1], [2,2]], // diagonal principal
        [[0,2], [1,1], [2,0]], // diagonal secundária
    ]

    for(let i = 0; i < combinacoesVencedoras.length; i++){
        const combinacao = combinacoesVencedoras[i];
        const linha1aPosicao = combinacao[0][0];
        const coluna1aPosicao = combinacao[0][1];
        const linha2aPosicao = combinacao[1][0]
        const coluna2aPosicao = combinacao[1][1]
        const linha3aPosicao = combinacao[2][0]
        const coluna3aPosicao = combinacao[2][1]

        const simbolo1 = jogo.tabuleiro[linha1aPosicao][coluna1aPosicao]
        const simbolo2 = jogo.tabuleiro[linha2aPosicao][coluna2aPosicao]
        const simbolo3 = jogo.tabuleiro[linha3aPosicao][coluna3aPosicao]
        if(simbolo1 !== " " && simbolo1 === simbolo2 && simbolo1 === simbolo3){
            return simbolo1
        }
    }
*/
    const sequencias = obtemSequencias(jogo)
    if (sequencias.includes("XXX")) return "X"
    if (sequencias.includes("OOO")) return "O"
    // codigo para verificar
    return undefined
}


function verificarFimDoJogo(jogo){
    // se não houver jogadas possiveis ou existir um vencedor
    return obterJogadasPossiveis(jogo).length === 0 || verificarFimDoJogo(jogo) !== undefined
    //obterJogadasPossiveis vai retornar um array vazio através do seu length || se verificarFimDoJogo retornar o contrário de undefined(false), o jogo ainda não acabou.
}