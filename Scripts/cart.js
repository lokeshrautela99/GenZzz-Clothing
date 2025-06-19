import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let totalPrice = document.getElementById("total");
totalPrice.innerHTML - null;
let discount = document.getElementById("discount");
discount.innerHTML = null;
let dealAmount = document.getElementById("finalAmount");
dealAmount.innerHTML - null;
let deliveryCharges = document.getElementById("deliveryCharges");
deliveryCharges.innerHTML = null;
let updateCartCount = document.getElementById("counter");
let container = document.getElementById("cartProducts");
let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("price")) || 0; 
let couponApplied  =  JSON.parse(localStorage.getItem("couponApplied")) || false;

function renderDom(data) {
  container.innerHTML = null;
  data.forEach(function (ele, index) {
    totalPrice.innerHTML = `₹ ${productPrice}`;
    dealAmount.innerHTML = ` ₹ ${productPrice}`;
    if (productPrice <= 1999) {
      deliveryCharges.innerHTML = `₹ ${149}`;
      dealAmount.innerHTML = `₹ ${productPrice + 149}`;
    } else if (productPrice > 1999) {
      deliveryCharges.innerHTML = "Free";
      deliveryCharges.style.color = "teal";
      deliveryCharges.style.fontWeight = "bold";
    }

    let product = document.createElement("div");
    product.className = "items";

    let image = document.createElement("img");
    image.src = ele.img;
    image.onclick = () => {
      localStorage.setItem("products", JSON.stringify(ele)) || [];
  window.location.href = "productPage.html";
    };

    let brand = document.createElement("h3");
    brand.innerText = ele.brand;

    let title = document.createElement("h2");
    title.innerText = ele.title;

    let price = document.createElement("b");
    price.innerText = `Price: ₹${ele.price}`;

    let removeBtn = document.createElement("img");
    removeBtn.src = "./images/Wishlist/delete.png";
    removeBtn.onclick = () => {
      remove(index, ele);
    };

    let brandDlt = document.createElement("div");
    brandDlt.className = "items1";
    brandDlt.append(brand, removeBtn);
    let items2 = document.createElement("div");
    items2.className = "items2";
    items2.append(brandDlt, title, price);
    product.append(image, items2);
    container.append(product);
  });
}
renderDom(cartLS);

// removeItem fun -->

let remove = (index, ele) => {
  let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
  cartLS.splice(index, 1);
  productPrice -= ele.price;
  totalPrice.innerHTML = `₹ ${productPrice}`;
  dealAmount.innerHTML = `₹ ${productPrice}`;
  if (productPrice == 0) {
    deliveryCharges.innerHTML = "";
    dealAmount.innerHTML = "";
    totalPrice.innerHTML = "";
    discount.innerHTML = "";
  } else if (productPrice <= 1999) {
    deliveryCharges.innerHTML = `₹ ${149}`;
    dealAmount.innerHTML = `₹ ${productPrice + 149}`;
  } else if (productPrice > 1999) {
    deliveryCharges.innerHTML = "Free";
    deliveryCharges.style.color = "teal";
    deliveryCharges.style.fontWeight = "bold";
  }
  window.localStorage.removeItem("couponApplied");
  window.localStorage.removeItem("cartTotal");
  window.localStorage.removeItem("discountAmount");
  discount.innerHTML = "";
  localStorage.setItem("price", JSON.stringify(productPrice));
  updateCartCount.innerText = cartLS.length;
  localStorage.setItem("cart", JSON.stringify(cartLS));
  renderDom(cartLS);
};


// Chekout Page And Cart Alert function -->
document.getElementById("checkout").addEventListener("click", () => {
  if (productPrice == 0) {
    let emptyAlert = document.getElementById("cartAlert");
    emptyAlert.style.display = "block";
    emptyAlert.innerHTML = "Your cart is empty please add item";
  } else {
    window.location.href = "checkout.html";
    emptyAlert.style.display = "none";
  }
});

  document.getElementById("doShopping").addEventListener("click", function () {
    window.location.href = "index.html";
  });


let couponAppliedBalance = JSON.parse(localStorage.getItem("cartTotal")) || 0;
let discountAmount = JSON.parse(localStorage.getItem("discountAmount")) || 0;
if(couponApplied === true && cartLS.length++){
  couponApplied === false
  window.localStorage.removeItem("couponApplied");
  window.localStorage.removeItem("cartTotal");
  window.localStorage.removeItem("discountAmount");
  discount.innerHTML = "";
}
if(couponApplied == true && couponAppliedBalance <= 1999 ){
dealAmount.innerHTML= `₹ ${couponAppliedBalance +149}` ;
discount.innerHTML = `-${discountAmount}`;
}
if(couponApplied == true  && couponAppliedBalance > 1999){
  dealAmount.innerHTML= `₹ ${couponAppliedBalance}`;
  discount.innerHTML = `-${discountAmount}`;
}
