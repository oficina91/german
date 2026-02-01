<template>
  <nav class="nav" :class="{ 'hidden': isHidden }">
    <RouterLink to="/">Inicio</RouterLink>
    <RouterLink to="/102-cagadas">102 Cagadas del petrismo</RouterLink>
    <RouterLink to="/gastos-hormiga">Gastos Hormiga</RouterLink>
    <RouterLink to="/mis-compromisos">Mis Compromisos</RouterLink>
    <RouterLink to="/quien-soy">Quién Soy</RouterLink>
    <RouterLink to="/unete">Únete</RouterLink>
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
}

.nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}

main {
  padding-top: 60px;
}
</style>
