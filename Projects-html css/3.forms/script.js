
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseMessage = document.getElementById('responseMessage');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;


        responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
    });
});
