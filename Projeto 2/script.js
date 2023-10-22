function init() {
    //fetch('https://diwserver.vps.webdock.cloud/products?page=1')
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            let str = ''
            let aside = ''
            //data = data.products
            for (let i = 0; i < data.length; i++) {
                let products = data[i]
                console.log(products)
                str +=
                    `<div class="prod">
                        <a href="detalhes.html?id=${products.id}"><img src="${products.image}"></a>
                        <p><a href="detalhes.html?id=${products.id}">${products.title}</a><br>R$ ${products.price/10}</p>
                        <div id="apagar">${products.brandName}${products.articleType}${products.displayCategories}<p>categoria, tipo, marca</p></div>
                        <div class="estrelas">
                            <input type="radio" id="cm_star-empty" name="fb" value="${products.rating.rate}" checked />
                            <label for="cm_star-1"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-1" name="fb" value="1" />
                            <label for="cm_star-2"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-2" name="fb" value="2" />
                            <label for="cm_star-3"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-3" name="fb" value="3" />
                            <label for="cm_star-4"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-4" name="fb" value="4" />
                            <label for="cm_star-5"><i class="fa"></i></label>
                            <input type="radio" id="cm_star-5" name="fb" value="5" />
                        </div>
                    </div>`
                /*`<div class="row">          
                  <div class="col-7">
                    <p>${products.title}</p>
                  </div>
                  <div class="col-3">
                    <img src="${products.image}"  alt="..." class="img-thumbnail" style="max-width:100px;">
                  </div>
                  <div class="col-2">
                    <a class="btn btn-primary" href="detalhes.html?id=${products.id}" role="button">detalhes</a>
                  </div>
                </div>`*/

                console.log(str)
                $('#tela').html(str)

            }
            for (let i = 0; i < 6; i++) {
                let products = data[i]
                console.log(products)
                aside +=
                    `<div>
                        <a href="detalhes.html?id=${products.id}"><img src="${products.image}"></a>
                        <p><a href="detalhes.html?id=${products.id}">${products.title}</a><br>R$ ${products.price/10}</p>
                    </div>
                    <hr>`
                console.log(aside)
                $('#mais_vistos').html(aside)
            }
        
        })
        .catch(error => console.log(error));
}

function buscar() {
    let input = document.getElementById('text_pesq').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function buscar2() {
    let input = document.getElementById('cat').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function buscar3() {
    let input = document.getElementById('mar').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}

function buscar4() {
    let input = document.getElementById('tip').value;
    input=input.toLowerCase();
    let x = document.getElementsByClassName('prod');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}









/*function buscar2(event) {
    event.preventDefault();
  
    let categoria = document.getElementById("cat").value.toLowerCase();
    let marca = document.getElementById("mar").value.toLowerCase();
    let tipo = document.getElementById("tip").value.toLowerCase();
    let precoInicial = document.getElementById("iprice").value.toLowerCase();
    let precoFinal = document.getElementById("lprice").value.toLowerCase();
  
    let produtos = document.getElementsByClassName('prod');
  
    for (let i = 0; i < produtos.length; i++) {
      let produto = produtos[i];
      let produtoCategoria = produto.getAttribute('data-categoria').toLowerCase();
      let produtoMarca = produto.getAttribute('data-marca').toLowerCase();
      let produtoTipo = produto.getAttribute('data-tipo').toLowerCase();
      let produtoPreco = produto.getAttribute('data-preco').toLowerCase();
  
      if (
        (categoria !== 'categoria' && produtoCategoria !== categoria) ||
        (marca !== 'marca' && produtoMarca !== marca) ||
        (tipo !== 'tipo' && produtoTipo !== tipo) ||
        (precoInicial !== '' && parseFloat(produtoPreco) < parseFloat(precoInicial)) ||
        (precoFinal !== '' && parseFloat(produtoPreco) > parseFloat(precoFinal))
      ) {
        produto.style.display = "none";
      } else {
        produto.style.display = "list-item";
      }
    }
  }

var form = document.querySelector('.form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    buscar2();
  });*/

/*function buscar2() {
    event.preventDefault();

    let categoria = document.getElementById("cat").value;
    let marca = document.getElementById("mar").value;
    let tipo = document.getElementById("tip").value;
    let precoInicial = document.getElementById("iprice").value;
    let precoFinal = document.getElementById("lprice").value;
    categoria=categoria.toLowerCase();
    marca=marca.toLowerCase();
    tipo=tipo.toLowerCase();
    precoInicial=precoInicial.toLowerCase();
    precoFinal=precoFinal.toLowerCase();

    let x = document.getElementsByClassName('prod');

    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
    var form = document.querySelector('.form');
    form.addEventListener('submit', buscar2);
}*/

/*function sucsses() {
    // JSON fornecido
    let obj = JSON.parse(this.responseText);

    // Função para buscar os produtos e extrair as informações
    function buscarProdutos() {
        var produtos = obj.products;

        for (var i = 0; i < produtos.length; i++) {
            var produto = produtos[i];
            var title = produto.title;
            var price = produto.price;
            var description = produto.description;
            var image = produto.image;
            var rating = produto.rating.rate;
            var category = produto.category;
            var articleType = produto.articleType;
            var brandName = produto.brandName;

            // Utilize as informações conforme necessário
            console.log("Produto " + (i + 1));
            console.log("Título: " + title);
            console.log("Preço: " + price);
            console.log("Descrição: " + description);
            console.log("Imagem: " + image);
            console.log("Avaliação: " + rating);
            console.log("Categoria: " + category);
            console.log("Tipo de Artigo: " + articleType);
            console.log("Marca: " + brandName);
            console.log("----------------------");
        }
    }

    // Chama a função para buscar e extrair as informações dos produtos
    buscarProdutos();
}
var xhr = new XMLHttpRequest();
xhr.onload = sucsses;
xhr.onload = error;
xhr.open('GET', 'https://diwserver.vps.webdock.cloud/products');
xhr.send();*/