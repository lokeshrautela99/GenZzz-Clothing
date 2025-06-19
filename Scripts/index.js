import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("price")) || 0;

// This data comes from Backend file name data.js -->
let menDataArr = productData.menClothingData;
let womenDataArr = productData.womenClothingData;
let kidDataArr = productData.kidsClothingData;
let accessoriesDataArr = productData.accessories;
let womenMain = document.getElementById("womenProduct");
let menMain = document.getElementById("menProduct");
let kidMain = document.getElementById("kidProduct");
let accessoriesMain = document.getElementById("accessoriesProduct");
let div = (ele) => {
  let product = document.createElement("div");
  product.className = "items";
  let searchProduct = document.createElement("div");
  searchProduct.className = "searchItems";
  let image = document.createElement("img");
  image.src = ele.img;
  image.addEventListener("click", function () {
    localStorage.setItem("products", JSON.stringify(ele));
    window.location.href = "productPage.html";
  });
  let brand = document.createElement("h3");
  brand.innerText = ele.brand;
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
  return product;
};
const renderWomenData = (data) => {
  womenMain.innerHTML = null;
  data.forEach((ele) => {
    womenMain.append(div(ele));
  });
}
renderWomenData(womenDataArr);

const renderMenData = (data) => {
  menMain.innerHTML = null;
  data.forEach((ele) => {
    menMain.append(div(ele));
  });
}
renderMenData(menDataArr);

const renderKidData = (data) => {
  kidMain.innerHTML = null;
  data.forEach((ele) => {
    kidMain.append(div(ele));
  });
}
renderKidData(kidDataArr);

const renderAccessoriesData = (data) => {
  accessoriesMain.innerHTML = null;
  data.forEach((ele) => {
    accessoriesMain.append(div(ele));
  });
}
renderAccessoriesData(accessoriesDataArr);

// Product slider Functionality --->

document.getElementById("womenSlideLeft").addEventListener("click", function () {
    sideScroll(womenMain, "left", 8, 860, 10);
  });
document.getElementById("womenSlideRight").addEventListener("click", function () {
    sideScroll(womenMain, "right", 8, 860, 10);
  });

document.getElementById("menSlideLeft").addEventListener("click", function () {
  sideScroll(menMain, "left", 18, 860, 10);
});
document.getElementById("menSlideRight").addEventListener("click", function () {
  sideScroll(menMain, "right", 18, 860, 10);
});

document.getElementById("kidSlideLeft").addEventListener("click", function () {
  sideScroll(kidMain, "left", 18, 860, 10);
});
document.getElementById("kidSlideRight").addEventListener("click", function () {
  sideScroll(kidMain, "right", 18, 860, 10);
});

document.getElementById("accessoriesSlideLeft").addEventListener("click", function () {
    sideScroll(accessoriesMain, "left", 18, 860, 10);
  });
document.getElementById("accessoriesSlideRight").addEventListener("click", function () {
    sideScroll(accessoriesMain, "right", 18, 860, 10);
  });

const sideScroll = (element, direction, speed, distance, step) => {
  let scrollAmount = 0;
  let slideTimer = setInterval(() => {
    if (direction === "left") {
      element.scrollLeft -= step;
    } else {
      element.scrollLeft += step;
    }
    scrollAmount += step;
    if (scrollAmount >= distance) {
      window.clearInterval(slideTimer);
    }
  }, speed);
};
// Product slider Functionality end here --->

// This Data comes from the Data.js  --->
let searchItems = document.getElementById("searchedItemsData");
const searchData = (data) => {
  searchItems.innerHTML = null;

  data.forEach((ele) => {
    let product = document.createElement("div");
    product.className = "searchItems";

    let image = document.createElement("img");
    image.src = ele.img;
    image.addEventListener("click", function () {
      localStorage.setItem("products", JSON.stringify(ele));
      window.location.href = "productPage.html";
    });
    let brand = document.createElement("h3");
    brand.innerText = ele.brand;

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
    searchItems.append(product);
  });
};

let search = document.getElementById("query");
let searchedDiv = document.getElementById("searchedDiv");
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
    searchedDiv.style.display = "none";
    document.getElementById("main").style.display = "block";
    return;
  } else {
    searchedDiv.style.display = "block";
    document.getElementById("main").style.display = "none";
    searchData(searchedItemsDataArr);
  }
}

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchFun();
  }
});
