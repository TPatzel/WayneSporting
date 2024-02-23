// Get the cart items from localStorage
let cartItems = localStorage.getItem('cartItems');
cartItems = cartItems ? JSON.parse(cartItems) : [];

// Get the <ul> element where the cart items will be displayed
const cartItemsElement = document.getElementById('cart-items');

// Clear any existing items in the cart
cartItemsElement.innerHTML = '';

// Display each cart item in the <ul> element
cartItems.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsElement.appendChild(li);
});
