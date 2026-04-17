<template>
  <div class="navbar">
      <div class="container">
          <nav class="nav-container">
              <!-- Logo -->
              <div class="logo">
                  <img src="@/assets/BCC1.png" alt="Logo" />
                  <span>BOGOR CHAMPIONS CUP</span>
              </div>

              <!-- Menu Desktop -->
              <ul class="nav-menu" :class="{ 'active': isMenuOpen }">
                  <li><router-link to="/" @click="closeMenu">Home</router-link></li>
                  <li><router-link to="/tournaments" @click="closeMenu">Tournaments</router-link></li>
                  <li><router-link to="/teams" @click="closeMenu">Teams</router-link></li>
                  <li><router-link to="/players" @click="closeMenu">Players</router-link></li>
              </ul>

              <!-- Hamburger Menu Button (Mobile) -->
              <div class="hamburger" :class="{ 'active': isMenuOpen }" @click="toggleMenu">
                  <span></span>
                  <span></span>
                  <span></span>
              </div>
          </nav>
      </div>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
  data() {
      return {
          isMenuOpen: false
      }
  },
  methods: {
      toggleMenu() {
          this.isMenuOpen = !this.isMenuOpen;
          // Prevent scrolling when menu is open
          if (this.isMenuOpen) {
              document.body.style.overflow = 'hidden';
          } else {
              document.body.style.overflow = '';
          }
      },
      closeMenu() {
          this.isMenuOpen = false;
          document.body.style.overflow = '';
      }
  },
  watch: {
      // Close menu when route changes
      '$route'() {
          this.closeMenu();
      }
  },
  beforeUnmount() {
      // Clean up body overflow when component is destroyed
      document.body.style.overflow = '';
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #3852B4 0%, #2a3f8a 100%);
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
}
/* 
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
} */

/* Container navbar */
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  position: relative;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  color: white;
  font-weight: 700;
  font-size: 18px;
  letter-spacing: 0.5px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1001;
}

.logo img {
  height: 70px;
  width: auto;
  transition: transform 0.3s ease;
}

.logo img:hover {
  transform: scale(1.05);
}

.logo span {
  background: linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-size: clamp(14px, 4vw, 18px);
}

/* Menu Desktop */
.nav-menu {
  list-style: none;
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0;
}

.navbar ul li {
  position: relative;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 16px;
  padding: 8px 0;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
}

/* Underline animation */
.navbar a::after {
  content: '';
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background: linear-gradient(90deg, #fff, #FFD700);
  transition: width 0.3s ease;
}

.navbar a:hover::after {
  width: 100%;
}

.navbar a:hover {
  transform: translateY(-2px);
  color: #FFD700;
}

/* Hamburger Menu Button */
.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
}

.hamburger span {
  display: block;
  width: 100%;
  height: 3px;
  background-color: white;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.hamburger.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* ========== MOBILE MENU DENGAN ANIMASI SMOOTH ========== */
@media screen and (max-width: 768px) {
  .container {
      padding: 0 15px;
  }

  .nav-container {
      padding: 10px 0;
  }

  .logo img {
      height: 50px;
  }

  .logo span {
      font-size: 14px;
  }

  .hamburger {
      display: flex;
  }

  /* Menu mobile - menggunakan transform untuk animasi yang smooth */
  .nav-menu {
      position: fixed;
      left: 0;
      right: 0;
      top: 75px;
      flex-direction: column;
      background: linear-gradient(135deg, #3852B4 0%, #2a3f8a 100%);
      width: 100%;
      text-align: center;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      padding: 0;
      gap: 0;
      z-index: 999;
      margin: 0;
      border-radius: 0 0 20px 20px;
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
      
      /* Animasi dengan scale dan opacity */
      transform-origin: top;
      transform: scaleY(0);
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
      max-height: 0;
      overflow: hidden;
  }

  /* Menu saat aktif - animasi muncul smooth */
  .nav-menu.active {
      transform: scaleY(1);
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      max-height: 500px;
      padding: 20px 0;
      overflow-y: auto;
  }

  .navbar ul li {
      margin: 0;
      width: 100%;
      position: relative;
      
      /* Animasi per item menu */
      transform: translateY(-20px);
      opacity: 0;
      transition: all 0.3s ease;
      transition-delay: calc(var(--item-index, 0) * 0.05s);
  }

  /* Delay animasi untuk setiap menu item saat muncul */
  .nav-menu.active li {
      transform: translateY(0);
      opacity: 1;
  }

  /* Set delay untuk setiap menu item */
  .navbar ul li:nth-child(1) { --item-index: 1; }
  .navbar ul li:nth-child(2) { --item-index: 2; }
  .navbar ul li:nth-child(3) { --item-index: 3; }
  .navbar ul li:nth-child(4) { --item-index: 4; }

  /* Garis pemisah antar menu */
  .navbar ul li:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 10%;
      width: 80%;
      height: 1px;
      background: linear-gradient(90deg, 
          transparent 0%, 
          rgba(255, 255, 255, 0.3) 20%,
          rgba(255, 255, 255, 0.6) 50%,
          rgba(255, 255, 255, 0.3) 80%,
          transparent 100%
      );
      transform: scaleX(0);
      transition: transform 0.3s ease 0.2s;
  }

  /* Animasi garis pemisah saat menu terbuka */
  .nav-menu.active li:not(:last-child)::after {
      transform: scaleX(1);
  }

  .navbar a {
      font-size: 18px;
      padding: 15px 0;
      display: block;
      width: 100%;
      font-weight: 500;
      letter-spacing: 1px;
  }

  .navbar a::after {
      display: none;
  }

  .navbar a:hover {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(10px);
      color: #FFD700;
  }

  /* Efek ripple saat klik */
  .navbar ul li {
      transition: all 0.3s ease;
  }

  .navbar ul li:active {
      background: rgba(255, 255, 255, 0.05);
  }
}

/* Tablet Landscape */
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .nav-menu {
      gap: 20px;
  }

  .navbar a {
      font-size: 14px;
  }

  .logo span {
      font-size: 16px;
  }

  .logo img {
      height: 60px;
  }
}

/* Large Desktop */
@media screen and (min-width: 1400px) {
  .navbar a {
      font-size: 18px;
  }

  .logo span {
      font-size: 20px;
  }

  .logo img {
      height: 80px;
  }

  .nav-menu {
      gap: 40px;
  }
}

/* Small Mobile */
@media screen and (max-width: 480px) {
  .logo span {
      font-size: 12px;
  }

  .logo img {
      height: 40px;
  }

  .navbar a {
      font-size: 16px;
      padding: 12px 0;
  }

  .nav-menu {
      top: 65px;
  }
}

/* Prevent scroll when menu is open */
body.no-scroll {
  overflow: hidden;
}
</style>