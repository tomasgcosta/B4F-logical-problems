function paresDeZeroAN(n) {
    console.log(n)
  if (n < 0) {
    return "Por favor insira um número superior a 0.";
  } else if (n === 0) {
    return [0];
  } else {
    return [...paresDeZeroAN(n - 1), n].filter(num => num % 2 === 0);
  }
}

console.log(paresDeZeroAN(52))

function paresDe0aN(n) {
  if(n < 0){
    return "Por favor insira um número superior a 0."
  }

  if(n === 0) {
    return [0];
  }
  if(n % 2 === 0){
    return [...paresDe0aN(n - 1), n]
  }
  return paresDe0aN(n-1)
}