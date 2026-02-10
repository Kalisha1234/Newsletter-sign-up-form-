//storing html elements in variables
const form = document.getElementById("form"); // Form element
const emailInput = document.getElementById("email"); // Email input field
const message = document.querySelector(".message"); // Message display area

// Email regex (simple & effective)
//const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const emailRegex = /^\S+@\S+\.\S+$/; //It ensures the email contains one or more non-space characters, followed by a single @, then one or more non-space characters, a dot (.), and finally one or more non-space characters.
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
    e.preventDefault(); // Prevent default form submission, reload the page

    const email = emailInput.value.trim(); // Get trimmed email value

    if (!emailRegex.test(email)) {
        showError("Please enter a valid email");
        return;
    }

    // Save current email for success page
    localStorage.setItem("email", email); // Store email in localStorage

    // Save to email list
    const emails = JSON.parse(localStorage.getItem("emails") || "[]"); // Retrieve existing emails or initialize empty array
    emails.push(email); // Add new email to the list
    localStorage.setItem("emails", JSON.stringify(emails)); // Save updated email list back to localStorage

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
