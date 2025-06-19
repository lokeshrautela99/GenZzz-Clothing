import navbar from "../Components/navbar.js";
import footer from "../Components/footer.js";
let navbar_div = document.getElementById("navbar");
navbar_div.innerHTML = navbar();
let footer_div = document.getElementById("footer");
footer_div.innerHTML = footer();
// document.getElementById("cat_div").style.display = "none";
// document.getElementById("search_div").style.display = "none";
document.getElementById("lower-nav").style.display = "none";

document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    document.getElementById("contact-message").textContent = `Thank you, ${name}. Your message has been sent. We will contact you at ${email} soon.`;
    document.getElementById("contact-form").reset();
});
