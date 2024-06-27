let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    let item = {
        name: productName,
        price: productPrice
    };

    cart.push(item);


    total += productPrice;


    renderCart();


    toggleCart();
}

function removeFromCart(index) {

    const removedItem = cart.splice(index, 1)[0];


    total -= removedItem.price;


    renderCart();
}

function renderCart() {

    const cartElement = document.getElementById('cart');


    cartElement.innerHTML = '';


    cart.forEach((item, index) => {

        let li = document.createElement('li');
        li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;


        let removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = function() {
            removeFromCart(index);
        };

        li.appendChild(removeButton);
        cartElement.appendChild(li);
    });


    const totalElement = document.getElementById('total');
    totalElement.textContent = total.toFixed(2);
}

function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';

    
    if (cart.length === 0) {
        alert('Seu carrinho está vazio.');
        return;
    }

    cartModal.style.display = 'block';

    renderCart();
}

