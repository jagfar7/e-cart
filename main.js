// Product data
const cart = [];
const cartModal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeCart = document.getElementById('close-cart');
const cartItems = document.getElementById('cart-items');
const cartCount = document.getElementById('cart-count');
const cartTotal = document.getElementById('cart-total');

// Add to Cart functionality
document.querySelectorAll('.add-to-cart-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const id = productCard.getAttribute('data-id');
        const name = productCard.querySelector('h3').textContent;
        const price = parseFloat(productCard.querySelector('.price').textContent.slice(1));

        cart.push({ id, name, price });
        updateCart();
    });
});

// Update Cart
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartItems.appendChild(li);
        total += item.price;
    });

    cartTotal.textContent = total.toFixed(2);
    cartCount.textContent = cart.length;
}

// Show/Hide Cart Modal
cartBtn.addEventListener('click', () => {
    cartModal.style.display = 'flex';
});

closeCart.addEventListener('click', () => {
    cartModal.style.display = 'none';
});
document.getElementById('toggle-btn').addEventListener('click', function() {
    var navLinksContainer = document.getElementById('nav-links-container');
    navLinksContainer.classList.toggle('active');
});
