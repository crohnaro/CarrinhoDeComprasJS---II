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
    const totalElement = document.getElementById('total');

    // Limpa o conteúdo atual do carrinho
    cartElement.innerHTML = '';
    
    // Adiciona cada item do carrinho
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.className = 'item';
        li.setAttribute('data-price', item.price.toFixed(2));
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

        // Botão de remoção do item
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.className = 'remove-button'
        removeButton.onclick = () => removeFromCart(index); // Chama removeFromCart com o índice do item
        li.appendChild(removeButton);

        cartElement.appendChild(li);
    });

    // Atualiza o total
    totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    // Verifica se o índice é válido
    if (index >= 0 && index < cart.length) {
        // Subtrai o preço do item removido do total
        total -= cart[index].price;

        // Remove o item do carrinho
        cart.splice(index, 1);

        // Renderiza o carrinho novamente
        renderCart();
    }
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}