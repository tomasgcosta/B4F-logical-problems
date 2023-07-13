function converteHacker(string) {
    let leethaxor = "";
    for (let i = 0; i < string.length; i++) {
      switch (string[i]) {
        case "A":
        case "a":
          leethaxor += "4";
          break;
        case "E":
        case "e":
          leethaxor += "3";
          break;
        case "I":
        case "i":
          leethaxor += "1";
          break;
        case "O":
        case "o":
          leethaxor += "0";
          break;
        case "S":
        case "s":
          leethaxor += "5";
          break;
        default:
          leethaxor += string[i];
          break;
      }
    }
    return leethaxor;
  }
console.log(converteHacker("Olá, sou a Andreia")) 

/* ------------------------------------- SOLUÇÃO IF  ----------
let leethaxor = "";
for(let i = 0; i < string.length; i++){
    if(string[i] === ("a" || "A")){
        leethaxor += "4";
        continue;
    }
    if(string[i] === ("e" || "E")){
        leethaxor += "3";
        continue;
    }
    if(string[i] === ("i" || "I")){
        leethaxor += "1";
        continue;
    }
    if(string[i] === ("o" || "O")){
        leethaxor += "0";
        continue;
    }
    if(string[i] === ("s" || "S")){
        leethaxor += "5";
        continue;
    }
    leethaxor += string[i]
}
return leethaxor;

}
console.log(converteHacker("Sou um Hacker")); 
}
*/


// ---------------  SOLUÇÃO ARRAY ----------------
/*function converteHacker(string) {
let resposta = string;
const possibilidades = [
    ["a", "A"], 
    ["e", "E"], 
    ["i", "I"], 
    ["o", "O"], 
    ["s", "S"]
]
//const minusculas = ["a", "e", "i", "o", "s"]
//const maiusculas = ["A", "E", "I", "O", "S"]
const referencias = ["4", "3", "1", "0", "5"]

const indice = ["a", "e", "i", "o", "s"].findIndex(function (elemento){

    return elemento === "o"
})
for (let i = 0; i < string; i++){
    const caracter = string[i];

    const indiceReferencia = possibilidades.findIndex(parDePossibilidades => parDePossibilidades.includes(caracter))

    resposta += referencias[indiceReferencia] ?? caracter
}
}*/

//---------------------  SOLUÇÃO REPLACE ----------------
/*
function converteHacker(string){
    return string.replace(/A|a/g, "4")
    .replace(/E|e/g, "3")
    .replace(/I|i/g, "1")
    .replace(/O|o/g, "0")
    .replace(/S|s/g, "5")
}
*/