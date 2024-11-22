// Toggle between login and register forms
document.getElementById("toggle-register").addEventListener("click", () => {
    document.getElementById("login-form").style.display = "none";
    document.getElementById("register-form").style.display = "block";
    document.getElementById("forgot-password-form").style.display = "none";
});

document.getElementById("toggle-login").addEventListener("click", () => {
    document.getElementById("register-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("forgot-password-form").style.display = "none";
});

// Toggle between login and forgot password forms
document.getElementById("toggle-forgot-password").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("login-form").style.display = "none";
    document.getElementById("forgot-password-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
});

document.getElementById("toggle-login-forgot").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("forgot-password-form").style.display = "none";
    document.getElementById("login-form").style.display = "block";
    document.getElementById("register-form").style.display = "none";
});

// Function to toggle password visibility
function togglePassword(inputId, eyeId) {
    const passwordInput = document.getElementById(inputId);
    const eyeIcon = document.getElementById(eyeId);

    eyeIcon.addEventListener("click", () => {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
            eyeIcon.classList.replace("ri-eye-off-line", "ri-eye-line"); // Change icon to 'eye'
        } else {
            passwordInput.type = "password";
            eyeIcon.classList.replace("ri-eye-line", "ri-eye-off-line"); // Change icon back to 'eye-off'
        }
    });
}

// Apply the toggle function to each password field and icon
togglePassword("login-pass", "login-eye");
togglePassword("register-pass", "register-eye");
togglePassword("register-confirm-pass", "confirm-eye");
