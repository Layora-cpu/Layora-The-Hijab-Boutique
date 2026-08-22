// Layora Hijabs - Complete Master JavaScript File

const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzAILzvgRfJjRPY04d7G0KAz5KtoNPJDBjkpw4xVMNbgDSQMbRDmsLswHZX76keoZRW/exec";
const PRIMARY_WA_NUMBER = "916364254977"; 

let allLoadedProducts = []; 
let cart = []; 
let isDataLoaded = false;

// --- CART DRAWER TOGGLE ---
function toggleCart() {
  const modal = document.getElementById("cartModal");
  const overlay = document.getElementById("cartOverlay");

  if (modal) modal.classList.toggle("active");
  if (overlay) overlay.classList.toggle("active");
}

// --- TOAST NOTIFICATION ---
function showToast(message) {
  const toast = document.getElementById("toast-notification");
  if (toast) {
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 2500);
  }
}

// --- CART MANAGEMENT ---
function addToCart(id, title, price) {
  const existingItem = cart.find(item => item.id === id);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ id, title, price, quantity: 1 });
  }

  showToast(`Added "${title}" to bag!`);
  updateCartUI();
}

function updateQuantity(id, change) {
  const itemIndex = cart.findIndex(item => item.id === id);

  if (itemIndex > -1) {
    cart[itemIndex].quantity += change;

    if (cart[itemIndex].quantity <= 0) {
      cart.splice(itemIndex, 1);
    }
  }

  updateCartUI();
}

function updateCartUI() {
  const cartList = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  const cartCount = document.getElementById("cart-count");
  const mobileCount = document.getElementById("mobile-cart-count");

  const totalItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (cartCount) cartCount.innerText = totalItemCount;
  if (mobileCount) mobileCount.innerText = totalItemCount;

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

// --- CHECKOUT PROCESS ---
function checkout() {
  if (cart.length === 0) {
    alert("Your shopping bag is empty!");
    return;
  }

  const nameInput = document.getElementById("cust-name");
  const phoneInput = document.getElementById("cust-phone");
  const addressInput = document.getElementById("cust-address");

  const name = nameInput?.value.trim();
  const phone = phoneInput?.value.trim();
  const address = addressInput?.value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in your Name, Phone Number, and Delivery Address before checking out.");
    return;
  }

  let message = `*NEW ORDER - LAYORA HIJABS*\n\n`;
  message += `*Customer Details:*\n`;
  message += `• Name: ${name}\n`;
  message += `• Phone: ${phone}\n`;
  message += `• Address: ${address}\n\n`;

  message += `*Ordered Items:*\n`;
  let grandTotal = 0;

  cart.forEach((item, i) => {
    const itemSubtotal = item.price * item.quantity;
    message += `${i + 1}. *${item.title}*\n   Qty: ${item.quantity} | ₹${itemSubtotal.toFixed(2)}\n`;
    grandTotal += itemSubtotal;
  });

  message += `\n*Grand Total:* ₹${grandTotal.toFixed(2)}\n\nPlease confirm order acceptance and share payment details.`;

  const waUrl = `https://wa.me/${PRIMARY_WA_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  cart = [];
  updateCartUI();

  if (nameInput) nameInput.value = "";
  if (phoneInput) phoneInput.value = "";
  if (addressInput) addressInput.value = "";

  toggleCart();
  showToast("Order sent! Check WhatsApp to complete purchase.");
}

// --- PRODUCT GRID & SEARCH ---
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

// --- DATA FETCHING & CATEGORY FILTERING ---
async function fetchProductsFromSheet() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;

  grid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>Loading collection...</p>";

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "GET",
      redirect: "follow"
    });

    const result = await response.json();
    allLoadedProducts = result.data || [];
    isDataLoaded = true;

    renderGrid(allLoadedProducts);
  } catch (err) {
    console.error("Error fetching data:", err);
    grid.innerHTML = "<p style='text-align: center; grid-column: 1/-1;'>Unable to load live inventory. Please refresh the page.</p>";
  }
}

function filterProducts(category) {
  const buttons = document.querySelectorAll("#category-filters .filter-btn");
  buttons.forEach(btn => {
    if (btn.innerText.trim().toLowerCase() === category.toLowerCase()) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  if (!isDataLoaded) {
    fetchProductsFromSheet();
    return;
  }

  if (category.toLowerCase() === "all") {
    renderGrid(allLoadedProducts);
  } else {
    const filtered = allLoadedProducts.filter(item => {
      const itemCat = (item.category || item.Category || "").toLowerCase();
      return itemCat === category.toLowerCase();
    });
    renderGrid(filtered);
  }
}

// --- SEARCH FUNCTIONS ---
function handleSearchInput() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  
  if (clearBtn) {
    clearBtn.style.display = input.value.trim().length > 0 ? "block" : "none";
  }
  
  searchProducts();
}

function clearSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("clear-search-btn");
  
  if (input) input.value = "";
  if (clearBtn) clearBtn.style.display = "none";
  
  renderGrid(allLoadedProducts);
}

function searchProducts() {
  const input = document.getElementById("search-input");
  if (!input) return;

  const query = input.value.toLowerCase().trim();
  const filtered = allLoadedProducts.filter(item => {
    const title = (item.title || item.Title || "").toLowerCase();
    return title.includes(query);
  });

  renderGrid(filtered);
}

// --- INITIAL LOAD ---
document.addEventListener("DOMContentLoaded", function() {
  fetchProductsFromSheet();
});
