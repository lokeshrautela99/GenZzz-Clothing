document.getElementById("subscribe-form").addEventListener("submit", function (event) {
    event.preventDefault();
    let email = document.getElementById("subscribe-email").value;
    document.getElementById('subscription-message').textContent = `Thank you for subscribing with ${email}`;
    document.getElementById("subscribe-email").value = '';
});
