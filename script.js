document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const message = document.querySelector('.message');
    const overlay = document.getElementById('success-overlay');
    const successEmail = document.getElementById('success-email');
    const dismissBtn = document.getElementById('dismiss-btn');

    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = (emailInput && emailInput.value || '').trim();
            if (!validateEmail(email)) {
                if (message) message.textContent = 'Please enter a valid email address.';
                return;
            }
            if (message) message.textContent = '';

            // Show success overlay and populate email text
            if (successEmail) successEmail.textContent = email;
            if (overlay) {
                overlay.classList.remove('hidden');
                overlay.setAttribute('aria-hidden', 'false');
            }
            // Optionally clear input
            if (emailInput) emailInput.value = '';
        });
    }

    if (dismissBtn) {
        dismissBtn.addEventListener('click', () => {
            if (overlay) {
                overlay.classList.add('hidden');
                overlay.setAttribute('aria-hidden', 'true');
            }
        });
    }

    // Close on Escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay && !overlay.classList.contains('hidden')) {
            overlay.classList.add('hidden');
            overlay.setAttribute('aria-hidden', 'true');
        }
    });
});
const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const message = document.querySelector(".message");

// Email regex (simple & effective)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Real-time validation
emailInput.addEventListener("input", () => {
    const email = emailInput.value.trim();

    if (email === "") {
        resetState();
        return;
    }

    if (!emailRegex.test(email)) {
        showError("Valid email required");
    } else {
        showSuccess("Email is valid!");
    }
});

// Prevent submit if invalid
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();

    if (!emailRegex.test(email)) {
        showError("Please enter a valid email");
        return;
    }

    // Save email for success page
    localStorage.setItem("email", email);

    // Redirect to success page
    window.location.href = "desktop-success.html";
});

// Helpers
function showError(text) {
    message.textContent = text;
    message.className = "message error";
    message.style.display = "block";

    emailInput.classList.add("error");
    emailInput.classList.remove("success");
}

function showSuccess(text) {
    message.textContent = text;
    message.className = "message success";
    message.style.display = "block";

    emailInput.classList.add("success");
    emailInput.classList.remove("error");
}

function resetState() {
    message.style.display = "none";
    emailInput.classList.remove("error", "success");
}
