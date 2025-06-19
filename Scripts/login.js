import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";

let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();


// LOGIN FUNCTION --------->
let signupPage = JSON.parse(localStorage.getItem("userSignup")) || [];
let login = document.getElementById("login_form");
login.addEventListener("submit", (event) => {
  event.preventDefault();
  if(signupPage.length === 0){
    document.getElementById("loginAlert").textContent = "Please create an account first!"
  }
  let obj = {
    email: login.email.value,
    password: login.password.value,
  };
  signupPage.forEach(function (ele) {
    if (ele.email != obj.email && ele.password != obj.password) {
      document.getElementById("loginAlert").textContent = "Wrong Credentials! Please try to login again.";
      document.getElementById("emailAlert").textContent = "";
      document.getElementById("passAlert").textContent = "";
    }
    else if(ele.email != obj.email && ele.password === obj.password){
      document.getElementById("emailAlert").textContent = "Please fill the right email address.";
      document.getElementById("passAlert").textContent = "";
      document.getElementById("loginAlert").textContent = "";
    }
    else if(ele.email === obj.email && ele.password != obj.password){
      document.getElementById("passAlert").textContent = "Wrong Password!";
      document.getElementById("emailAlert").textContent = "";
      document.getElementById("loginAlert").textContent = "";
    }
    else if (ele.email === obj.email && ele.password === obj.password) {
      localStorage.setItem("Login", JSON.stringify(ele));
      document.getElementById("loginAlert").textContent = "";
      document.getElementById("emailAlert").textContent = "";
      document.getElementById("passAlert").textContent = "";
      window.location.href = "index.html";
      localStorage.setItem("flag", JSON.stringify(true));
      document.getElementById("email").value = "";
      document.getElementById("password").value = ""
    }
  });
});

function slideShow() {
  const arr = [
    "./images/Login-Signup/login-2.PNG",
    "./images/Login-Signup/signup-2.jpg",
  ];

  let i = 0;
  let slider_div = document.getElementById("child2");
  let img = document.createElement("img");
  img.id = "loginImg";
  img.src = arr[0];

  slider_div.append(img);
  i = i + 1;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }
    img.src = arr[i];
    i = i + 1;
    slider_div.append(img);
  }, 6000);
}
slideShow();
