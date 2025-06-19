import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";

let Navbar_div = document.getElementById("navbar");
Navbar_div.innerHTML = navbar();

let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();

// signup Funciton --------->
let signupPage = JSON.parse(localStorage.getItem("userSignup")) || [];
let signup = document.getElementById("signup_form");
signup.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    firstname: signup.firstname.value,
    lastname: signup.lastname.value,
    email: signup.useremail.value,
    mobile: signup.mobile.value,
    password: signup.userpassword.value,
  };
  signupPage.push(obj);
  localStorage.setItem("userSignup", JSON.stringify(signupPage));
  window.location.href = "login.html";
  document.getElementById("firstname").value = "";
  document.getElementById("lastname").value = "";
  document.getElementById("useremail").value = "";
  document.getElementById("mobile").value = "";
  document.getElementById("userpassword").value = "";
});

function slideShow() {
  const arr = [
    "./images/Login-Signup/login-1.jpg",
    "./images/Login-Signup/signup-2.jpg",
    "./images/Login-Signup/login-2.PNG",
  ];

  let i = 0;
  let slider_div = document.getElementById("child2");
  let img = document.createElement("img");
  img.id = "signupImg";
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

// const first = () => {
//   // alert("Its Working")
//   document.getElementById("signupImg1").src="/images/Login-Signup/signup-2.jpg"
// }
// // first(first, 3000);

// const second = () => {
//   // alert("Its Working")
//   document.getElementById("signupImg1").src="/images/Login-Signup/signup-1.PNG"
// }
// // setInterval(second, 6000);

// const third = () => {
//   // alert("Its Working")
//   document.getElementById("signupImg1").src="/images/Login-Signup/signup-3.webp"
// }
// // setInterval(third, 9000);
