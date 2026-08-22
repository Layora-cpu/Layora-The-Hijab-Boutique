// Global State
let cart = [];

// Toggle Shopping Cart Drawer Display
function toggleCart() {
  const modal = document.getElementById('cartModal');
  if (modal.style.display === 'block') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'block';
  }
}

// Add Item to Cart
function addToCart(productName, price) {
  // Check if item already exists in cart
  const existingItem = cart.find(item => item.name === productName);
  
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: 1
    });
  }

  updateCartUI();
  toggleCart(); // Automatically open cart drawer to show added item
}

// Remove Item from Cart
function removeFromCart(productName) {
  cart = cart.filter(item => item.name !== productName);
  updateCartUI();
}

// Update Cart Display & Calculations
function updateCartUI() {
  const cartCount = document.getElementById('cart-count');
  const cartItemsList = document.getElementById('cart-items');
  const subtotalEl = document.getElementById('cart-subtotal');
  const totalEl = document.getElementById('cart-total');

  // Calculate total items count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.innerText = totalItems;

  // Clear current UI list
  cartItemsList.innerHTML = '';

  if (cart.length === 0) {
    cartItemsList.innerHTML = '<li style="text-align: center; color: #706862; padding: 20px 0;">Your bag is currently empty.</li>';
    subtotalEl.innerText = '$0.00';
    totalEl.innerText = '$0.00';
    return;
  }

  let subtotal = 0;

  // Build items list
  cart.forEach(item => {
    const itemTotal = item.price * item.quantity;
    subtotal += itemTotal;

    const li = document.createElement('li');
    li.innerHTML = `
      <div>
        <strong>${item.name}</strong><br>
        <small>$${item.price.toFixed(2)} x ${item.quantity}</small>
      </div>
      <div>
        <span>$${itemTotal.toFixed(2)}</span>
        <button onclick="removeFromCart('${item.name}')" style="background:none; border:none; color: #8C6D58; margin-left: 8px; cursor:pointer;">&times;</button>
      </div>
    `;
    cartItemsList.appendChild(li);
  });

  // Subtotal output
  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;

  // Total with discounts and tax processing
  let finalTotal = calculateFinalPrice(subtotal);
  totalEl.innerText = `$${finalTotal.toFixed(2)}`;
}

// Price Calculator (Prepared for C++ WebAssembly integration in Step 4)
function calculateFinalPrice(subtotal) {
  const taxRate = 0.05; // 5% tax
  
  // 10% discount for purchases over $50
  let discount = subtotal >= 50 ? subtotal * 0.10 : 0;
  let discountedSubtotal = subtotal - discount;
  
  let total = discountedSubtotal + (discountedSubtotal * taxRate);
  return total;
}

// Simulated Checkout Action
function checkout() {
  if (cart.length === 0) {
    alert("Your shopping bag is empty!");
    return;
  }

  alert("Thank you for your order! This demo site complete. In a live setup, this routes directly to your payment gateway.");
  cart = [];
  updateCartUI();
  toggleCart();
}
