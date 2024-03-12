const loginForm = document.getElementById('loginForm');
const message = document.getElementById('message');

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();

        if (response.ok) {
            // Redirect to posts page or perform necessary action after successful login
            window.location.href = '/posts.html';
        } else {
            throw new Error(data.message || 'Login failed. Please try again.');
        }
    } catch (error) {
        console.error('Login Error:', error.message);
        message.textContent = 'Login failed. Please try again.';
    }
});
