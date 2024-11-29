<template>
  <div class="projects-page">
    <header class="projects-header">
      <h1>My Projects</h1>
      <p class="intro-text">Here are some of the projects I've worked on.</p>
    </header>

    <!-- Project Gallery Section -->
    <section class="gallery">
      <div v-for="project in projects" :key="project.id" class="card">
        <img :src="project.image" :alt="project.title" class="project-image" />
        <div class="card-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <!-- Link the button to GitHub -->
          <a :href="project.github" target="_blank" class="cta-button">View Project</a>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import grabcutLogo from '../assets/grabcut.png'; // Importing Grab A Cut logo
import dengappsLogo from '../assets/dengapp.jpg'; // Importing Deng Apps logo

export default {
  data() {
    return {
      projects: [
        {
          id: 1,
          title: 'Grab A Cut',
          description: 'Grab A Cut is an online barber booking site, allowing users to schedule appointments with local barbers easily and conveniently.',
          image: grabcutLogo, // Using the imported logo
          github: 'https://github.com/ArdredB/Grab-A-Cut', // GitHub link for Grab A Cut
        },
        {
          id: 2,
          title: 'Deng Apps',
          description: 'Deng Apps is a calculator app with various tools, including an Ohm\'s law calculator, measure of central tendency, density calculator, simple interest calculator, and number system converter.',
          image: dengappsLogo, // Using the imported logo
          github: 'https://www.youtube.com/watch?v=BBJa32lCaaY', // GitHub link for Deng Apps
        },
      ],
    };
  },
};
</script>


<style scoped>
.projects-page {
  font-family: 'Arial', sans-serif;
  background: linear-gradient(135deg, #2a3d5f, #1b2533); /* Gradient background for visual interest */
  color: #fff; /* Light text for contrast */
  padding: 50px;
  background: url('../assets/bg-galaxy.jpg') no-repeat center center/cover; /* Background image */
  display: flex;
  flex-direction: column;
  align-items: center; /* Center the content horizontally */
  justify-content: center; /* Center the content vertically */
  margin-left: auto;
  max-width: 1000px;
  position: relative;
}

.projects-header {
  text-align: center;
  margin-bottom: 40px;
  width: 100%;
}

.projects-header h1 {
  font-size: 2.8rem;
  color: #1e90ff; /* Bright blue accent */
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.6);
  transition: transform 0.3s ease, color 0.3s ease;
}

.projects-header h1:hover {
  transform: scale(1.1); /* Slightly increase size */
  color: #ff7f50; /* Change color on hover */
}

.intro-text {
  font-size: 1.3rem;
  color: #ccc; /* Lighter text for contrast */
  font-weight: 400;
  margin: 10px 0;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexibly arrange cards based on screen size */
  gap: 30px;
  justify-items: center;
  padding: 0 20px; /* Added padding for spacing */
  max-width: 1200px; /* Set a max-width to prevent cards from stretching too far */
  width: 100%;
}

.card {
  background-color: rgba(0, 0, 0, 0.7); /* Semi-transparent dark background */
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.8); /* Stronger shadow for depth */
  overflow: hidden;
  width: 100%;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.card:hover {
  transform: translateY(-12px); /* Slight lift effect */
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.9); /* Bigger shadow on hover */
  background-color: rgba(0, 0, 0, 0.85); /* Darker background on hover */
}

.project-image {
  width: 100%;
  height: 200px;
  object-fit: contain;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card:hover .project-image {
  transform: scale(1.05); /* Slight zoom-in effect on image */
}

.card-content {
  padding: 20px;
  transition: color 0.3s ease;
}

.card-content h3 {
  font-size: 1.7rem;
  color: #1e90ff; /* Accent color for the title */
  margin-bottom: 15px;
  font-weight: bold;
  letter-spacing: 1px;
  transition: transform 0.3s ease, color 0.3s ease;
}

.card-content h3:hover {
  transform: scale(1.1); /* Slightly enlarge title */
  color: #ff7f50; /* Change title color on hover */
}

.card-content p {
  font-size: 1.1rem;
  color: #ccc;
  margin-bottom: 20px;
  line-height: 1.6; /* Improved readability */
}

.cta-button {
  background-color: #1e90ff; /* Bright blue button */
  color: #fff;
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #1a75d1; /* Darker blue on hover */
  transform: translateY(-5px); /* Slightly lift button on hover */
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .projects-header h1 {
    font-size: 2.2rem; /* Adjust header size on smaller screens */
  }

  .gallery {
    grid-template-columns: 1fr; /* Stack cards vertically on smaller screens */
    padding: 0 10px; /* Adjust padding for smaller devices */
  }

  .card {
    width: 100%; /* Ensure the card takes full width on smaller screens */
  }
}

@media (max-width: 480px) {
  .projects-header h1 {
    font-size: 1.8rem; /* Further reduce header size on very small screens */
  }
}
</style>
