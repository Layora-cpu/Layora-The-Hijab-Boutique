// Layora Hijabs - Master App Script

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAILzvgRfJjRPY04d7G0KAz5KtoNPJDBjkpw4xVMNbgDSQMbRDmsLswHZX76keoZRW/exec";
const PRIMARY_WA_NUMBER = "916364254977";

let allLoadedProducts = [];
let cart = [];

// Toggle Slide-Out Cart Drawer & Overlay
function toggleCart() {
  const modal = document.getElementById("cartModal");
  const overlay = document.getElementById("cartOverlay");

  if (modal) modal.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// Add Item to Cart
function addToCart(title, price) {
  cart.push({ title, price });
  updateCartUI();
  
  // Auto-open cart drawer when adding item
  const modal = document.getElementById("cartModal");
  if (modal && !modal.classList.contains("active")) {
    toggleCart();
  }
}

// Remove Item from Cart
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

// Update Cart Display & Totals
function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCountEl = document.getElementById("cart-count");

  if (cartCountEl) cartCountEl.innerText = cart.length;

  if (cartList) {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartList.innerHTML = "<li style='text-align: center; color: #888; padding: 20px 0;'>Your bag is empty.</li>";
    } else {
      cart.forEach((item, index) => {
        total += item.price;
        cartList.innerHTML += `
          <li style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #eee;">
            <div>
              <div style="font-weight: 600; font-size: 14px; color: #333;">${item.title}</div>
              <div style="color: #8C6D58; font-size: 13px;">₹${item.price.toFixed(2)}</div>
            </div>
            <button onclick="removeFromCart(${index})" style="background: none; border: none; color: #d9534f; cursor: pointer; font-size: 18px; font-weight: bold;">&times;</button>
          </li>
        `;
      });
    }

    if (cartTotal) cartTotal.innerText = `₹${total.toFixed(2)}`;
  }
}

// WhatsApp Multi-Item Checkout
function checkout() {
  if (cart.length === 0) {
    alert("Your shopping bag is empty!");
    return;
  }

  let message = "Hello Layora Hijabs! I would like to place an order for:\n\n";
  let total = 0;

  cart.forEach((item, i) => {
    message += `${i + 1}. ${item.title} - ₹${item.price.toFixed(2)}\n`;
    total += item.price;
  });

  message += `\n*Total Amount:* ₹${total.toFixed(2)}\n\nPlease confirm availability and payment details.`;

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

  products.forEach(item => {
    const title = item.title || item.Title || "Hijab Product";
    const priceVal = parseFloat(item.price || item.Price) || 0;
    const imageUrl = item.imageurl || item.Imageurl || "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=500&q=80";

    const waMessage = encodeURIComponent(`Hello Layora Hijabs! I am interested in ordering:\n\n*Product:* ${title}\n*Price:* ₹${priceVal}\n\nPlease confirm availability.`);
    const waLink = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${waMessage}`;

    grid.innerHTML += `
      <div class="product-card">
        <img src="${imageUrl}" alt="${title}">
        <h3>${title}</h3>
        <p class="price">₹${priceVal.toFixed(2)}</p>
        <div style="display: flex; gap: 8px; flex-direction: column; margin-top: 10px;">
          <button class="add-to-cart-btn" onclick="addToCart('${title.replace(/'/g, "\\'")}', ${priceVal})">Add to Cart</button>
          <a href="${waLink}" target="_blank" style="background-color: #25D366; color: white; text-align: center; padding: 8px 12px; border-radius: 4px; text-decoration: none; font-weight: bold; font-size: 13px;">Order on WhatsApp</a>
        </div>
      </div>
    `;
  });
}

// Category Filtering from Google Sheet
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

// Real-Time Search Function
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
