<template>
  <nav class="nav" :class="{ 'hidden': isHidden }">
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/102-cagadas">102 Cagadas del petrismo</RouterLink>
    <RouterLink to="/gastos-hormiga">Gastos Hormiga</RouterLink>
    <RouterLink to="/mis-compromisos">Mis Compromisos</RouterLink>
    <RouterLink to="/quien-soy">Quién Soy</RouterLink>
    <RouterLink to="/unete">Únete</RouterLink>
    <a href="https://contacto.germanricaurte.com/contacto/" target="_blank" rel="noopener noreferrer">Contacto</a>
  </nav>

  <main>
    <RouterView />
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Header from './components/Header.vue'

const isHidden = ref(false)
const lastScrollY = ref(0)
const scrollThreshold = 10

const handleScroll = () => {
  const currentScrollY = window.scrollY

  if (currentScrollY < 100) {
    isHidden.value = false
  } else if (Math.abs(currentScrollY - lastScrollY.value) > scrollThreshold) {
    if (currentScrollY > lastScrollY.value) {
      isHidden.value = true
    } else {
      isHidden.value = false
    }
    lastScrollY.value = currentScrollY
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  lastScrollY.value = window.scrollY
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  background: #111;
  transition: transform 0.3s ease;
  transform: translateY(0);
}

.nav.hidden {
  transform: translateY(-100%);
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background 0.2s ease;
}

.nav a:hover {
  background: rgba(255, 255, 255, 0.1);
}

.nav a.router-link-active {
  font-weight: bold;
  background: rgba(255, 255, 255, 0.15);
  border-bottom: 2px solid white;
}

main {
  padding-top: 60px;
}

@media (max-width: 1024px) {
  .nav {
    gap: 0.8rem;
    padding: 0.8rem;
  }

  .nav a {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
}

@media (max-width: 768px) {
  .nav {
    position: static;
    background: #111;
    padding: 0;
    transform: none !important;
  }

  .nav.hidden {
    transform: none !important;
  }

  .nav a {
    text-align: center;
    font-size: 0.95rem;
    padding: 0.8rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  }

  main {
    padding-top: 0;
  }
}

@media (max-width: 480px) {
  .nav {
    position: static;
  }

  .nav a {
    font-size: 0.9rem;
    padding: 0.9rem;
  }
}
</style>
