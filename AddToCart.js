// Get all the add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get product information from the button's data attributes
        const productName = button.getAttribute('data-name');
        const productPrice = parseFloat(button.getAttribute('data-price'));

        // Get the current cart items from localStorage
        let cartItems = localStorage.getItem('cartItems');
        cartItems = cartItems ? JSON.parse(cartItems) : [];

        // Add the new item to the cart
        cartItems.push({ name: productName, price: productPrice });

        // Update the cart items in localStorage
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Optionally, update the cart count or display a message
        alert('Item added to cart!');
    });
});
