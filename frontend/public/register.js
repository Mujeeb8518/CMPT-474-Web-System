const registerForm = document.getElementById('registerForm');
const message = document.getElementById('message');

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, email, password })
        });

        const data = await response.json();

        if (response.ok) {
            message.textContent = 'Registration successful. Please proceed to login.';
        } else {
            throw new Error(data.message || 'Registration failed. Please try again.');
        }
    } catch (error) {
        console.error('Registration Error:', error.message);
        message.textContent = 'Registration failed. Please try again.';
    }
});
