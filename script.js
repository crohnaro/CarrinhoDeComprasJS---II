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
            let cartElement = document.getElementById('cart');
            cartElement.innerHTML = '';

            cart.forEach((product, index) => {
                let productElement = document.createElement('li');
                productElement.className = 'cart-item';
                productElement.innerHTML = `${product.name} - R$${product.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remover</button>`;
                cartElement.appendChild(productElement);
            });

            document.getElementById('total').innerHTML = total.toFixed(2);
        }

        function removeFromCart(index) {
            // Atualiza o total
            total -= cart[index].price;

            // Remove o produto do carrinho
            cart.splice(index, 1);

            // Renderiza o carrinho novamente
            renderCart();
        }

        function toggleCart() {
            let cartElement = document.getElementById('cart-modal');
            if (cartElement.style.display === 'none' || cartElement.style.display === '') {
                cartElement.style.display = 'block';
            } else {
                cartElement.style.display = 'none';
            }
        }