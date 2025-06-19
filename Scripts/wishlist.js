import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let cartLS = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("price")) || 0;
let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || [];
let container = document.getElementById("wishlistProducts");

function renderDom(data) {
  container.innerHTML = null;
  data.forEach((ele, index) => {
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

    let addBtn = document.createElement("button");
    addBtn.innerText = "Add to cart";
    addBtn.onclick = () => {
      cartLS.push(ele);
      document.getElementById("counter").innerText = cartLS.length;
      localStorage.setItem("cart", JSON.stringify(cartLS));
      addBtn.innerText = "Added to cart";
      productPrice += Number(ele.price);
      localStorage.setItem("price", JSON.stringify(productPrice));
      remove(ele,index);
    };
    let removeBtn = document.createElement("img");
    removeBtn.src = "./images/Wishlist/delete.png";
    removeBtn.onclick = () => {
      remove(index);
    };

    let brandDlt = document.createElement("div");
    brandDlt.className = "items1";
    brandDlt.append(brand, removeBtn);
    product.append(image, brandDlt, title, price, addBtn);
    container.append(product);
  });
}
renderDom(addFavourites);

let remove = (index) => {
  let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || [];
  addFavourites.splice(index, 1);
  localStorage.setItem("wishlist", JSON.stringify(addFavourites));
  if (addFavourites.length == 0) {
    document.getElementById("heartlogo").src = "./images/Navbar/heart.svg";
  }
  renderDom(addFavourites);
};


document.getElementById("selectFav").addEventListener("click", () => {
  window.location.href = "index.html";
});
