let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    // Adiciona o produto ao carrinho
    cart.push({productName, productPrice})

    // Atualiza o total
    total += productPrice

    // Renderiza o carrinho
    renderCart()
}

function removeFromCart(index) {
    // Remove o produto do carrinho
    const removedItem = cart.splice(index, 1)[0]

    //atualiza o total
    total -= removedItem.productPrice

    //renderiza o carrinho
    renderCart()
}

function renderCart() {
    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = ''

    cart.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = `${item.productName} - R$ ${item.productPrice.toFixed(2)}`

        const removeButton = document.createElement('button')
        removeButton.textContent = 'Remove'
        removeButton.onclick = () => removeFromCart(index)

        li.appendChild(removeButton)
        cartElement.appendChild(li)
    })

    document.getElementById('total').textContent = total.toFixed(2)
    }


function toggleCart() {
    // Exibe ou esconde o modal do carrinho
   const modal = document.getElementById('cart-modal')
   modal.style.display = modal.style.display === 'block' ? 'none' : 'block'
}

window.onclick = function(event) {
    const modal = document.getElementById('cart-modal')
    if (event.target === modal) {
        modal.style.display = 'none'
    }
}