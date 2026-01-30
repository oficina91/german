<template>
  <nav class="nav">
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
import Header from './components/Header.vue'
</script>

<style scoped>
.nav {
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: #111;
}

.nav a {
  color: white;
  text-decoration: none;
}

.nav a.router-link-active {
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
