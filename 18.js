function maiorProduto(array) {
    let maiorProduto = 0;
    for(let i = 0; i < array.length; i++) 
      for(let j = i + 1; j < array.length; j++) {
        if(array[i] * array[j] > maiorProduto)
          maiorProduto = array[i] * array[j];
      }
    return maiorProduto;
  }
  console.log(maiorProduto([10,80,14,13,30,20,60,22]));