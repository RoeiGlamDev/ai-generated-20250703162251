// script.js: JavaScript code for interactions and animations
// Get elements
const heroButton = document.getElementById('learn-more');
const contactForm = document.querySelector('.contact-form');
const submitButton = document.getElementById('submit-form');

// Add event listeners
heroButton.addEventListener('click', () => {
    // Scroll to about section
    document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
});

submitButton.addEventListener('click', (e) => {
    // Prevent default form submission
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);

    // Validate form data
    if (formData.get('name') && formData.get('email') && formData.get('message')) {
        // Submit form data (replace with actual submission logic)
        console.log('Form submitted:', formData);
        alert('Form submitted successfully!');
    } else {
        alert('Please fill out all fields.');
    }
});

// Add fade-in animation to hero section
document.querySelector('.hero').classList.add('fade-in');

// Add smooth transition to nav links
document.querySelectorAll('.nav a').forEach((link) => {
    link.addEventListener('click', () => {
        // Scroll to section
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});