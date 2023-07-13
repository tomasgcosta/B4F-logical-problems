function calculaAreaSupCone(raio, altura){
    const areaBase = Math.PI * raio **2
    const alturaLateral = Math.sqrt(altura**2 + raio**2)
    const areaLateral = Math.PI * raio * alturaLateral
    const areaTotal = areaBase + areaLateral

    return areaTotal
}