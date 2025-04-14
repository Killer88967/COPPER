const correctPassword = "PEAK";

// Get references to form elements
const loginForm = document.getElementById('loginForm'); // Ensure this is the form element
const passwordInput = document.getElementById('password');
const errorMessage = document.getElementById('errorMessage');

// Event listener for login form submission
loginForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        // Redirect to another HTML page when the password is correct
        window.location.href = "landingpage.html"; // Change "dashboard.html" to your desired page
    } else {
        // Show error message if the password is incorrect
        errorMessage.style.display = 'block';
        errorMessage.textContent = "Incorrect password. Please try again.";
    }
});