document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Form validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formResponse = document.getElementById('formResponse');

    if (name === "" || email === "" || message === "") {
        formResponse.textContent = "Please fill in all fields!";
        formResponse.style.color = "red";
    } else {
        formResponse.textContent = "Message sent successfully!";
        formResponse.style.color = "green";

        // Reset form
        document.getElementById('contactForm').reset();
    }
});
