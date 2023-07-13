function mapaDeOcorrencias(array) {

  //Se o arrayEle, no reduce, contém o elemento, mapeia um array novo com tudo o que está no arrayele e adiciona o elemento, e o número de vezes que aparece.
  //Se não tiver o elemento dentro do arrayEle, adiciona tudo o que está lá, o elemento e adiciona 1 à contagem.

  return array.reduce((arrayEle, ele) => {
    return arrayEle.has(ele)
      ? new Map([...arrayEle, [ele, arrayEle.get(ele) + 1]])
      : new Map([...arrayEle, [ele, 1]]);
  }, new Map([]));
}
