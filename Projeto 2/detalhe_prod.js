function detalhes_produto() {
    var query = location.search.slice(1);
    var partes = query.split('&');
    console.log(partes)
    var valor
  
    partes.forEach(function(parte) {
      var chaveValor = parte.split('=');
      var chave = chaveValor[0];
      valor = chaveValor[1];
      console.log(chave)
      console.log(valor)
    });
  
    fetch(`https://diwserver.vps.webdock.cloud/products/${valor}`)
      .then(res => res.json())
      .then(products => {
        console.log(products)
        let str = ''
        str +=
          `<div class="row">          
              <div class="col-md-4">
                <img src="${products.image}">
              </div>  
              <div class="col-md-8">
                <p>${products.title}</p>
                <p>R$ ${products.price/10}</p>
                <p2>Categoria:</p2>
                <p>${products.displayCategories}</p>
                <p2>Marca:</p2>
                <p>${products.brandName}</p>
                <p2>Cor:</p2>
                <p>${products.baseColour}</p>
                <p2>Ano:</p2>
                <p>${products.year}</p>
                <p2>Descrição:</p2>
                <p>${products.description}</p>
              </div>
            </div>`
        $('#tela_detalhes').html(str)
      })
      .catch(error => console.log(error));
  }