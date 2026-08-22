// Layora Hijabs - Main App Script with Item Quantities

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAILzvgRfJjRPY04d7G0KAz5KtoNPJDBjkpw4xVMNbgDSQMbRDmsLswHZX76keoZRW/exec";
const PRIMARY_WA_NUMBER = "916364254977"; 

let allLoadedProducts = []; 
let cart = []; // Array of { id, title, price, quantity }

// Cart Overlay & Modal Toggle
function toggleCart() {
  const modal = document.getElementById("cartModal");
  const overlay = document.getElementById("cartOverlay");

  if (modal) modal.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// Add Item or Increment Quantity
function addToCart(id, title, price) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, title, price, quantity: 1 });
  }

  updateCartUI();
}

// Update Specific Item Quantity (+ or -)
function updateQuantity(id, change) {
  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;

    // Remove item if quantity drops to 0 or below
    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }

  updateCartUI();
}

// Render Cart UI & Calculate Totals
function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");

  // Calculate total items count
  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (cartCount) cartCount.innerText = totalItemCount;

  // Render Cart Drawer Content
  if (cartList) {
    cartList.innerHTML = "";
    let grandTotal = 0;

    if (cart.length === 0) {
      cartList.innerHTML = "<li style='text-align: center; color: #888; padding: 20px;'>Your bag is empty.</li>";
    } else {
      cart.forEach((item) => {
        const itemSubtotal = item.price * item.quantity;
        grandTotal += itemSubtotal;

        cartList.innerHTML += `
          <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
            <div style="flex: 1; padding-right: 10px;">
              <div style="font-weight: 600; font-size: 14px;">${item.title}</div>
              <div style="color: #8C6D58; font-size: 13px;">₹${item.price.toFixed(2)} × ${item.quantity} = ₹${itemSubtotal.toFixed(2)}</div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 6px;">
              <button onclick="updateQuantity('${item.id}', -1)" style="background: #eee; border: none; width: 24px; height: 24px; border-radius: 4px; font-weight: bold; cursor: pointer;">-</button>
              <span style="font-weight: 600; font-size: 14px; min-width: 18px; text-align: center;">${item.quantity}</span>
              <button onclick="updateQuantity('${item.id}', 1)" style="background: #eee; border: none; width: 24px; height: 24px; border-radius: 4px; font-weight: bold; cursor: pointer;">+</button>
            </div>
          </li>
        `;
      });
    }

    if (cartTotal) {
      cartTotal.innerText = `₹${grandTotal.toFixed(2)}`;
    }
  }
}

// Generate WhatsApp Order Message with Quantities
function checkout() {
  if (cart.length === 0) {
    alert("Your shopping bag is empty!");
    return;
  }

  let message = "Hello Layora Hijabs! I would like to place an order for:\n\n";
  let grandTotal = 0;

  cart.forEach((item, i) => {
    const itemSubtotal = item.price * item.quantity;
    message += `${i + 1}. *${item.title}*\n   Quantity: ${item.quantity} | Price: ₹${itemSubtotal.toFixed(2)}\n\n`;
    grandTotal += itemSubtotal;
  });

  message += `*Grand Total:* ₹${grandTotal.toFixed(2)}\n\nPlease confirm availability and payment options.`;

  const waUrl = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');
}

// Render Products Grid
function renderGrid(products) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "";

  if (!products || products.length === 0) {
    grid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>No matching products found.</p>";
    return;
  }

  products.forEach((item, index) => {
    const itemId = item.id || `prod_${index}`;
    const title = item.title || item.Title || "Hijab Product";
    const priceVal = parseFloat(item.price || item.Price) || 0;
    const imageUrl = item.imageurl || item.Imageurl || "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80";

    const waMessage = encodeURIComponent(`Hello Layora Hijabs! I am interested in ordering:\n\n*Product:* ${title}\n*Price:* ₹${priceVal}\n\nPlease confirm availability.`);
    const waLink = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${waMessage}`;

    // Clean single quotes in titles for inline onclick functions
    const safeTitle = title.replace(/'/g, "\\'");

    grid.innerHTML += `
      <div class="product-card">
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p class="price">₹${priceVal.toFixed(2)}</p>
        <div style="display: flex; gap: 8px; flex-direction: column; margin-top: 10px;">
          <button class="add-to-cart-btn" onclick="addToCart('${itemId}', '${safeTitle}', ${priceVal})">Add to Cart</button>
          <a href="${waLink}" target="_blank" style="background-color: #25D366; color: white; text-align: center; padding: 8px 12px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 13px;">Order on WhatsApp</a>
        </div>
      </div>
    `;
  });
}

// Fetch Inventory & Filter
async function filterProducts(category) {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";

  const buttons = document.querySelectorAll("#category-filters .filter-btn");
  buttons.forEach(btn => {
    if (btn.innerText.trim().toLowerCase() === category.toLowerCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  grid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>Loading collection...</p>";

  try {
    const response = await fetch(`${GOOGLE_SCRIPT_URL}?category=${encodeURIComponent(category)}`, {
      method: "GET",
      redirect: "follow"
    });

    const result = await response.json();
    allLoadedProducts = result.data || [];
    renderGrid(allLoadedProducts);

  } catch (err) {
    console.error("Error fetching data:", err);
    grid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>Unable to load live inventory. Please refresh the page.</p>";
  }
}

// Real-Time Search
function searchProducts() {
  const query = document.getElementById("search-input").value.toLowerCase().trim();
  const filtered = allLoadedProducts.filter(item => {
    const title = (item.title || item.Title || "").toLowerCase();
    return title.includes(query);
  });
  renderGrid(filtered);
}

document.addEventListener("DOMContentLoaded", function() {
  filterProducts("All");
});
