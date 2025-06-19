import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let productItem = JSON.parse(localStorage.getItem("products")) || [];
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("price")) || 0;
let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || [];

let productCont = document.getElementById("productContainer");
function renderProduct(ele, index) {
  productCont.innerHTML = null;

  let product = document.createElement("div");
  product.className = "items";

  let image = document.createElement("img");
  image.src = `${ele.img}`;

  let brand = document.createElement("h3");
  brand.innerText = `${ele.brand}`;

  let title = document.createElement("h2");
  title.innerText = `${ele.title}`;

  let price = document.createElement("p");
  price.innerText = `Price: ₹${ele.price}`;

  let addBtn = document.createElement("button");
  addBtn.innerText = "Add to cart";
  addBtn.onclick = () => {
    cartData.push(ele);
    document.getElementById("counter").innerText = cartData.length;
    localStorage.setItem("cart", JSON.stringify(cartData));
    addBtn.innerHTML = "Added to cart";
    productPrice += Number(ele.price);
    localStorage.setItem("price", JSON.stringify(productPrice));
  };

  let addFav = document.createElement("img");
  addFav.src = "./images/Navbar/heart.svg";
  let favCounter = 0;
  addFav.onclick = () => {
    if (favCounter == 0) {
      addFavourites.push(ele);
      localStorage.setItem("wishlist", JSON.stringify(addFavourites));
      addFav.src = "./images/Navbar/redHeart.png";
      document.getElementById("heartlogo").src = "./images/Navbar/redHeart.png";
      favCounter = 1;
    }
    else {
      addFavourites.pop(ele);
      // remove(index);
      addFav.src = "./images/Navbar/heart.svg";
      if(addFavourites.length === 0){
        document.getElementById("heartlogo").src =
        "./images/Navbar/heart.svg";
      }
      else{
        document.getElementById("heartlogo").src =
        "./images/Navbar/redHeart.png";
      }
        localStorage.setItem("wishlist", JSON.stringify(addFavourites));
      favCounter = 0;
    }
    
  };
  let remove = (index) => {
    let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || [];
    addFavourites.splice(index, 1);
    localStorage.setItem("wishlist", JSON.stringify(addFavourites));
    if (addFavourites.length == 0) {
      document.getElementById("heartlogo").src = "./images/Navbar/heart.svg";
    }
  };

  let items = document.createElement("div");
  items.className = "items1";
  let span = document.createElement("div");
  span.className = "heartImg";
  span.append(brand, addFav);
  items.append(span, title, price, addBtn);
  product.append(image, items);
  productCont.append(product);
}
renderProduct(productItem);

// Recommended Data Function --->
let recommendedData = [];
Object.values(productData).forEach((ele) => {
  recommendedData.push(...ele);
});

let otherData = document.getElementById("recommendedData");
const renderRecommendedData = (data) => {
  otherData.innerHTML = null;
  data.forEach((ele) => {
    let product = document.createElement("div");
    product.className = "otherItems";

    let image = document.createElement("img");
    image.src = ele.img;
    image.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(ele));
      window.location.href = "productPage.html";
    });

    let brand = document.createElement("h3");
    brand.innerText = `${ele.brand}`;

    let title = document.createElement("h2");
    title.innerText = ele.title;

    let price = document.createElement("b");
    price.innerText = `Price: ₹${ele.price}`;

    let addBtn = document.createElement("button");
    addBtn.innerHTML = "Add to cart";
    addBtn.onclick = () => {
      cartData.push(ele);
      document.getElementById("counter").innerText = cartData.length;
      localStorage.setItem("cart", JSON.stringify(cartData));
      addBtn.innerHTML = "Added to cart";
      productPrice += Number(ele.price);
      localStorage.setItem("price", JSON.stringify(productPrice));
    };
    product.append(image, brand, title, price, addBtn);
    otherData.append(product);
  });
};
renderRecommendedData(recommendedData);

// Search function -->
let search = document.getElementById("query");
let searchBtn = document
  .getElementById("search_btn")
  .addEventListener("click", searchFun);

function searchFun() {
  let searchVal = search.value;
  let searchedItemsDataArr = [];
  Object.values(productData).forEach((categoryArray) => {
    searchedItemsDataArr.push(
      ...categoryArray.filter(
        (product) =>
          product.title.toLowerCase().includes(searchVal.toLowerCase()) ||
          product.category.toLowerCase().includes(searchVal.toLowerCase())
      )
    );
  });

  if (searchedItemsDataArr.length === 0 || searchVal === "") {
    document.getElementById("searchAlert").style.display = "block";
    setTimeout(() => {
      document.getElementById("searchAlert").style.display = "none";
    }, 1000);
  } else {
    renderRecommendedData (searchedItemsDataArr);
  }
}

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchFun();
  }
});

// let mensData = productData.menClothingData
// let kidsData = productData.kidClothingData
// let womensData = productData.womenClothingData;

// if (productItem.id <= 48) {
//   renderRecommendedData(mensData);
// }
// if (productItem.id > 49 && productItem.id >= 96) {
//   renderRecommendedData(kidsData);
// }
// if (productItem.id > 97 && productItem.id >= 144) {
//   renderRecommendedData(womensData);
// }