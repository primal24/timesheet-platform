// Example fetch usage in your Login.js frontend component
const handleSubmit = async (e) => {
    e.preventDefault();
 
    try {
        const email = 'example@fh-joanneum.at';
        const password = 'password';

        const response = await fetch('src/server/routes/users.js', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }) 
        });

        const data = await response.json();

        if (response.ok) {
            // Handle successful login - storing the token, redirecting, etc.
            localStorage.setItem('token', data.token); 
            // ... 
        } else {
            // Handle errors
        }
   } catch (error) {
        // Handle network errors ... 
   }
   function processLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simplified authentication logic (replace with your actual auth system)
    if (username === 'manager' && password === 'managerpass') {
        window.location.href = 'manager.dashboard.html'; 
    } else if (isEmployee(username)) {
         window.location.href = 'employee.dashboard.html';
    } else {
        // Display error message
        alert('Invalid login credentials'); 
    }
}

// Helper function to determine employee (replace with your logic)
function isEmployee(username) {
    // You might fetch a list of employees from a database or an API here
    const employeeUsernames = ['employee1', 'employee2', 'employee3']; 
    return employeeUsernames.includes(username);
}

 };
 