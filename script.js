let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    
    cart.push({ name: productName, price: productPrice });

    total += productPrice;

    renderCart();

}

function renderCart() {
    const cartElement = document.getElementById('cart');
    const totalElement = document.getElementById('total');

    
    cartElement.innerHTML = '';

    cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'item';
    li.setAttribute('data-price', item.price.toFixed(2));
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.className = 'botaoremov';
    removeButton.onclick = () => removeFromCart(index); 
    li.appendChild(removeButton);

    cartElement.appendChild(li);
    });

    totalElement.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    
    if (index >= 0 && index < cart.length) {
    total -= cart[index].price;
   cart.splice(index, 1);
    renderCart();
    }
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = (modal.style.display === 'block') ? 'none' : 'block';
}