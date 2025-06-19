import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let total = JSON.parse(localStorage.getItem("price")) || 0;
let couponApplied = JSON.parse(localStorage.getItem("couponApplied")) || false;

if(total === 0){
  let priceAlert = document.getElementById("priceAlert")
  priceAlert.style.display = "block";
  priceAlert.innerHTML = "Your cart is empty, Coupon can not be applicable"
}


document.getElementById("coupon1").onclick = () => {
  if (total > 999 ) {
    if (couponApplied == true) {
      document.getElementById("applied1").innerHTML =
        "Only one coupon can be applied per payment";
    } else {
      let disc = 100;
      let bal = total - disc;
      let couponApplied = true;
      localStorage.setItem("couponApplied", JSON.stringify(couponApplied));
      document.getElementById(
        "applied1"
      ).innerHTML = (`Hurray! Coupon Applied. Your new cart total is ${bal}`);
      localStorage.setItem("cartTotal",JSON.stringify(bal));
      localStorage.setItem("discountAmount", JSON.stringify(disc));
    }
    setTimeout(() => {
        cartPage()
    }, 2000);
  } 
  else {
    document.getElementById("applied1").innerHTML =
      "This coupon is only applicable for amount more than Rs.999.";
  }
};

document.getElementById("coupon2").onclick = () => {
  if (total > 1999) {
    if (couponApplied == true) {
      document.getElementById("applied2").innerHTML =
        "Only one coupon can be applied per payment";
    } else {
      let disc = Math.round(total * 0.1);
      let bal = total - disc;
      let couponApplied = true;
      localStorage.setItem("couponApplied", JSON.stringify(couponApplied));
      document.getElementById(
        "applied2"
      ).innerHTML = `Hurray! Coupon Applied. Your new cart total is ${bal}`;
      localStorage.setItem("cartTotal",JSON.stringify(bal));
      localStorage.setItem("discountAmount", JSON.stringify(disc));
    }
    setTimeout(() => {
        cartPage()
    }, 2000);
    set
  }
   else {
    document.getElementById("applied2").innerHTML =
      "This coupon is only applicable for amount more than Rs.1999.";
  }
};

document.getElementById("coupon3").onclick = () => {
    if (total > 3000) {
      if (couponApplied == true) {
        document.getElementById("applied3").innerHTML =
          "Only one coupon can be applied per payment";
      } else {
        let disc = Math.round(total * 0.3);
        let bal = total - disc;
        let couponApplied = true;
        localStorage.setItem("couponApplied", JSON.stringify(couponApplied));
        document.getElementById(
          "applied3"
        ).innerHTML = `Hurray! Coupon Applied. Your new cart total is ${bal}`;
        localStorage.setItem("cartTotal",JSON.stringify(bal));
        localStorage.setItem("discountAmount", JSON.stringify(disc));
      }
      setTimeout(() => {
        cartPage()
    }, 2000);
    } 
    else {
      document.getElementById("applied3").innerHTML =
        "This coupon is only applicable for amount more than Rs.3000.";
    }
  };

  document.getElementById("coupon4").onclick = () => {
    if (total > 5000) {
      if (couponApplied == true) {
        document.getElementById("applied4").innerHTML =
          "Only one coupon can be applied per payment";
      } else {
        let disc = Math.round(total * 0.4);
        let bal = total - disc;
        let couponApplied = true;
        localStorage.setItem("couponApplied", JSON.stringify(couponApplied));
        document.getElementById(
          "applied4"
        ).innerHTML = `Hurray! Coupon Applied. Your new cart total is ${bal}`;
        localStorage.setItem("cartTotal",JSON.stringify(bal));
        localStorage.setItem("discountAmount", JSON.stringify(disc));
      }
      setTimeout(() => {
        cartPage()
    }, 2000);
    } 
    else {
      document.getElementById("applied4").innerHTML =
        "This coupon is only applicable for amount more than Rs.5000.";
    }
  };

const cartPage = () => {
    window.location.href = "cart.html";
}

