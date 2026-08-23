const WHATSAPP_NUMBER = "916364254977";
const CART_KEY = "layora_cart_v1";

function money(value){return "₹" + Number(value).toLocaleString("en-IN");}
function getCart(){try{return JSON.parse(localStorage.getItem(CART_KEY)) || []}catch(e){return []}}
function saveCart(cart){localStorage.setItem(CART_KEY,JSON.stringify(cart)); updateHeaderCart();}
function cartCount(){return getCart().reduce((n,p)=>n+Number(p.qty||0),0)}
function cartTotal(){return getCart().reduce((n,p)=>n+(Number(p.price)*Number(p.qty||0)),0)}
function updateHeaderCart(){
 document.querySelectorAll("#headerCartCount").forEach(el=>el.textContent=cartCount());
 document.querySelectorAll("#currentYear").forEach(el=>el.textContent=new Date().getFullYear());
}

function productById(id){return (window.PRODUCTS||[]).find(p=>p.id===id)}
function placeholderHTML(p){
 return `<div class="product-placeholder"><div><span>LAYORA</span><small>${p.id}</small></div></div>`;
}
function imageHTML(p, cls="product-image"){
 return p.image ? `<img class="${cls}" src="${p.image}" alt="${p.name}" loading="lazy">` : placeholderHTML(p);
}
function productCard(p){
 return `<article class="product-card reveal">
   <a href="product.html?id=${encodeURIComponent(p.id)}">
     <div class="product-media">${imageHTML(p)}${p.featured?'<span class="product-badge">Featured</span>':''}
       <button class="quick-add" type="button" aria-label="Add ${p.name} to bag" data-quick-add="${p.id}">+</button>
     </div>
     <div class="product-meta">
       <div><h3>${p.name}</h3><p>${p.category}</p></div><span class="product-price">${money(p.price)}</span>
     </div>
   </a>
 </article>`;
}
function renderProducts(list,target){
 if(!target)return;
 target.innerHTML=list.map(productCard).join("");
 observeReveals();
 target.querySelectorAll("[data-quick-add]").forEach(btn=>{
   btn.addEventListener("click",e=>{
     e.preventDefault();e.stopPropagation();
     addToCart(btn.dataset.quickAdd,1,"");
   });
 });
}
function addToCart(id,qty=1,colour=""){
 const p=productById(id); if(!p)return;
 const cart=getCart();
 const key=id+"|"+colour;
 const existing=cart.find(x=>x.key===key);
 if(existing) existing.qty=Math.min(20,existing.qty+qty);
 else cart.push({key,id,name:p.name,price:p.price,qty,colour:colour||"Not selected"});
 saveCart(cart);
 toast(`${p.name} added to your bag`);
}
function changeCart(key,delta){
 const cart=getCart(); const item=cart.find(x=>x.key===key);
 if(!item)return;
 item.qty+=delta;
 if(item.qty<=0) cart.splice(cart.indexOf(item),1);
 saveCart(cart); renderCart();
}
function removeCart(key){saveCart(getCart().filter(x=>x.key!==key));renderCart();}
function renderCart(){
 const items=document.getElementById("cartItems"), empty=document.getElementById("emptyCart"), content=document.getElementById("cartContent");
 if(!items)return;
 const cart=getCart();
 if(!cart.length){content?.classList.add("hidden");empty?.classList.remove("hidden");return}
 content?.classList.remove("hidden");empty?.classList.add("hidden");
 items.innerHTML=cart.map(item=>`
 <div class="cart-item">
  <div class="cart-item-image">L</div>
  <div><h3>${item.name}</h3><p>Colour: ${item.colour}</p><strong>${money(item.price)}</strong></div>
  <div class="cart-item-actions">
   <div class="mini-qty"><button type="button" data-cart-minus="${item.key}">−</button><span>${item.qty}</span><button type="button" data-cart-plus="${item.key}">+</button></div>
   <button class="remove-item" type="button" data-cart-remove="${item.key}">Remove</button>
  </div>
 </div>`).join("");
 document.getElementById("cartItemCount").textContent=`${cartCount()} item${cartCount()===1?"":"s"}`;
 document.getElementById("cartSubtotal").textContent=money(cartTotal());
 document.getElementById("cartTotal").textContent=money(cartTotal());
 items.querySelectorAll("[data-cart-minus]").forEach(b=>b.onclick=()=>changeCart(b.dataset.cartMinus,-1));
 items.querySelectorAll("[data-cart-plus]").forEach(b=>b.onclick=()=>changeCart(b.dataset.cartPlus,1));
 items.querySelectorAll("[data-cart-remove]").forEach(b=>b.onclick=()=>removeCart(b.dataset.cartRemove));
}
function renderCheckout(){
 const target=document.getElementById("checkoutItems");if(!target)return;
 const cart=getCart();
 target.innerHTML=cart.length?cart.map(i=>`<div class="checkout-item"><div>${i.name}<small>${i.qty} × ${money(i.price)} • ${i.colour}</small></div><strong>${money(i.price*i.qty)}</strong></div>`).join(""):`<p class="detail-description">Your bag is empty.</p>`;
 const total=document.getElementById("checkoutTotal");if(total)total.textContent=money(cartTotal());
}
function buildWhatsAppMessage(data){
 const lines=["*LAYORA HIJABS — NEW ORDER*","","*Customer details*",
 `Name: ${data.name}`,`Mobile: ${data.phone}`,`Address: ${data.address}`,`City: ${data.city}`,`State: ${data.state}`,`Pincode: ${data.pincode}`];
 if(data.note)lines.push(`Note: ${data.note}`);
 lines.push("","*Order*");
 getCart().forEach((i,n)=>lines.push(`${n+1}. ${i.name} × ${i.qty} — ${money(i.price*i.qty)}\n   Colour: ${i.colour}`));
 lines.push("","*Total: "+money(cartTotal())+"*","","Please confirm availability and delivery details.");
 return lines.join("\n");
}
function initCheckout(){
 const form=document.getElementById("checkoutForm");if(!form)return;
 if(!getCart().length){toast("Your bag is empty");return}
 form.addEventListener("submit",e=>{
  e.preventDefault();
  const ids=["customerName","customerPhone","customerPincode","customerAddress","customerCity","customerState"];
  let valid=true;
  ids.forEach(id=>{
   const el=document.getElementById(id), err=document.querySelector(`[data-error-for="${id}"]`);
   if(!el.value.trim() || (id==="customerPhone"&&!/^\d{10}$/.test(el.value.trim())) || (id==="customerPincode"&&!/^\d{6}$/.test(el.value.trim()))){
    valid=false;if(err)err.textContent=id==="customerPhone"?"Enter a valid 10-digit number.":id==="customerPincode"?"Enter a valid 6-digit pincode.":"This field is required.";
   }else if(err)err.textContent="";
  });
  if(!valid)return;
  const data={name:customerName.value.trim(),phone:customerPhone.value.trim(),pincode:customerPincode.value.trim(),address:customerAddress.value.trim(),city:customerCity.value.trim(),state:customerState.value.trim(),note:customerNote.value.trim()};
  const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage(data))}`;
  window.open(url,"_blank","noopener");
 });
}
function initCollections(){
 const target=document.getElementById("collectionProducts");if(!target)return;
 let list=[...(window.PRODUCTS||[])], category=new URLSearchParams(location.search).get("category")||"all";
 const filters=document.querySelectorAll("[data-category]"),search=document.getElementById("productSearch"),sort=document.getElementById("sortProducts"),count=document.getElementById("productCount"),empty=document.getElementById("noProducts");
 function draw(){
  let out=[...list];if(category!=="all")out=out.filter(p=>p.category===category);
  const q=(search?.value||"").toLowerCase().trim();if(q)out=out.filter(p=>(p.name+" "+p.category+" "+p.description).toLowerCase().includes(q));
  const s=sort?.value;if(s==="price-low")out.sort((a,b)=>a.price-b.price);if(s==="price-high")out.sort((a,b)=>b.price-a.price);if(s==="name")out.sort((a,b)=>a.name.localeCompare(b.name));
  renderProducts(out,target);if(count)count.textContent=out.length;empty?.classList.toggle("hidden",out.length!==0);
 }
 filters.forEach(f=>f.addEventListener("click",()=>{category=f.dataset.category;filters.forEach(x=>x.classList.toggle("active",x===f));draw()}));
 search?.addEventListener("input",draw);sort?.addEventListener("change",draw);
 filters.forEach(f=>f.classList.toggle("active",f.dataset.category===category));draw();
}
function initHome(){const target=document.getElementById("featuredProducts");if(target)renderProducts((window.PRODUCTS||[]).filter(p=>p.featured).slice(0,8),target)}
function initProduct(){
 const target=document.getElementById("productDetail");if(!target)return;
 const id=new URLSearchParams(location.search).get("id") || PRODUCTS[0]?.id; const p=productById(id);
 if(!p){target.innerHTML="<div class='empty-state'><h3>Product not found</h3><a class='btn btn-primary' href='collections.html'>Back to collection</a></div>";return}
 document.title=`${p.name} | Layora Hijabs`;breadcrumbName.textContent=p.name;productName.textContent=p.name;productCategory.textContent=(p.category+" collection").toUpperCase();productPrice.textContent=money(p.price);productDescription.textContent=p.description;
 productImage.innerHTML=p.image?`<img class="product-image" src="${p.image}" alt="${p.name}">`:`<span>LAYORA</span><small>${p.id}</small>`;
 colourOptions.innerHTML=[...p.colours].map(c=>`<button class="colour-option" type="button" data-colour="${c}">${c}</button>`).join("");
 let selected="";
 colourOptions.querySelectorAll(".colour-option").forEach(b=>b.onclick=()=>{selected=b.dataset.colour;selectedColourLabel.textContent=selected;b.classList.toggle("selected",true);colourOptions.querySelectorAll(".colour-option").forEach(x=>x!==b&&x.classList.remove("selected"));customColourWrap.classList.toggle("hidden",selected!=="Other")});
 document.querySelectorAll("[data-qty-action]").forEach(b=>b.onclick=()=>{let n=Number(productQuantity.value);n=Math.max(1,Math.min(20,n+(b.dataset.qtyAction==="plus"?1:-1)));productQuantity.value=n});
 addToCartButton.onclick=()=>addToCart(p.id,Number(productQuantity.value),selected==="Other"?(customColour.value.trim()||"Other"):selected);
 directWhatsAppButton.onclick=e=>{
  e.preventDefault();const qty=Number(productQuantity.value);const colour=selected==="Other"?(customColour.value.trim()||"Other"):(selected||"Not selected");
  const msg=`*LAYORA PRODUCT ENQUIRY*\n\nProduct: ${p.name}\nQuantity: ${qty}\nColour: ${colour}\nPrice: ${money(p.price*qty)}\n\nHi Layora, I would like to order/check availability for this product.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,"_blank","noopener");
 };
 const related=(PRODUCTS||[]).filter(x=>x.id!==p.id&&x.category===p.category).slice(0,4);renderProducts(related.length?related:PRODUCTS.filter(x=>x.id!==p.id).slice(0,4),document.getElementById("relatedProducts"));
}
function setupNav(){
 const toggle=document.querySelector(".nav-toggle"),links=document.querySelector(".nav-links");if(toggle&&links)toggle.onclick=()=>{const open=links.classList.toggle("open");toggle.setAttribute("aria-expanded",open)};
}
function observeReveals(){
 const els=document.querySelectorAll(".reveal:not(.visible)");const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");io.unobserve(e.target)}}),{threshold:.08});els.forEach(e=>io.observe(e));
}
function toast(message){let t=document.getElementById("layoraToast");if(!t){t=document.createElement("div");t.id="layoraToast";t.style.cssText="position:fixed;left:50%;bottom:25px;transform:translate(-50%,20px);background:#302426;color:#fff;padding:13px 18px;border-radius:99px;font:11px DM Sans,sans-serif;z-index:999;opacity:0;transition:.3s;box-shadow:0 12px 30px #0003";document.body.appendChild(t)}t.textContent=message;t.style.opacity=1;t.style.transform="translate(-50%,0)";clearTimeout(window._layoraToast);window._layoraToast=setTimeout(()=>{t.style.opacity=0;t.style.transform="translate(-50%,20px)"},2200)}
document.addEventListener("DOMContentLoaded",()=>{updateHeaderCart();setupNav();observeReveals();initHome();initCollections();initProduct();renderCart();renderCheckout();initCheckout()});
