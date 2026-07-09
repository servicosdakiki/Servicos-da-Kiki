let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

fetch("produtos.json")
.then(resposta => resposta.json())
.then(produtos => {

    let area = document.getElementById("itensCarrinho");
    let total = 0;

    area.innerHTML = "";

    if(carrinho.length == 0){
        area.innerHTML = "<p>Seu carrinho está vazio.</p>";
        return;
    }

    carrinho.forEach(item => {

        let produto = produtos.find(p => p.id == item.id);

        if(produto){

            let subtotal = produto.preco * item.quantidade;
            total += subtotal;

            area.innerHTML += `
                <div class="produto">

                    <img src="${produto.imagem}" alt="${produto.nome}">

                    <h3>${produto.nome}</h3>

                    <p>R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>

                    <p>Quantidade: ${item.quantidade}</p>

                    <p><strong>Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}</strong></p>

                </div>
            `;
        }

    });

    document.getElementById("total").innerHTML =
    `Total: <strong>R$ ${total.toFixed(2).replace(".", ",")}</strong>`;

});