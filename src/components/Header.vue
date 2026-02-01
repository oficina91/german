<template>
  <header class="site-header" :class="{ 'scrolled': isScrolled, 'hidden': isHidden }">
    <button class="hamburger-btn" @click="toggleMenu" :class="{ 'active': menuOpen }">
      <span></span>
      <span></span>
      <span></span>
    </button>

    <div class="top-bar">
      <div class="logo-section">
        <h1 class="name">Germán Ricaurte</h1>
        <div class="number-102">
          <span>102</span>
        </div>
      </div>

      <div class="subtitle">
        <span class="red">Cámara Bogotá</span>
        <span>NUEVO LIBERALISMO</span>
      </div>
    </div>

    <div class="hero">
      <div class="candidate-photo-placeholder">
        <div class="photo-mock">Foto de Germán apuntando</div>
      </div>

      <div class="call-to-action">
        <router-link to="/quien-soy" class="btn-large">
          ¿Quién Soy?
        </router-link>
      </div>
    </div>

    <nav class="main-nav desktop-nav">
      <router-link to="/">INICIO</router-link>
      <router-link to="/quien-soy">¿QUIÉN SOY?</router-link>
      <router-link to="/mis-compromisos">MIS COMPROMISOS</router-link>
      <router-link to="/102-cagadas">102 CAGADAS DEL PETRISMO</router-link>
      <router-link to="/unete">ÚNETE</router-link>
      <router-link to="/gastos-hormiga">GASTOS HORMIGA</router-link>
    </nav>

    <div class="social-links desktop-social">
      <a href="#" target="_blank">WhatsApp</a>
      <a href="#" target="_blank">X</a>
      <a href="#" target="_blank">Instagram</a>
      <a href="#" target="_blank">YouTube</a>
      <a href="#" target="_blank">Facebook</a>
    </div>

    <div class="sidebar-overlay" :class="{ 'active': menuOpen }" @click="closeMenu"></div>

    <aside class="sidebar" :class="{ 'active': menuOpen }">
      <div class="sidebar-header">
        <h2>Menú</h2>
        <button class="close-btn" @click="closeMenu">&times;</button>
      </div>

      <nav class="sidebar-nav">
        <router-link to="/" @click="closeMenu">INICIO</router-link>
        <router-link to="/quien-soy" @click="closeMenu">¿QUIÉN SOY?</router-link>
        <router-link to="/mis-compromisos" @click="closeMenu">MIS COMPROMISOS</router-link>
        <router-link to="/102-cagadas" @click="closeMenu">102 CAGADAS DEL PETRISMO</router-link>
        <router-link to="/unete" @click="closeMenu">ÚNETE</router-link>
        <router-link to="/gastos-hormiga" @click="closeMenu">GASTOS HORMIGA</router-link>
      </nav>

      <div class="sidebar-social">
        <h3>Redes Sociales</h3>
        <a href="#" target="_blank">WhatsApp</a>
        <a href="#" target="_blank">X</a>
        <a href="#" target="_blank">Instagram</a>
        <a href="#" target="_blank">YouTube</a>
        <a href="#" target="_blank">Facebook</a>
      </div>
    </aside>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isScrolled: false,
      isHidden: false,
      lastScrollY: 0,
      scrollThreshold: 10,
      menuOpen: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.lastScrollY = window.scrollY;
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      this.isScrolled = currentScrollY > 50;

      if (currentScrollY < 100) {
        this.isHidden = false;
      } else if (Math.abs(currentScrollY - this.lastScrollY) > this.scrollThreshold) {
        if (currentScrollY > this.lastScrollY) {
          this.isHidden = true;
        } else {
          this.isHidden = false;
        }
        this.lastScrollY = currentScrollY;
      }
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
      if (this.menuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
    },
    closeMenu() {
      this.menuOpen = false;
      document.body.style.overflow = '';
    }
  }
}
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: linear-gradient(to bottom, #fff8e1, #f5e8c7);
  border-bottom: 4px solid #c00;
  text-align: center;
  padding: 20px 0;
  transition: transform 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
  transform: translateY(0);
}

.site-header.hidden {
  transform: translateY(-100%);
}

