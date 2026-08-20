document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    if (name === "" || email === "" || message === "") {
        document.getElementById("form-message").textContent = "Please fill out all fields.";
        document.getElementById("form-message").style.color = "red";
        return;
    }

    document.getElementById("form-message").textContent = `Thank you, ${name}! Your message has been sent.`;
    document.getElementById("form-message").style.color = "green";

    this.reset();
});
