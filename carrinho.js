let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let area = document.getElementById("itensCarrinho");
let total = document.getElementById("total");

if (carrinho.length === 0) {
    area.innerHTML = "<p>Seu carrinho está vazio.</p>";
} else {
    area.innerHTML = "";

    carrinho.forEach(item => {
        area.innerHTML += `
            <div class="produto">
                <h3>Produto ID: ${item.id}</h3>
                <p>Quantidade: ${item.quantidade}</p>
            </div>
        `;
    });
}
