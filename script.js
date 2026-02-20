document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signup-form');
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const signupCard = document.getElementById('signup-card');
    const successMessage = document.getElementById('success-message');
    const userEmailSpan = document.getElementById('user-email');
    const dismissBtn = document.getElementById('dismiss-btn');
    
    // Clear the email input on page load
    emailInput.value = '';
    emailInput.classList.remove('error');
    emailError.classList.remove('show');
    
    // Validate email format
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        
        // Check if email is empty or invalid
        if (email === '' || !isValidEmail(email)) {
            // Show error state
            emailInput.classList.add('error');
            emailError.classList.add('show');
        } else {
            // Success - show confirmation message
            userEmailSpan.textContent = email;
            signupCard.classList.add('hidden'); 
            successMessage.classList.add('active'); 
            
            // Reset form state
            emailInput.classList.remove('error');
            emailError.classList.remove('show');
        }
    });
    
    // Reset error state when user starts typing
    emailInput.addEventListener('input', function() {
        if (emailInput.classList.contains('error')) {
            emailInput.classList.remove('error');
            emailError.classList.remove('show');
        }
    });
    
    // Handle dismiss button
    dismissBtn.addEventListener('click', function() {
        successMessage.classList.remove('active');
        signupCard.classList.remove('hidden');
        
        // Reset email input
        emailInput.value = '';
        emailInput.classList.remove('error');
        emailError.classList.remove('show');
    });
});