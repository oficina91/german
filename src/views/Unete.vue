<template>
  <div class="unete-container">
    <div class="header-section">
      <h1 class="red animate-title">¡Únete!</h1>
      <p class="subtitle"> <span class="highlight-number"> ¡Haz parte de los102 Ciudadanos Preocupados!</span></p>
      <p class="description">Juntos podemos construir un mejor futuro para Colombia. Tu voz es importante y queremos escucharte.</p>
    </div>

    <div class="content-wrapper">
      <!-- Sección de WhatsApp -->
      <div class="whatsapp-card">
        <div class="whatsapp-icon">❤️</div>
        <h3>¡Únete a nuestra comunidad!</h3>
        <p>Mantente informado de todas nuestras actividades y eventos.</p>
        <a href="https://www.whatsapp.com/channel/0029VbAEBMrGk1FnWNrD0y11" target="_blank" class="whatsapp-button">
          <span class="wa-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </span>
          Únete al grupo de WhatsApp
        </a>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const memberCount = ref(87)
</script>

<style scoped>
.unete-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.animate-title {
  animation: fadeInDown 1s ease-out;
}

@keyframes fadeInDown {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.red {
  color: #e53935;
  font-size: 3.5em;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.8em;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
}

.highlight-number {
  color: #e53935;
  font-size: 1.2em;
  font-weight: 700;
}

.description {
  font-size: 1.2em;
  color: #666;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Content wrapper */
.content-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
}

/* WhatsApp Card */
.whatsapp-card {
  background: #f5f1e8;
  color: #333;
  padding: 3rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
  animation: fadeIn 0.8s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.whatsapp-icon {
  font-size: 4em;
  margin-bottom: 1rem;
}

.whatsapp-card h3 {
  font-size: 1.8em;
  margin-bottom: 1rem;
}

.whatsapp-card p {
  margin-bottom: 2rem;
  opacity: 0.95;
  font-size: 1.1em;
}

.whatsapp-button {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 2rem;
  background: #25D366;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1em;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.whatsapp-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

.wa-icon {
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wa-icon svg {
  width: 100%;
  height: 100%;
}


/* Responsive */
@media (max-width: 968px) {
  .whatsapp-card {
    padding: 2rem;
    margin: 0 1rem;
  }

  .red {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.4em;
  }

}

@media (prefers-color-scheme: dark) {
  .subtitle {
    color: rgba(255, 255, 255, 0.87);
  }

  .description {
    color: rgba(0, 0, 0, 0.7);
  }

}
</style>  