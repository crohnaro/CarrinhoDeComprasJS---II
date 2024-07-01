let cart = [];
let total = 0;
 
function addToCart(productName, price) {
    // Estrutura básica do item do carrinho
    var item = {
        name: productName,
        price: price
    };

    // Recupera o carrinho do armazenamento local ou inicializa um novo array vazio
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Adiciona o novo item ao carrinho
    cart.push(item);

    // Armazena o carrinho de volta no armazenamento local
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mostra mensagem de sucesso (opcional)
    alert('Produto adicionado ao carrinho!');

    // Você pode adicionar lógica adicional aqui, como atualizar a exibição do carrinho na página
}

// Função para redirecionar à página do carrinho
document.querySelector('.cart-button').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redireciona para cart.html
});

// Função para exibir ou ocultar o modal do carrinho
function toggleCart() {
    var modal = document.getElementById('cart-modal');
    modal.classList.toggle('show-modal');
}

// Redirecionar para a página de carrinho ao clicar no botão "Ver Carrinho"
document.querySelector('.cart-button').addEventListener('click', function() {
    window.location.href = 'index.html'; // Redireciona para cart.html
});
 
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