// Get the form element by its ID
const form = document.getElementById('contactForm');

// Add an event listener to the form to handle form submission
form.addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form field values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('textarea').value.trim();

    // Perform validation
    if (name === '') {
        alert('Please enter your name.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (message === '') {
        alert('Please enter a message.');
        return;
    }

    // If all validations pass, submit the form (you can add an actual submit logic here)
    alert('Form submitted successfully!');
});

// Function to validate email format using a regular expression
function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailPattern.test(email);
}
