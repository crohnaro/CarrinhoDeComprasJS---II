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
    let cartList = document.getElementById('cart');
    cartList.innerHTML = '';
 
    cart.forEach((item, index) => {
        let listItem = document.createElement('li');
        listItem.innerText = `${item.name} - R$ ${item.price.toFixed(2)}`;
 
        // Botão de remoção
        let removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.onclick = () => removeFromCart(index);
 
        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });
 
    let totalElement = document.getElementById('total');
    totalElement.innerText = total.toFixed(2);
}
 
function removeFromCart(index) {
    // Atualiza o total subtraindo o preço do item removido
    total -= cart[index].price;
 
    // Remove o item do carrinho
    cart.splice(index, 1);
 
    // Renderiza o carrinho novamente
    renderCart();
}
 
function toggleCart() {
    let cartModal = document.getElementById('cart-modal');
    if (cartModal.style.display === 'none' || cartModal.style.display === '') {
        cartModal.style.display = 'block';
    } else {
        cartModal.style.display = 'none';
    }
}