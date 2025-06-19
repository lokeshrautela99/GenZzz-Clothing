import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

let placeOrder = document.getElementById("placeOrderForm");
placeOrder.addEventListener("submit", function(event){
    event.preventDefault();
    let obj = {
        firstname: placeOrder.firstname.value,
        lastname: placeOrder.lastname.value,
        deliveryAddress: placeOrder.deliveryAddress.value,
        cod: placeOrder.cod.value,
        upi: placeOrder.upi.value,
        online: placeOrder.online.value,
        debit: placeOrder.debit.value,
        credit: placeOrder.credit.value,
    }
     let msg = document.getElementById("checkoutMessage")
     msg.style.display = "block"
     msg.innerHTML = `${obj.firstname}, your order is placed now &#128525`;
    document.getElementById("placeOrderForm").reset();
    window.localStorage.removeItem("price");
    window.localStorage.removeItem("products");
    window.localStorage.removeItem("cart");
    window.localStorage.removeItem("cartTotal");
    window.localStorage.removeItem("couponApplied");
    window.localStorage.removeItem("discountAmount");
    setTimeout(() => {
       window.location.href = "index.html";
    }, 3000);
});