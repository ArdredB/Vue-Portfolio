<script setup>
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import { ref, computed, onMounted, watch } from "vue";

const isLoggedIn = ref(false); // Start as false
const route = useRoute();
const router = useRouter();
const isDropdownOpen = ref(false); // Track the state of the dropdown menu

// Check if the current page is the login page
const isLoginPage = computed(() => route.path === "/login");

// Function to synchronize isLoggedIn state with localStorage
const checkLoginStatus = () => {
  isLoggedIn.value = localStorage.getItem("isLoggedIn") === "true";
};

// Initialize isLoggedIn on component load
onMounted(() => {
  checkLoginStatus();
});

// Watch route changes and update login state dynamically
watch(
  () => route.path,
  () => {
    checkLoginStatus();
  }
);

// Logout function
const handleLogout = () => {
  localStorage.removeItem("isLoggedIn");
  isLoggedIn.value = false; // Update reactive state
  router.push("/login");
};

// Toggle the dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
  <div>
    <!-- Render Navbar if user is logged in -->
    <nav v-if="isLoggedIn && !isLoginPage">
      <button @click="toggleDropdown" class="menu-btn">☰ Menu</button> <!-- Menu button -->

      <div v-if="isDropdownOpen" class="nav-links">
        <RouterLink to="/portfolio/profile" class="nav-link">Profile</RouterLink>
        <RouterLink to="/portfolio/showcase" class="nav-link">Showcase</RouterLink>
        <RouterLink to="/portfolio/contact" class="nav-link">Contact</RouterLink>
        <RouterLink to="/portfolio/creative" class="nav-link">Creative</RouterLink>
        <button @click="handleLogout" class="logout-btn">Logout</button>
      </div>
    </nav>

    <!-- Render the current page -->
    <RouterView />
  </div>
</template>

<style scoped>
/* Global Styles */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  height: 100%;
  display: flex;
  justify-content: flex-end; /* Align the content to the right */
  align-items: center; /* Center vertically */
}

/* Nav styling */
nav {
  background: linear-gradient(45deg, #2e3b4e, #1f2a38); /* Galaxy theme with blue tones */
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 1000px; /* Fixed width in pixels */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  position: relative; 
  margin-left: 100px; 
}

.menu-btn {
  background: #070101;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px; /* Replaced 1.2rem */
  cursor: pointer;
  border-radius: 5px;
  font-weight: 600;
}

.menu-btn:hover {
  background-color: #ec5c23;
}

.nav-links {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Space between links */
  width: 800px; /* Fixed width to match the nav width */
  padding-top: 10px;
}

.nav-link {
  text-decoration: none;
  color: #f0f8ff; /* Light text for the galaxy theme */
  font-weight: 600;
}

.nav-link:hover {
  text-decoration: underline;
  color: #69b3e7; /* Hover effect with a lighter blue */
}

.logout-btn {
  padding: 8px 15px;
  background-color: #070101;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  max-width: fit-content;
}

.logout-btn:hover {
  background-color: #ec5c23; /* Orange-red hover color */
}

/* Responsive adjustments */

/* For devices with screen widths of 768px or less (tablet and smaller devices) */
@media (max-width: 768px) {
  nav {
    width: 100%;
    margin-left: 20px; /* Reduce the margin to keep the nav aligned */
  }

  .menu-btn {
    font-size: 14px;
  }

  .nav-links {
    width: 100%;
    gap: 10px;
  }

  .nav-link {
    font-size: 1rem; /* Smaller font size for mobile */
  }

  .logout-btn {
    font-size: 1rem;
  }
}

/* For devices with screen widths of 480px or less (mobile devices) */
@media (max-width: 480px) {
  nav {
    width: 100%;
    margin-left: 10px; /* Further reduce the margin */
  }

  .menu-btn {
    font-size: 12px;
    padding: 8px 12px; /* Adjust button size for smaller screens */
  }

  .nav-links {
    gap: 8px;
  }

  .nav-link {
    font-size: 0.9rem; /* Even smaller font size for smaller screens */
  }

  .logout-btn {
    font-size: 0.9rem;
    padding: 6px 12px; /* Adjust button size */
  }
}

</style>
