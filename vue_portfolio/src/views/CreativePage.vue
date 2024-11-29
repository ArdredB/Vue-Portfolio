<template>
  <div class="creative-page">
    <!-- Header Section with League of Legends theme -->
    <header class="lol-header">
      <h1>Welcome to My Creative Space</h1>
      <p>Your journey in the world of gaming begins here!</p>
    </header>

    <!-- Personalized Hero Section -->
    <section class="hero">
      <h2>My Favorite Champion</h2>
      <div class="champion-card">
        <img src="../assets/mord.jpeg" alt="Mordekaiser Image" class="champion-image" />
        <div class="champion-info">
          <h3>Mordekaiser</h3>
          <p>Role: Fighter / Juggernaut</p>
          <p class="champion-description">Mordekaiser, the Iron Revenant, Twice slain and thrice born, Mordekaiser is a brutal warlord from a foregone epoch, who uses his necromantic sorcery to bind souls into an eternity of servitude. Few now remain who remember his earlier conquests, or know the true extent of his powers—but there are some ancient souls that do, and they fear the day when he may return to claim dominion over both the living and the dead.</p>
          <p class="champion-quote">“Destiny. Domination. Deceit.”</p>
          <p class="champion-quote">~ Mordekaiser</p>
        </div>
      </div>
    </section>

    <!-- Mordekaiser Lore Section -->
    <section class="lore">
      <h2>Did You Know?</h2>
      <ul class="lore-facts">
        <li>
          <div class="lore-icon">⚔️</div>
          <div class="lore-content">
            <strong>Ancient Origins:</strong> Mordekaiser is one of the oldest champions in the League of Legends universe, with his origin dating back to the ancient times of Valoran.
          </div>
        </li>
        <li>
          <div class="lore-icon">👑</div>
          <div class="lore-content">
            <strong>Former Mortal Warlord:</strong> Despite his terrifying appearance, Mordekaiser was originally a mortal warlord who sought to rule over all by using his immense strength and necromantic powers.
          </div>
        </li>
        <li>
          <div class="lore-icon">🔥</div>
          <div class="lore-content">
            <strong>Soul Furnace:</strong> His signature weapon, the Soul Furnace, is capable of enslaving the souls of his enemies and using them as a power source.
          </div>
        </li>
        <li>
          <div class="lore-icon">🌌</div>
          <div class="lore-content">
            <strong>Realm of Death:</strong> Mordekaiser’s ultimate ability, “Realm of Death,” allows him to drag an enemy into a separate dimension where he can face them alone, without outside interference.
          </div>
        </li>
        <li>
          <div class="lore-icon">💀</div>
          <div class="lore-content">
            <strong>Resurrection:</strong> He was killed once by the hands of other powerful champions but rose again as a revenant, seeking vengeance and dominion over life and death.
          </div>
        </li>
        <li>
          <div class="lore-icon">⚡</div>
          <div class="lore-content">
            <strong>Theme of Domination:</strong> Mordekaiser’s theme revolves around controlling both the living and the dead, making him a champion who embodies both domination and despair.
          </div>
        </li>
      </ul>
    </section>

    <!-- Footer with Contact & Links -->
    <footer class="footer">
      <p>Connect with me on:</p>
      <ul class="social-links">
        <li><a href="https://github.com/ArdredB" class="social-link"><i class="fab fa-github"></i> GitHub</a></li>
        <li><a href="https://www.facebook.com/jhonardred.baniel.7" class="social-link"><i class="fab fa-facebook"></i> Facebook</a></li>
      </ul>
    </footer>
  </div>
</template>

<script setup>
  // Placeholder for any future functionality if needed
</script>

<style scoped>
.creative-page {
  font-family: 'Arial', sans-serif;
  background: url('../assets/lolbg.jpg') no-repeat center center/cover; /* Background image */
  background-color: #0d1b2a;
  color: #fff;
  text-align: center;
  margin-left: auto;
  max-width: 1000px;
  position: relative;
}

.lol-header {
  background-image: url('../assets/bast.jpeg');
  background-size: cover;
  padding: 20px;
}

.lol-header h1 {
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, color 0.3s ease; /* Smooth transition */
}

.lol-header h1:hover {
  transform: scale(1.1); /* Enlarge header on hover */
  color: #ff6347; /* Change color to Tomato */
}

.hero {
  padding: 40px 20px;
}

.hero h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.champion-card {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.champion-card:hover {
  transform: scale(1.05); /* Slightly enlarge the card */
  box-shadow: 0 0 30px rgba(0, 0, 0, 1); /* Enhance shadow on hover */
}

.champion-image {
  width: 200px;
  height: 200px;
  border-radius: 15px;
  margin-right: 20px;
  transition: transform 0.3s ease;
}

.champion-image:hover {
  transform: scale(1.1); /* Slight zoom on image hover */
}

.champion-info h3 {
  font-size: 1.5rem;
  color: #1e90ff;
  margin-bottom: 10px;
}

.champion-description {
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

.champion-quote {
  font-size: 1.1rem;
  font-style: italic;
  color: #ccc;
  transition: color 0.3s ease;
}

.champion-quote:hover {
  color: #1e90ff; /* Change color on hover */
}

.lore {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
  margin-top: 20px;
  text-align: left;
}

.lore h2 {
  font-size: 2rem;
  margin-bottom: 10px;
}

.lore-facts {
  list-style-type: none;
  padding: 0;
  font-size: 1.1rem;
  line-height: 1.8;
}

.lore-facts li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 15px;
  padding-left: 20px;
}

.lore-icon {
  font-size: 2rem;
  margin-right: 15px;
  color: #1e90ff;
}

.lore-content {
  flex-grow: 1;
  transition: color 0.3s ease;
}

.lore-content:hover {
  color: #ff6347; /* Change color on hover */
}

footer {
  background-color: #1e1e1e;
  padding: 20px;
  text-align: center;
}

footer .social-links {
  list-style: none;
  padding: 0;
}

footer .social-links li {
  display: inline;
  margin: 0 10px;
}

footer a {
  color: #1e90ff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
}

footer a:hover {
  text-decoration: underline;
  color: #394fca; /* Change color on hover */
}

</style>
