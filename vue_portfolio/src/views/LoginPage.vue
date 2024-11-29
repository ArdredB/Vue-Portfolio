<template>
    <form @submit.prevent="handleLogin" class="login-form">
      <div class="login-header">
        <img src="../assets/loginlogo-removebg-preview.png" class="login-logo" />
        <h1 class="login-title">Login</h1>
      </div>
      <div class="form-group">
        <label class="form-label">Username:</label>
        <input v-model="username" type="text" placeholder="Enter username" required class="form-input" />
      </div>
      <div class="form-group">
        <label class="form-label">Password:</label>
        <input v-model="password" type="password" placeholder="Enter password" required class="form-input" />
      </div>
      <button type="submit" class="form-button">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
  </template>
  
  
  <script>
  import { ref } from "vue";
  import { useRouter } from "vue-router";
  
  export default {
    setup() {
      const username = ref("");
      const password = ref("");
      const errorMessage = ref("");
      const router = useRouter();
  
      const handleLogin = () => {
        const validUsername = "ardredBan@gmail.com";
        const validPassword = "password123";
  
        if (username.value === validUsername && password.value === validPassword) {
          localStorage.setItem("isLoggedIn", "true");
          router.push("/portfolio/profile");
        } else {
          errorMessage.value = "Invalid username or password";
        }
      };
  
      return {
        username,
        password,
        errorMessage,
        handleLogin,
      };
    },
  };
  </script>
  
  <style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    height: 100vh; /* Full viewport height */
    font-family: 'Arial', sans-serif;
    display: flex; /* Center the form */
    justify-content: center;
    align-items: center;
    background-color: #1c1c1c; /* Dark grey background */
    color: #fff;
  }
  
  /* Form Styles */
  /* Form Styles */
.login-form {
  position: absolute; /* Centering logic remains unchanged */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(103, 144, 226, 0.85); /* Existing semi-transparent blue */
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  width: 500px;
  max-width: 600px;
  min-width: 300px;
  text-align: center;
  color: #333;
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transitions */
}

.login-form:hover {
  transform: translate(-50%, -50%) scale(1.05); /* Slight scale-up effect */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2); /* Enhance shadow on hover */
  background: linear-gradient(135deg, rgba(103, 144, 226, 0.9), rgba(71, 203, 207, 0.85)); /* Gradient background */
}

  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px; /* Space below header */
  }
  
  .login-logo {
    width: 130px; /* Fixed size */
    height: 130px;
    margin-bottom: 16px; /* Space below logo */
  }
  
  .login-title {
    font-size: 50px; /* Title font size */
    font-weight: bold;
    margin-bottom: 20px; /* Space below title */
    color: #052b4b; /* Lighter blue for title */
  }
  
  .form-group {
    margin-bottom: 20px; /* Space between input groups */
    text-align: left;
  }
  
  .form-label {
    display: block;
    font-size: 16px; /* Label font size */
    font-weight: bold;
    margin-bottom: 6px; /* Space below label */
    color: #90caf9; /* Lighter blue for labels */
  }
  
  .form-input {
    width: 100%; /* Full width of form */
    padding: 12px; /* Input padding */
    font-size: 16px; /* Input font size */
    color: #333;
    background-color: #bbdefb; /* Light blue input fields */
    border: 1px solid #64b5f6; /* Soft blue border */
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .form-input::placeholder {
    color: #000000; /* Placeholder text color */
  }
  
  .form-button {
    width: 100%; /* Full width of form */
    padding: 12px; /* Button padding */
    font-size: 16px; /* Button font size */
    font-weight: bold; /* Bold button text */
    color: rgb(0, 0, 0);
    background-color: #64b5f6; /* Lighter blue button */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .form-button:hover {
    background-color: #42a5f5; /* Slightly darker blue on hover */
  }
  
  .error-message {
    color: #ec6e65; /* Red error text */
    font-size: 18px; /* Error font size */
    margin-top: 12px; /* Space above error message */
  }
  
  /* Responsive Styles */
  @media (max-width: 768px) {
    .login-logo {
      width: 110px; /* Smaller logo */
      height: 110px;
    }
  
    .login-title {
      font-size: 30px; /* Smaller title font */
    }
  
    .form-label {
      font-size: 14px; /* Smaller label font */
    }
  
    .form-input {
      padding: 10px; /* Reduced padding */
      font-size: 14px;
    }
  
    .form-button {
      padding: 10px; /* Reduced padding */
      font-size: 14px; /* Smaller font size */
    }
  
    .error-message {
      font-size: 12px; /* Smaller error text */
    }
  }

  
  </style>
  