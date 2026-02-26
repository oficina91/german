<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-content">
        <div class="hero-text">
          <div class="title-with-button">
            <h1 class="main-title">Germán<br>Ricaurte</h1>
            <a href="https://contacto.germanricaurte.com/contacto/" target="_blank" rel="noopener noreferrer" class="contact-button">
              ÚNETE A LOS CIUDADANOS PREOCUPADOS
            </a>
          </div>
          <p class="hero-text-description">
            Candidato a la Cámara de
            Representantes por Bogotá
            Partido Nuevo Liberalismo #102
          </p>
          <p class="hero-subtitle">
            Economista bogotano de 33 años, magíster en derecho, gobierno y gestión de la justicia, con 14 años de experiencia en el sector público y privado. Ha sido Edil de Chapinero, asesor del Concejo de Bogotá, de la Secretaría de Desarrollo Económico y del alcalde Carlos Fernando Galán. Es el fundador de la Unidad Contra el Gasto Hormiga como veeduría ciudadana.
          </p>

          <router-link to="/quien-soy" class="hero-cta-button">
            ¿Quién Soy?
          </router-link>
        </div>
        <div class="hero-image">
          <img :src="candidateImg" alt="Germán Ricaurte">
        </div>
      </div>
    </section>

    <!-- Gasto Hormiga Section -->
    <section class="gasto-hormiga-section">
      <div class="section-content">
        <div class="section-text">
          <div class="logo-container">
            <img :src="logoImg" alt="Logo 102" class="logo-102">
          </div>
          <img src="/img/logo_gastos_hormiga.png" alt="Logo Gastos Hormiga" class="logo-gastos-hormiga">
          <h3 class="section-subtitle">
            Denunciamos Gastos inútiles
          </h3>
          <p class="section-description">
            Tenemos evidencia que identifica malas inversiones, gastos<br>
            innecesarios y pagos atrasados a los docentes, lo cual repercute en<br>
            los servicios que brinda el Distrito para los Bogotanos.
          </p>
          <router-link to="/gastos-hormiga" class="cta-button">Click Aquí</router-link>
        </div>
        <div class="section-image">
          <img src="/img/ollage.png" alt="Gasto Hormiga" class="feature-image">
        </div>
      </div>
    </section>

    <!-- Social Media Bar -->
    <div class="social-bar">
      <a href="https://www.whatsapp.com/channel/0029VbAEBMrGk1FnWNrD0y11" target="_blank" rel="noopener noreferrer" class="social-icon whatsapp">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
      <a href="https://linktr.ee/german_ricaurte" target="_blank" rel="noopener noreferrer" class="social-icon linktree">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="m13.736 5.853 4.005-4.117 2.325 2.38-4.2 4.005h5.908v3.305h-5.937l4.229 4.108-2.325 2.334-5.74-5.769-5.741 5.769-2.325-2.325 4.229-4.108H2.226V8.121h5.909l-4.2-4.004 2.324-2.381 4.005 4.117V0h3.472v5.853Z"/>
        </svg>
      </a>
      <a href="https://x.com/german_ricaurte" target="_blank" rel="noopener noreferrer" class="social-icon x">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href="https://www.instagram.com/german_ricaurte/" target="_blank" rel="noopener noreferrer" class="social-icon instagram">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      </a>
      <a href="https://www.youtube.com/@german_ricaurte" target="_blank" rel="noopener noreferrer" class="social-icon youtube">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      </a>
      <a href="https://www.facebook.com/germanricaurte" target="_blank" rel="noopener noreferrer" class="social-icon facebook">
        <svg viewBox="0 0 24 24" fill="currentColor" class="icon-svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// Imágenes desde la carpeta public/img
const candidateImg = '/img/German_Ricaurte.png'
const logoImg = '/img/Logo.png'
const gastoHormigaImg = '/img/gasto-hormiga-icon.png' // Necesitarás crear o agregar esta imagen
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.home-page {
  font-family: 'Arial Black', Arial, sans-serif;
  color: #000;
  background: #FEFAE2;
  overflow-x: hidden;
}

