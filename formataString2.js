function formataString(string) {
    return string.split('').reduce((acc, curr) => (
        curr === curr.toUpperCase() ? acc + curr.toLowerCase() : acc + curr.toUpperCase()
        ), "")
}

console.log(formataString("Exemplo"))