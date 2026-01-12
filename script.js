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
        showSuccess("Email looks good!");
    }
});

// Prevent submit if invalid
form.addEventListener("submit", (e) => {
    if (!emailRegex.test(emailInput.value.trim())) {
        e.preventDefault();
        showError("Please enter a valid email before submitting");
    }
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
