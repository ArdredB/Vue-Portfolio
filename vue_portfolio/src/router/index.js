import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../views/LoginPage.vue';
import ProfilePage from '../views/ProfilePage.vue';
import ShowcasePage from '../views/ShowcasePage.vue';
import ContactPage from '../views/ContactPage.vue';
import CreativePage from '../views/CreativePage.vue';

// Define routes
const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: LoginPage },
  {
    path: '/portfolio',
    meta: { requiresAuth: true }, // Require authentication for all /portfolio routes
    children: [
      { path: 'profile', component: ProfilePage },
      { path: 'showcase', component: ShowcasePage },
      { path: 'contact', component: ContactPage },
      { path: 'creative', component: CreativePage },
    ],
  },
];

// Create the router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Authentication check function
const isAuthenticated = () => {
  return !!localStorage.getItem('isLoggedIn'); // Check if "isLoggedIn" is set in localStorage
};

// Navigation guard for authentication
router.beforeEach((to, from, next) => {
  // Check if the route requires authentication
  if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated()) {
    next('/login'); // Redirect to login if not authenticated
  } else {
    next(); // Allow navigation
  }
});

export default router;
