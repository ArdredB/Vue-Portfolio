<template>
  <div class="contact-page">
    <header class="contact-header">
      <h1>Contact Me</h1>
      <p class="intro-text">I'd love to hear from you!</p>
      <p class="intro-text">Message me anything you want, from gaming to coding.</p>
    </header>

    <!-- Contact Form Section -->
    <section class="contact-form-section">
      <form @submit.prevent="submitForm" class="contact-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" v-model="name" required placeholder="Enter your name" />
        </div>

        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" v-model="email" required placeholder="Enter your email" />
        </div>

        <div class="form-group">
          <label for="message">Message</label>
          <textarea id="message" v-model="message" required placeholder="Your message here..."></textarea>
        </div>

        <button type="submit" class="submit-button">Send Message</button>
      </form>
    </section>

    <!-- Thank You Message -->
    <section v-if="formSubmitted" class="thank-you-message">
      <h2>Thank You for Your Message!</h2>
      <p>I'll get back to you as soon as possible.</p>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const message = ref('');
const formSubmitted = ref(false);

const submitForm = () => {
  // Simulate form submission
  formSubmitted.value = true;

  // Reset form after submission
  name.value = '';
  email.value = '';
  message.value = '';
};
</script>

<style scoped>
.contact-page {
  font-family: 'Arial', sans-serif;
  background-color: #0d1b2a; /* Dark background to match other pages */
  background: url('../assets/msgb.jpg') no-repeat center center/cover; /* Background image */
  color: #fff; /* Light text for contrast */
  text-align: center;
  padding: 50px;
  max-width: 1000px;
  margin-left: auto;
}

.contact-header {
  margin-bottom: 40px;
}

.contact-header h1 {
  font-size: 2.5rem;
  color: #1e90ff; /* Blue accent */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition for hover effect */
}

.contact-header h1:hover {
  font-weight: 500; /* Bold the text on hover */
  color: #4b5cbd; /* Change color on hover (e.g., Tomato) */
  transform: scale(1.1); /* Slightly enlarge the text on hover */
}


.intro-text {
  font-size: 1.2rem;
  color: #aaa; /* Lighter text color for contrast */
  font-weight: 400;
  margin: 10px 0;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}
.intro-text:hover {
  font-weight: 600; /* Change font weight on hover */
}

.contact-form-section {
  max-width: 600px;
  margin: 0 auto;
  background-color: rgba(0, 0, 0, 0.6); /* Semi-transparent black background */
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.8);
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

label {
  font-size: 1rem;
  margin-bottom: 8px;
  color: #fff; /* Light label text */
}

input, textarea {
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #1e90ff; /* Blue border for input fields */
  background-color: #333; /* Dark background for inputs */
  color: #fff; /* White text for input fields */
}

textarea {
  height: 150px;
  resize: vertical;
}

.submit-button {
  padding: 12px 20px;
  background-color: #1e90ff; /* Blue button */
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-button:hover {
  background-color: #1c7bc0; /* Darker blue on hover */
}

.thank-you-message {
  margin-top: 40px;
  font-size: 1.2rem;
  color: #eb6969; /* Blue color for thank you message */
}
</style>
