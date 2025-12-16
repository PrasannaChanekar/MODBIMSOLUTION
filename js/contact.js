document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form form');

    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();
            
            // In a real application, you would use fetch() or XMLHttpRequest
            // to send this data to a server-side endpoint (like PHP, Node.js, etc.)

            console.log("Form submission intercepted.");
            
            // Simple Client-Side Validation/Feedback
            const submitButton = contactForm.querySelector('.submit-btn');
            submitButton.textContent = "Sending...";
            submitButton.disabled = true;

            setTimeout(() => {
                alert("Thank you! Your inquiry has been received by MOD BIM SOLUTION. We will contact you shortly.");
                submitButton.textContent = "Inquiry Sent!";
                submitButton.classList.remove('btn-primary');
                submitButton.classList.add('btn-secondary');
                contactForm.reset();
                submitButton.disabled = false;
                // Reset button appearance after a delay
                setTimeout(() => {
                    submitButton.textContent = "Send Inquiry";
                    submitButton.classList.add('btn-primary');
                    submitButton.classList.remove('btn-secondary');
                }, 2000);
            }, 1500); 
        });
    }
});

