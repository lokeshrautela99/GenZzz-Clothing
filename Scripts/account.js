import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
document.getElementById("lower-nav").style.display = "none";

let accData = JSON.parse(localStorage.getItem("Login")) || [];
let flag = JSON.parse(localStorage.getItem("flag")) || [];

let name = document.getElementById("an");
name.innerText = accData.firstname + " " + accData.lastname;
let mblno = document.getElementById("am");
let email = document.getElementById("ae");
email.innerText = accData.email;
let accName = document.getElementById("n");
accName.innerText = accData.firstname + " " + accData.lastname;
let accEmail = document.getElementById("e");
accEmail.innerText = accData.email;
let accMblno = document.getElementById("m");
if(accData.mobile == ""){
  accMblno.innerText = "";
  mblno.innerText = "";
}
else{
  accMblno.innerText = `+91 ${accData.mobile}`;
  mblno.innerText = `+91 ${accData.mobile}`;
}

// edit Details function --->
document.getElementById("edit").addEventListener("click", () => {
  window.location.href = "signup.html";
});

// Logout Function, Removeing data form LS --->
let loginDiv = document.getElementById("user_login");
let accDiv = document.getElementById("acc_login");
document.getElementById("logout").addEventListener("click", () => {
  window.localStorage.removeItem("userSignup");
  window.localStorage.removeItem("Login");
  window.localStorage.removeItem("cart");
  window.localStorage.removeItem("products");
  localStorage.setItem("flag", JSON.stringify(false));
  if (flag === false) {
    accDiv.style.display = "none";
    loginDiv.style.display = "block";
    document.getElementById("an").value = "";
    document.getElementById("am").value = "";
    document.getElementById("ae").value = "";
    document.getElementById("n").value = "";
    document.getElementById("e").value = "";
    document.getElementById("m").value = "";
  }
});