.site-header.scrolled {
  background: linear-gradient(to bottom, rgba(255, 248, 225, 0.95), rgba(245, 232, 199, 0.95));
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.hamburger-btn {
  display: none;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 2000;
  background: #c00;
  border: none;
  border-radius: 8px;
  width: 50px;
  height: 50px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0;
  box-shadow: 0 4px 12px rgba(200, 0, 0, 0.4);
  transition: all 0.3s ease;
}

.hamburger-btn:hover {
  background: #a00;
  transform: scale(1.05);
}

.hamburger-btn span {
  display: block;
  width: 28px;
  height: 3px;
  background: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.hamburger-btn.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-btn.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-btn.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1500;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.sidebar-overlay.active {
  opacity: 1;
  visibility: visible;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  height: 100vh;
  background: linear-gradient(to bottom, #fff8e1, #f5e8c7);
  z-index: 1600;
  transform: translateX(100%);
  transition: transform 0.3s ease;
  overflow-y: auto;
  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.2);
}

.sidebar.active {
  transform: translateX(0);
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 2px solid #c00;
  background: #fff;
}

.sidebar-header h2 {
  margin: 0;
  color: #c00;
  font-size: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 2.5rem;
  color: #c00;
  cursor: pointer;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  transform: scale(1.2);
  color: #a00;
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  padding: 20px 0;
}

.sidebar-nav a {
  color: #c00;
  font-weight: bold;
  text-decoration: none;
  padding: 15px 20px;
  border-bottom: 1px solid rgba(200, 0, 0, 0.1);
  transition: all 0.3s ease;
  font-size: 1rem;
}

.sidebar-nav a:hover,
.sidebar-nav a.router-link-active {
  background: rgba(200, 0, 0, 0.1);
  padding-left: 30px;
}

.sidebar-social {
  padding: 20px;
  border-top: 2px solid #c00;
  margin-top: 20px;
}

.sidebar-social h3 {
  color: #c00;
  margin: 0 0 15px;
  font-size: 1.2rem;
}

.sidebar-social a {
  display: block;
  color: #333;
  font-weight: bold;
  text-decoration: none;
  padding: 10px 0;
  transition: all 0.2s ease;
}

.sidebar-social a:hover {
  color: #c00;
  padding-left: 10px;
}

.top-bar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}

.name {
  font-size: 3.5rem;
  font-weight: bold;
  margin: 0;
  color: #000;
}

.number-102 {
  background: #c00;
  color: white;
  font-size: 5rem;
  font-weight: bold;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: -80px 0 20px;
  border: 8px solid white;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.subtitle {
  font-size: 1.4rem;
  margin-top: -10px;
}

.red { color: #c00; font-weight: bold; }

.hero {
  position: relative;
  margin: 40px 0 20px;
}

.candidate-photo-placeholder {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  height: 400px;
  background: #ddd;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.2rem;
}

.btn-large {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #c00;
  color: white;
  padding: 15px 40px;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(200,0,0,0.4);
  transition: all 0.3s;
}

.btn-large:hover {
  background: #a00;
  transform: translateX(-50%) scale(1.05);
}

.main-nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin: 30px 0;
  font-size: 1.1rem;
}

.main-nav a {
  color: #c00;
  font-weight: bold;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 6px;
  transition: background 0.3s;
}

.main-nav a:hover,
.main-nav a.router-link-active {
  background: rgba(200,0,0,0.1);
}

.social-links {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 25px;
}

.social-links a {
  color: #333;
  font-weight: bold;
  text-decoration: none;
}

@media (max-width: 1024px) {
  .name { font-size: 3rem; }
  .number-102 { font-size: 4.5rem; width: 160px; height: 160px; margin: -70px 0 20px; }
  .subtitle { font-size: 1.2rem; }
  .main-nav { font-size: 1rem; gap: 15px; }
  .btn-large { font-size: 1.4rem; padding: 14px 35px; }
}

@media (max-width: 768px) {
  .hamburger-btn {
    display: flex;
  }

  .desktop-nav,
  .desktop-social {
    display: none;
  }

  .site-header {
    padding: 15px 0;
    padding-right: 80px;
  }

  .name { font-size: 2.5rem; }
  .number-102 {
    font-size: 3.5rem;
    width: 120px;
    height: 120px;
    margin: -50px 0 15px;
    border: 6px solid white;
  }
  .subtitle { font-size: 1rem; }
  .btn-large { font-size: 1.2rem; padding: 12px 28px; }

  .sidebar {
    width: 280px;
  }
}

@media (max-width: 480px) {
  .hamburger-btn {
    top: 15px;
    right: 15px;
    width: 45px;
    height: 45px;
  }

  .hamburger-btn span {
    width: 24px;
    height: 2.5px;
  }

  .site-header {
    padding-right: 70px;
  }

  .name { font-size: 2rem; }
  .number-102 {
    font-size: 3rem;
    width: 100px;
    height: 100px;
    margin: -40px 0 10px;
    border: 5px solid white;
  }
  .subtitle { font-size: 0.9rem; }
  .btn-large {
    font-size: 1.1rem;
    padding: 10px 24px;
    bottom: 10px;
  }
  .candidate-photo-placeholder { height: 250px; }

  .sidebar {
    width: 260px;
  }

  .sidebar-header h2 {
    font-size: 1.3rem;
  }

  .sidebar-nav a {
    font-size: 0.95rem;
    padding: 12px 15px;
  }

  .sidebar-social h3 {
    font-size: 1.1rem;
  }

  .sidebar-social a {
    font-size: 0.9rem;
  }
}
</style>