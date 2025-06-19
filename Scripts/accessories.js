import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

const slideShow = () => {
  const arr = [
    "./images/ProductData/Accessories/accessories's slider/slider1.jpg",
    "./images/ProductData/Accessories/accessories's slider/slider3.jpg",
  ];

  let i = 0;
  let slider_div = document.getElementById("topR");
  let img = document.createElement("img");
  img.src = arr[0];

  slider_div.append(img);
  i = i + 1;
  setInterval(() => {
    if (i == arr.length) {
      i = 0;
    }
    img.src = arr[i];
    i = i + 1;
    slider_div.append(img);
  }, 2000);
};
slideShow();

// This data comes from the data.js -->
let accessoriesDataArr = productData.accessories;
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let productPrice = JSON.parse(localStorage.getItem("price")) || 0;
let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || [];
let filter = document.getElementById("filter");
let paginationDOM = document.getElementById("pagination");
let product_per_page = 12;
let currentPageState = 1;
let pages = Math.ceil(accessoriesDataArr.length / product_per_page);

let accessoriesData = document.getElementById("dataDiv");
const renderAccessoriesData = (data) => {
    accessoriesData.innerHTML = null;

  data.forEach((ele, index) => {
    let product = document.createElement("div");
    product.className = "items";

    let image = document.createElement("img");
    image.src = ele.img;
    image.addEventListener("click", function () {
      newPage(ele);
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
      addBtn.innerText = "Added to cart";
      productPrice += Number(ele.price);
      localStorage.setItem("price", JSON.stringify(productPrice));
    };

    let addFav = document.createElement("img");
    addFav.src = "./images/Navbar/heart.svg";
    let favCounter = 0;
    addFav.onclick = () => {
      if (favCounter == 0) {
        addFavourites.push(ele);
        addFav.src = "./images/Navbar/redHeart.png";
        document.getElementById("heartlogo").src =
        "./images/Navbar/redHeart.png";
        localStorage.setItem("wishlist", JSON.stringify(addFavourites));
        favCounter = 1;
      } else {
        addFavourites.splice(index,ele.id);
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

    let heartDiv = document.createElement("div");
    heartDiv.className = "heartDiv";
    heartDiv.append(brand, addFav);
    product.append(image, heartDiv, title, price, addBtn);
    accessoriesData.append(product);
  });
};
renderAccessoriesData(accessoriesDataArr);

const newPage = (ele) => {
  localStorage.setItem("products", JSON.stringify(ele));
  window.location.href = "productPage.html";
};

document.getElementById("allProducts").addEventListener("click", () => {
  return renderAccessoriesData(accessoriesDataArr);
});

// Sorting Function --->
document.getElementById("sortLH").addEventListener("click", function () {
  let sort = accessoriesDataArr.sort((a, b) => a.price - b.price);
  renderAccessoriesData(sort);
});

document.getElementById("sortHL").addEventListener("click", function () {
  let sort = accessoriesDataArr.sort((a, b) => b.price - a.price);
  renderAccessoriesData(sort);
});

// filter function --->
filter.addEventListener("change", function () {
  if (filter.value == 0 || filter.value == null) {
    return renderAccessoriesData(accessoriesDataArr);
  } else {
    let filterAccessoriesData = accessoriesDataArr.filter(function (ele) {
      return ele.category === filter.value;
    });
    renderAccessoriesData(filterAccessoriesData);
  }
});

// Search function
let search = document.getElementById("query");
let searchedDiv = document.getElementById("searchedDiv");
let searchBtn = document
  .getElementById("search_btn")
  .addEventListener("click", searchFun);

function searchFun() {
  let searchVal = search.value;
  let searchedAccessoriesData = accessoriesDataArr.filter(function (ele) {
    return (
      ele.category.toLowerCase().includes(searchVal.toLowerCase()) ||
      ele.title.toLowerCase().includes(searchVal.toLowerCase())
    );
  });

  if (searchedAccessoriesData.length == 0 || searchVal == "") {
    document.getElementById("searchAlert").style.display = "block";
    setTimeout(() => {
      document.getElementById("searchAlert").style.display = "none";
    }, 1000);
  } else {
    renderAccessoriesData(searchedAccessoriesData);
  }
}

search.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    searchFun();
  }
});

// Pagination function --->
function renderPagination(pages) {
  for (let i = 1; i <= pages; i++) {
    let btn = document.createElement("button");
    btn.innerText = i;
    btn.addEventListener("click", function () {
      currentPageState = i;
      activePage(currentPageState);
      paginatedTable(accessoriesDataArr, currentPageState, product_per_page);
    });
    paginationDOM.append(btn);
  }
}
renderPagination(pages);

function paginatedTable(data, page, perPage) {
  let start = perPage * (page - 1);
  let end = perPage * page;
  let splited = data.slice(start, end);
  renderAccessoriesData(splited);
}
paginatedTable(accessoriesDataArr, currentPageState, product_per_page);

function activePage(currentPageState) {
  let buttons = document.querySelectorAll("#pagination>button");
  buttons.forEach(function (el, i) {
    if (i === currentPageState - 1) {
      el.style.width = "30px";
      el.style.backgroundColor = "black";
      el.style.color = "white";
      el.style.fontSize = "medium";
      el.style.marginRight = "10px";
    } else {
      el.style.backgroundColor = "white";
      el.style.color = "black";
      el.style.marginRight = "10px";
    }
  });
}
activePage(currentPageState);

// filter.addEventListener("change", function () {
//   currentPageState = 1;
//   activePage(currentPageState);
//   if (filter.value === "") {
//     paginatedTable(accessoriesDataArr, currentPageState, product_per_page);
//   } else {
//     let productDataMen = accessoriesDataArr.map(function (el) {
//       return el;
//     });
//     let sorted = productDataMen.sort(function (a, b) {
//       if (filter.value === "sortLH") {
//         return a.price - b.price;
//       } else if (filter.value === "sortHL") {
//         return b.price - a.price;
//       }
//     });
//     paginatedTable(sorted, currentPageState, product_per_page);
//   }
// });
