document.addEventListener('DOMContentLoaded', function() {
    const authForm = document.getElementById('authForm');
    const formTitle = document.getElementById('formTitle');
    const loginFields = document.getElementById('loginFields');
    const registerFields = document.getElementById('registerFields');
    const submitButton = document.getElementById('submitButton');
    const toggleLink = document.getElementById('toggleLink');

    
    function handleFormSubmit(event) {
        event.preventDefault(); 

        if (submitButton.textContent === 'Login') {
            // Login logic
            const username = document.getElementById('usernameInput').value;
            const password = document.getElementById('passwordInput').value;

            if (username === "" || password === "") {
                alert("Username and Password cannot be empty.");
            } else {
            
                alert(`Logged in as: ${username}`);
            }
        } else {
            // Registration logic
            const username = document.getElementById('usernameInput').value;
            const password = document.getElementById('passwordInput').value;
            const confirmPassword = document.getElementById('confirmPasswordInput').value;

            if (username === "" || password === "" || confirmPassword === "") {
                alert("All fields are required.");
            } else if (password !== confirmPassword) {
                alert("Passwords do not match.");
            } else {
                alert(`Registered as: ${username}`);
            }
        }
    }

    // Toggle between login and registration
    toggleLink.addEventListener('click', function(event) {
        event.preventDefault();
        
        if (submitButton.textContent === 'Login') {
            formTitle.textContent = 'Register';
            submitButton.textContent = 'Register';
            registerFields.style.display = 'block';
            loginFields.style.display = 'block'; 
            toggleLink.textContent = 'Login';
        } else {
            formTitle.textContent = 'Login';
            submitButton.textContent = 'Login';
            registerFields.style.display = 'none';
            loginFields.style.display = 'block';
            toggleLink.textContent = 'Register';
        }
    });

    authForm.addEventListener('submit', handleFormSubmit);
});
