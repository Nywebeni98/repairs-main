document.getElementById('login-signup-btn').addEventListener('click', function(event) {
    event.preventDefault();
    document.querySelector('.login-wrap').style.display = 'block';
});

document.querySelector('.close-btn').addEventListener('click', function() {
    document.querySelector('.login-wrap').style.display = 'none';
});

// Function to handle user sign-up
// Function to handle user sign-up with validation
function signUp() {
    const username = document.getElementById("user-signup").value.trim();
    const password = document.getElementById("pass-signup").value;
    const repeatPassword = document.getElementById("repeat-pass").value;
    const email = document.getElementById("email").value.trim();

    // Validate if fields are not empty
    if (!username || !password || !repeatPassword || !email) {
        alert("Please fill out all the fields!");
        return;
    }

    // Validate email format (basic email validation)
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address!");
        return;
    }

    // Check if passwords match
    if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Save user info in localStorage
    const user = {
        username: username,
        password: password,
        email: email
    };

    // Store user info using the username as the key
    localStorage.setItem(username, JSON.stringify(user));
    alert("Account created successfully!");

    // Clear form inputs after successful sign-up
    document.getElementById("user-signup").value = "";
    document.getElementById("pass-signup").value = "";
    document.getElementById("repeat-pass").value = "";
    document.getElementById("email").value = "";

    // Switch back to Sign In tab
    document.getElementById("tab-1").checked = true;
}

// Function to handle user sign-in
function signIn() {
    const username = document.getElementById("user").value.trim();
    const password = document.getElementById("pass").value;

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(username));

    if (!user) {
        alert("User does not exist!");
        return;
    }

    // Check if password matches
    if (user.password === password) {
        alert("Sign in successful!");
        // Logic for keeping the user signed in could be added here
    } else {
        alert("Incorrect password!");
    }

    // Clear sign-in inputs after the attempt
    document.getElementById("user").value = "";
    document.getElementById("pass").value = "";
}

// Function to handle "Forgot Password" functionality
function forgotPassword() {
    const username = prompt("Enter your username:");

    // Retrieve user data from localStorage
    const user = JSON.parse(localStorage.getItem(username));

    if (user) {
        alert("Your password is: " + user.password);
    } else {
        alert("User not found!");
    }
}

// Close button functionality to hide the login form
document.querySelector(".close-btn").addEventListener("click", function() {
    document.querySelector(".login-wrap").style.display = "none";
});

function Alreadyamember() {
    // Set the "Sign In" radio button to checked
    document.getElementById("tab-1").checked = true;
}