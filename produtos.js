let produtos = [];

fetch("produtos.json")
.then(resposta => resposta.json())
.then(dados => {
    alert("JSON carregado!");
    produtos = dados;
    mostrarProdutos(produtos);
})
.catch(erro => {
    alert("Erro: " + erro);
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


<button onclick="adicionarCarrinho(${produto.id})">
    🛒 Adicionar ao carrinho
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

function adicionarCarrinho(id){

    let carrinho =
    JSON.parse(localStorage.getItem("carrinho")) || [];


    let produto =
    carrinho.find(item => item.id == id);


    if(produto){

        produto.quantidade++;

    }else{

        carrinho.push({

            id:id,
            quantidade:1

        });

    }


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    alert("Produto adicionado ao carrinho!");

}
