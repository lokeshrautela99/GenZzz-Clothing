let dropdown = document.getElementById("categories");
let Nav_links = document.getElementById("lower_cat_div");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
let navLinks_display = 0;
dropdown.addEventListener("click", function () {
  if (navLinks_display == 0) {
    Nav_links.style.display = "block";
    hide.style.display = "block";
    show.style.display = "none";
    navLinks_display = 1;
  } else {
    Nav_links.style.display = "none";
    show.style.display = "block";
    hide.style.display = "none";
    navLinks_display = 0;
  }
});

let btn = document.getElementById("burger_menu");
let slider = document.getElementById("slider");
let closed = document.getElementById("closed");


btn.addEventListener("click", function () {
  slider.style.width = "90%";
  slider.style.display = "block";

});

closed.addEventListener("click", function () {
  slider.style.width = "0px";
  slider.style.display = "none";
});

let cartCount = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("counter").innerText = cartCount.length;

let addFavourites = JSON.parse(localStorage.getItem("wishlist")) || []
if( addFavourites.length == 0 ){
  document.getElementById("heartlogo").src = "./images/Navbar/heart.svg"
}
else{
  document.getElementById("heartlogo").src = "./images/Navbar/redHeart.png";

}

let accData = JSON.parse(localStorage.getItem("Login")) || [];
let flag = JSON.parse(localStorage.getItem("flag")) || [];

let loginDiv = document.getElementById("user_login");
let accDiv = document.getElementById("acc_login");
let sidebarName = document.getElementById("sidebarUserName");
let userBarAcc = document.getElementById("optAcc");
let userBarLogin = document.getElementById("optLogin");

if (flag === true) {
  loginDiv.style.display = "none";
  accDiv.style.display = "block";
  userBarLogin.style.display = "none";
  userBarAcc.style.display = "block";
  sidebarName.innerText = `${accData.firstname} ${accData.lastname}`;
  if(window.outerWidth<= 450){
    accDiv.style.display = "none";
  }
}

