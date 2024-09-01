document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            alert('Login successful');
            // Redirect to another page or dashboard
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error logging in');
    }
});
