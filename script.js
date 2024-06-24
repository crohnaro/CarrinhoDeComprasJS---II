let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    cart.push({ name: productName, price: productPrice });

    // Atualiza o total
    total += productPrice;

    // Renderiza o carrinho
    renderCart();
}

function renderCart() {
    const cartElement = document.getElementById('cart');
    cartElement.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartElement.appendChild(li);
    });

    document.getElementById('total').textContent = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    if (modal.style.display === "none" || modal.style.display === "") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
}