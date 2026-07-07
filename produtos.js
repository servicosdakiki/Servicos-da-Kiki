let produtos = [];


fetch("produtos.json")

.then(resposta => resposta.json())

.then(dados => {

    produtos = dados;

    mostrarProdutos(produtos);

});



function mostrarProdutos(lista){


let area = document.getElementById("listaProdutos");


area.innerHTML="";



lista.forEach(produto=>{


area.innerHTML += `


<div class="produto">


<img src="${produto.imagem}">


<h3>${produto.nome}</h3>


<p>
R$ ${produto.preco},00
</p>


<button>
Adicionar ao carrinho
</button>


</div>


`;


});


}





function filtrar(categoria){


if(categoria=="Todos"){

mostrarProdutos(produtos);

return;

}


let filtrados = produtos.filter(

produto => produto.categoria == categoria

);


mostrarProdutos(filtrados);


}
