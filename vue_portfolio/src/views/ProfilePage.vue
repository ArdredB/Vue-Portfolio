<template>
    <div class="profile-card">
      <img
        src="../assets/profpic.jpg"
        alt="Profile Photo"
        class="profile-pic"
      />
      <transition name="slide-fade">
        <p v-if="showDescription" key="description" class="profile-description">
          Hi, I'm Jhon Ardred Baniel, a 4th year BSCpE Student. Welcome to my portfolio!
        </p>
        <p v-else key="additional-info" class="profile-description">
          Feel free to check out my projects and connect with me on GitHub and Facebook!
        </p>
      </transition>
      <button @click="toggleCard" class="toggle-button">
        {{ showDescription ? "Learn More" : "Back" }}
      </button>
  
      <div class="social-links">
        <a href="https://github.com/ArdredB" class="social-link">
          <i class="fab fa-github"></i> GitHub
        </a>
        <a
          href="https://www.facebook.com/jhonardred.baniel.7"
          class="social-link"
        >
          <i class="fab fa-facebook"></i> Facebook
        </a>
      </div>
  
      <!-- Floating orbs -->
      <div class="floating-elements">
        <div class="orb orb-small"></div>
        <div class="orb orb-medium"></div>
        <div class="orb orb-large"></div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // State to toggle between cards
  const showDescription = ref(true);
  
  const toggleCard = () => {
    showDescription.value = !showDescription.value;
  };
  </script>
  
  <style scoped>
  /* Import Font Awesome for social media icons */
  @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');
  
  /* Profile card styling */
  .profile-card {
    background-color: rgba(0, 0, 0, 0.6);
    background: url('../assets/profile1.jpg') no-repeat center center/cover; /* Background image */
    padding: 30px;
    border-radius: 15px;
    width: 100%;
    max-width: 1000px;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.8);
    position: relative;
    z-index: 2;
    text-align: center;
    box-sizing: border-box;
    margin-left: auto; /* Move the profile card 150px to the right */
  }
  
  /* Profile picture styling */
  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
    border: 5px solid #000000;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .profile-pic:hover {
    transform: scale(1.1);
    box-shadow: 0 0 25px rgba(255, 255, 255, 0.7);
  }
  
  /* Profile description */
  .profile-description {
    padding: 15px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7);
    margin: 15px 0;
    font-size: 1.5rem;
    color: #2e2727; /* Slightly darker shade for text */
    transition: transform 0.3s ease, background-color 0.3s ease;
    font-weight: 500;
  }
  
  .profile-description:hover {
    transform: scale(1.05);
    background-color: rgba(255, 255, 255, 0.4);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  }
  
  /* Toggle button */
  .toggle-button {
    padding: 10px 20px;
    background-color: transparent;
    color: rgb(0, 0, 0);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }
  
  .toggle-button:hover {
    background-color: #12457c;
    transform: scale(1.05);
  }
  
  /* Slide and fade transition */
  .slide-fade-enter-active,
  .slide-fade-leave-active {
    transition: all 0.5s ease;
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    opacity: 0;
    transform: translateY(20px);
  }
  
  /* Social link styling */
  .social-links {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
  }
  
  .social-link {
    color: #242121;
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 600;
    transition: color 0.3s ease, transform 0.3s ease;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .social-link i {
    font-size: 1.8rem;
  }
  
  .social-link:hover {
    color: #1e90ff;
    transform: translateY(-5px);
  }
  
  /* Floating glowing orbs */
  .floating-elements {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 0;
  }
  
  .floating-elements .orb {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    animation: float 4s ease-in-out infinite;
    z-index: 1;
  }
  
  .orb-small {
    width: 50px;
    height: 50px;
    top: 0%; /* Move up */
    left: 20%;
    animation-duration: 5s;
  }
  
  .orb-medium {
    width: 100px;
    height: 100px;
    top: 10%; /* Move up */
    left: 70%;
    animation-duration: 7s;
  }
  
  .orb-large {
    width: 150px;
    height: 150px;
    top: 10%; /* Move up */
    left: 30%;
    animation-duration: 10s;
  }
  
  /* Floating animation */
  @keyframes float {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }
  
  /* Media Queries for Responsiveness */
  @media (max-width: 768px) {
    /* Adjust profile card for smaller screens */
    .profile-card {
      max-width: 100%;
      margin-left: 20px; /* Reduce margin */
    }
  
    .profile-pic {
      width: 150px; /* Make the profile picture smaller */
      height: 150px;
    }
  
    .profile-description {
      font-size: 1.2rem; /* Adjust font size */
    }
  
    .toggle-button {
      font-size: 1rem; /* Adjust button size */
    }
  
    /* Make social links stack vertically */
    .social-links {
      flex-direction: column;
      gap: 10px;
    }
  
    /* Adjust orbs for smaller screens */
    .orb-small {
      width: 40px;
      height: 40px;
    }
  
    .orb-medium {
      width: 80px;
      height: 80px;
    }
  
    .orb-large {
      width: 120px;
      height: 120px;
    }
  }
  
  @media (max-width: 480px) {
    /* Further adjustments for very small screens */
    .profile-card {
      margin-left: 10px;
      padding: 20px;
    }
  
    .profile-pic {
      width: 120px;
      height: 120px;
    }
  
    .profile-description {
      font-size: 1rem; /* Smaller text */
    }
  
    .toggle-button {
      font-size: 0.9rem;
      padding: 8px 15px;
    }
  
    /* Make social links even more compact */
    .social-links {
      gap: 8px;
    }
  }
  
  </style>
  