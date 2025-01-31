



// Product data (can be fetched from a server/database)
const products = [
    { id: 1, name: 'Flower pot', price: 79.99, image: 'recycled-glassware_7071.jpg'},
    { id: 2, name: 'Sack', price: 49.99, image: 'Bembien_Jolene3.jpg' },
    { id: 3, name: 'Oil drum chair', price: 1499.99, image: 'iStock-627975710-oil-drum-furniture-1.jpg' },
    { id: 4, name: 'Tyre seat', price: 899.99, image: 'OIP.jpeg' },
    { id: 5, name: 'Water bottle', price: 99.99, image: 'Klean-Kanteen-Recycled-Gear.png' },
    { id: 6, name: 'Carpet', price: 169.99, image: 'Gear-Bearaby-Ocean_Hugger_MidnightBlue_Folded-SOURCE-Bearaby.jpg' },
    { id: 7, name: 'Plant vase', price: 89.99, image: 'Gear-Re_Pots-maritime-SOURCE-Via-Citrus.jpg.jpg' },
    { id: 8, name: 'Blanket', price: 199.99, image: 'Gear-Seljak-Earth-blanket-1-SOURCE-Seljak.jpg' },
    { id: 9, name: 'Glass dispenser', price: 209.99, image: 'gstea1905_00.jpg' },
    { id: 10, name: 'Product 10', price: 49.99, image:'cup.jpg '},
    { id: 11, name: 'Dust bin', price: 349.99, image: 'plastic-dustbin_1024x1024.webp' },
    { id: 12, name: 'T-Shirt', price: 399.99, image: 'product1.jpg' },
    { id: 13, name: 'Chair', price: 899.99, image: 'chair.jpg' },
    { id: 14, name: 'cocunut shell pendent', price: 99.99, image: 'handicraft.jpg' },
    { id: 15, name: 'Roti-Box', price: 169.99, image: 'rotibox.jpg' },
    { id: 16, name: 'Storage Bag', price: 49.99, image: 'storage bag.jpg' }
];

// Load products into the grid
const productGrid = document.getElementById('productGrid');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
let cart = [];

products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 150px; height: 150px; object-fit: cover;" />
        <h3>${product.name}</h3>
        <p>₹${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productGrid.appendChild(productElement);
});

// Function to add items to the cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = cart.find(item => item.product.id === productId);

    if (cartItem) {
        cartItem.quantity++;
    } else {
        cart.push({ product, quantity: 1 });
    }

    updateCart();
}

// Function to update the cart display
function updateCart() {
    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
            <strong>${item.product.name}</strong> (x${item.quantity}) - ₹${(item.product.price * item.quantity).toFixed(2)}
        `;
        cartItems.appendChild(cartItemElement);
        total += item.product.price * item.quantity;
    });

    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

// Checkout button action
document.getElementById('checkoutBtn').addEventListener('click', function () {
    if (cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Checkout successful!');
        cart = [];
        updateCart();
    }
});