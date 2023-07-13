/*function subtraiDias(data, dias){
    const dataEmMs = data.valueOf()
    const msNumDia = 24 * 60 * 60 * 1000
    return new Date(dataEmMs - dias * msNumDia)
} */

function adicionaSemanas (data, semanas) {
    const dataEmMs = data.valueOf()
    const dias = 24 * 60 * 60 * 1000
    const semana = 7 * dias
    return new Date(dataEmMs + semanas * semana)
}

console.log(adicionaSemanas(new Date(), 3))