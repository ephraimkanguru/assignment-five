document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');
    const formSummary = document.getElementById('formSummary');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the default form submission

        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const contactMethod = document.getElementById('contactMethod').value;
        const termsAccepted = document.getElementById('terms').checked ? 'Accepted' : 'Not Accepted';

        // Display form summary
        formSummary.innerHTML = `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Preferred Contact Method: ${contactMethod}</p>
            <p>Terms and Conditions: ${termsAccepted}</p>
        `;
    });
});
