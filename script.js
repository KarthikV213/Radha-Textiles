let products = [
  {
    id: 1,
    name: "White Khadi Cotton Kurti",
    price: 799,
    size: ["S","M","L","XL","XXL"],
    rating: 4.2,
    image: "https://via.placeholder.com/300x350"
  },
  {
    id: 2,
    name: "Elegant Silk Saree",
    price: 1299,
    size: ["Free Size"],
    rating: 4.5,
    image: "https://via.placeholder.com/300x350"
  }
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

function displayProducts() {
  const container = document.getElementById("productContainer");
  container.innerHTML = "";

  products.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>⭐ ${product.rating}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
      </div>
    `;
  });
}

function addToCart(id){
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to Cart");
}

function addToWishlist(id){
  wishlist.push(id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
  alert("Added to Wishlist");
}

function searchProduct(){
  const value = document.getElementById("search").value.toLowerCase();
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  document.getElementById("productContainer").innerHTML = "";
  filtered.forEach(product=>{
    document.getElementById("productContainer").innerHTML += `
      <div class="product">
        <img src="${product.image}">
        <h3>${product.name}</h3>
        <p>₹${product.price}</p>
        <p>⭐ ${product.rating}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
        <button onclick="addToWishlist(${product.id})">❤️ Wishlist</button>
      </div>
    `;
  });
}

function openProfile(){
  document.getElementById("profileModal").style.display = "block";
}

function closeProfile(){
  document.getElementById("profileModal").style.display = "none";
}

function saveDetails(){
  const upi = document.getElementById("upi").value;
  const bank = document.getElementById("bank").value;

  localStorage.setItem("UPI", upi);
  localStorage.setItem("Bank", bank);

  alert("Details Saved");
}

displayProducts();
