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
<div class="item-carrinho">

    <img src="${produto.imagem}" alt="${produto.nome}">

    <div class="info-carrinho">

        <h3>${produto.nome}</h3>

        <p>Preço: R$ ${produto.preco.toFixed(2).replace(".", ",")}</p>

        <div class="quantidade">

<button onclick="diminuirQuantidade(${item.id})">➖</button>

<span>${item.quantidade}</span>

<button onclick="aumentarQuantidade(${item.id})">➕</button>

</div>

        <p><strong>Subtotal: R$ ${subtotal.toFixed(2).replace(".", ",")}</strong></p>

    </div>

</div>
`;

    });

    document.getElementById("total").innerHTML =
`<div class="total-carrinho">
Total: <strong>R$ ${total.toFixed(2).replace(".", ",")}</strong>
</div>`;
});