/* Hero Section */
.hero-section {
  background: #FEFAE2;
  padding: 80px 40px;
  position: relative;
  background-image: url('/img/Bogota_fondo.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(254, 250, 226, 0.85);
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.hero-text {
  padding-left: 40px;
}

.title-with-button {
  display: flex;
  align-items: center;
  gap: 30px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.main-title {
  font-size: 6rem;
  font-weight: 900;
  color: #C01718;
  line-height: 0.9;
  margin-bottom: 0;
  text-transform: none;
}

.contact-button {
  display: inline-block;
  background: #C01718;
  color: white;
  font-size: 1.3rem;
  font-weight: 900;
  padding: 12px 35px;
  border-radius: 50px;
  text-decoration: none;
  box-shadow: 0 6px 20px rgba(192, 23, 24, 0.4);
  transition: all 0.3s ease;
  white-space: nowrap;
  align-self: flex-end;
  margin-bottom: 10px;
}

.contact-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(192, 23, 24, 0.6);
  background: #a00;
}

.hero-text-description {
  font-size: 1.6rem;
  line-height: 1.5;
  color: #C01718;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Arial, sans-serif;
}

.hero-subtitle {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #000;
  font-weight: normal;
  font-family: Arial, sans-serif;
  margin-bottom: 30px;
}

.hero-cta-button {
  display: inline-block;
  background: #C01718;
  color: white;
  font-size: 1.8rem;
  font-weight: 900;
  padding: 18px 50px;
  border-radius: 50px;
  text-decoration: none;
  text-transform: none;
  box-shadow: 0 6px 20px rgba(192, 23, 24, 0.4);
  transition: all 0.3s ease;
  margin-top: 10px;
}

.hero-cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(192, 23, 24, 0.6);
  background: #a00;
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  max-height: 600px;
  object-fit: contain;
}

/* Gasto Hormiga Section */
.gasto-hormiga-section {
  background-color: #fefae2;
  background-image: url('/img/v602-nunoon-05-rippednotes.jpg');
  background-size: 100% auto;
  background-position: center;
  background-repeat: no-repeat;
  padding: 80px 40px;
  color: white;
}

.section-content {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 60px;
}

.logo-container {
  margin-bottom: 30px;
}

.logo-102 {
  width: 120px;
  height: auto;
}

.logo-gastos-hormiga {
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-bottom: 25px;
  display: block;
}

.section-subtitle {
  color: #C01718;
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 25px;
  line-height: 1.1;
}

.section-description {
  color: #000000;
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 35px;
  font-family: Arial, sans-serif;
  font-weight: normal;
}

.cta-button {
  display: inline-block;
  background: white;
  color: #C01718;
  font-size: 1.5rem;
  font-weight: 900;
  padding: 15px 45px;
  border-radius: 50px;
  text-decoration: none;
  text-transform: uppercase;
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  transition: all 0.3s ease;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.4);
}

.section-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-image {
  max-width: 100%;
  height: auto;
  max-height: 500px;
  object-fit: contain;
}

/* Social Bar */
.social-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #C01718;
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  z-index: 1000;
  box-shadow: 0 -4px 20px rgba(0,0,0,0.3);
}

.social-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #C01718;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: scale(1.15);
  box-shadow: 0 6px 16px rgba(0,0,0,0.4);
}

.icon-svg {
  width: 24px;
  height: 24px;
}

/* Responsive Design */
@media (max-width: 1200px) {
  .hero-content,
  .section-content {
    gap: 50px;
  }

  .main-title {
    font-size: 5rem;
  }

  .hero-text {
    padding-left: 20px;
  }
}

@media (max-width: 1024px) {
  .hero-content,
  .section-content {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .main-title {
    font-size: 4rem;
  }

  .hero-text {
    padding-left: 0;
    text-align: center;
  }

  .title-with-button {
    justify-content: center;
  }

  .hero-text-description {
    font-size: 1.4rem;
  }

  .hero-subtitle {
    font-size: 1.1rem;
  }

  .hero-cta-button {
    font-size: 1.6rem;
    padding: 15px 40px;
  }
}

@media (max-width: 768px) {
  .hero-section,
  .gasto-hormiga-section {
    padding: 40px 20px;
    padding-bottom: 100px;
  }

  .main-title {
    font-size: 3rem;
  }

  .contact-button {
    font-size: 1.1rem;
    padding: 10px 28px;
  }

  .title-with-button {
    gap: 15px;
  }

  .hero-text-description {
    font-size: 1.2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .hero-cta-button {
    font-size: 1.4rem;
    padding: 14px 35px;
  }

  .logo-gastos-hormiga {
    max-width: 250px;
  }

  .section-subtitle {
    font-size: 2rem;
  }

  .section-description {
    font-size: 1rem;
  }

  .cta-button {
    font-size: 1.2rem;
    padding: 12px 35px;
  }

  .social-bar {
    gap: 12px;
    padding: 12px 10px;
    flex-wrap: wrap;
  }

  .social-icon {
    width: 40px;
    height: 40px;
  }

  .icon-svg {
    width: 18px;
    height: 18px;
  }
}

@media (max-width: 480px) {
  .hero-section,
  .gasto-hormiga-section {
    padding: 30px 15px;
    padding-bottom: 120px;
  }

  .main-title {
    font-size: 2.2rem;
    line-height: 1;
  }

  .contact-button {
    font-size: 1rem;
    padding: 10px 24px;
  }

  .title-with-button {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }

  .hero-text-description {
    font-size: 1rem;
  }

  .hero-subtitle {
    font-size: 0.9rem;
  }

  .hero-cta-button {
    font-size: 1.2rem;
    padding: 12px 28px;
  }

  .logo-gastos-hormiga {
    max-width: 180px;
  }

  .section-subtitle {
    font-size: 1.5rem;
  }

  .section-description {
    font-size: 0.95rem;
  }

  .cta-button {
    font-size: 1.1rem;
    padding: 10px 28px;
  }

  .social-bar {
    gap: 8px;
    padding: 10px 5px;
  }

  .social-icon {
    width: 36px;
    height: 36px;
  }

  .icon-svg {
    width: 16px;
    height: 16px;
  }

  .feature-image {
    max-height: 350px;
  }
}
</style>
