<template>
  <div class="unete-container">
    <div class="header-section">
      <h1 class="red animate-title">¡Únete!</h1>
      <p class="subtitle"> <span class="highlight-number"> ¡Haz parte de los102 Ciudadanos Preocupados!</span></p>
      <p class="description">Juntos podemos construir un mejor futuro para Colombia. Tu voz es importante y queremos escucharte.</p>
    </div>

    <div class="content-wrapper">
      <!-- Formulario -->
      <div class="form-section">
        <div class="form-card">
          <h2>Completa tus datos</h2>
          <form @submit.prevent="submitForm" class="contact-form">
            <div class="form-group">
              <label for="name">
                <span class="icon">👤</span>
                Nombre completo
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="Ej: Juan Pérez" 
                v-model="form.name" 
                required
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label for="email">
                <span class="icon">✉️</span>
                Correo electrónico
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="ejemplo@correo.com" 
                v-model="form.email" 
                required
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label for="phone">
                <span class="icon">📱</span>
                Número de contacto
              </label>
              <input 
                type="tel" 
                id="phone"
                placeholder="300 123 4567" 
                v-model="form.phone" 
                required
                class="form-input"
              >
            </div>

            <div class="form-group">
              <label for="message">
                <span class="icon">💬</span>
                Déjanos tu mensaje (opcional)
              </label>
              <textarea 
                id="message"
                placeholder="Cuéntanos por qué quieres unirte o comparte tus ideas..." 
                v-model="form.message"
                rows="4"
                class="form-textarea"
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              <span v-if="!isSubmitting">Enviar mi información</span>
              <span v-else>Enviando...</span>
              <span class="button-icon">→</span>
            </button>
          </form>

          <div v-if="showSuccess" class="success-message">
            <span class="success-icon">✓</span>
            ¡Gracias por unirte! Pronto nos pondremos en contacto contigo.
          </div>
        </div>
      </div>

      <!-- Sección de WhatsApp y beneficios -->
      <div class="info-section">
        <div class="whatsapp-card">
          <div class="whatsapp-icon">❤️</div>
          <h3>¡Únete a nuestra comunidad!</h3>
          <p>Mantente informado de todas nuestras actividades y eventos.</p>
          <a href="https://chat.whatsapp.com/tu-enlace-aqui" target="_blank" class="whatsapp-button">
            <span class="wa-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </span>
            Únete al grupo de WhatsApp
          </a>
        </div>

        <div class="benefits-card">
          <h3>¿Qué obtienes al unirte?</h3>
          <ul class="benefits-list">
            <li>
              <span class="check-icon">✓</span>
              <div>
                <strong>Información exclusiva</strong>
                <p>Entérate primero de nuestras propuestas y eventos</p>
              </div>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <div>
                <strong>Participa activamente</strong>
                <p>Tu opinión cuenta en la construcción de propuestas</p>
              </div>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <div>
                <strong>Sé parte del cambio</strong>
                <p>Contribuye a transformar nuestra sociedad</p>
              </div>
            </li>
            <li>
              <span class="check-icon">✓</span>
              <div>
                <strong>Networking</strong>
                <p>Conecta con ciudadanos comprometidos</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Sección de estadísticas -->
    <div class="stats-section">
      <div class="stat-item">
        <div class="stat-number">{{ memberCount }}</div>
        <div class="stat-label">Miembros activos</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">32</div>
        <div class="stat-label">Departamentos</div>
      </div>
      <div class="stat-item">
        <div class="stat-number">100%</div>
        <div class="stat-label">Compromiso</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({ 
  name: '', 
  email: '', 
  phone: '', 
  message: '' 
})

const isSubmitting = ref(false)
const showSuccess = ref(false)
const memberCount = ref(87)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simula el envío del formulario
  setTimeout(() => {
    isSubmitting.value = false
    showSuccess.value = true
    
    // Limpia el formulario
    form.value = { name: '', email: '', phone: '', message: '' }
    
    // Oculta el mensaje de éxito después de 5 segundos
    setTimeout(() => {
      showSuccess.value = false
    }, 5000)

    // Aquí puedes agregar tu lógica de envío real
    console.log('Formulario enviado:', form.value)
  }, 1500)
}
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
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Formulario */
.form-section {
  animation: slideInLeft 0.8s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.form-card {
  background: white;
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 2px solid #f5f5f5;
}

.form-card h2 {
  color: #ffffff;
  font-size: 2em;
  margin-bottom: 2rem;
  text-align: center;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-group label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
  font-size: 1.05em;
}

.icon {
  font-size: 1.2em;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 1rem 1.2rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1em;
  font-family: inherit;
  transition: all 0.3s ease;
  background: #fafafa;
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: #e53935;
  background: white;
  box-shadow: 0 0 0 3px rgba(229, 57, 53, 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  width: 100%;
  padding: 1.2rem 2rem;
  background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.submit-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(229, 57, 53, 0.4);
}

.submit-button:active {
  transform: translateY(0);
}

.button-icon {
  font-size: 1.5em;
  transition: transform 0.3s ease;
}

.submit-button:hover .button-icon {
  transform: translateX(5px);
}

.success-message {
  margin-top: 1.5rem;
  padding: 1.5rem;
  background: linear-gradient(135deg, #4caf50 0%, #388e3c 100%);
  color: white;
  border-radius: 10px;
  text-align: center;
  font-weight: 600;
  animation: slideDown 0.5s ease-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.success-icon {
  font-size: 1.5em;
  background: white;
  color: #4caf50;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Info Section */
.info-section {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  animation: slideInRight 0.8s ease-out;
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

/* WhatsApp Card */
.whatsapp-card {
  background: #e53935;
  color: white;
  padding: 2.5rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 10px 30px rgba(37, 211, 102, 0.3);
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
  background: white;
  color: #25D366;
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

/* Benefits Card */
.benefits-card {
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.benefits-card h3 {
  color: #ffffff;
  font-size: 1.6em;
  margin-bottom: 1.5rem;
  text-align: center;
}

.benefits-list {
  list-style: none;
  padding: 0;
}

.benefits-list li {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  align-items: flex-start;
}

.check-icon {
  background: #e53935;
  color: white;
  width: 28px;
  height: 28px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-weight: bold;
  font-size: 0.9em;
}

.benefits-list strong {
  color: #333;
  font-size: 1.1em;
  display: block;
  margin-bottom: 0.3rem;
}

.benefits-list p {
  color: #666;
  margin: 0;
  font-size: 0.95em;
  line-height: 1.5;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
  padding: 3rem;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(229, 57, 53, 0.3);
}

.stat-item {
  text-align: center;
  color: white;
}

.stat-number {
  font-size: 3.5em;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.2em;
  opacity: 0.95;
}

/* Responsive */
@media (max-width: 968px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 2rem;
  }

  .red {
    font-size: 2.5em;
  }

  .subtitle {
    font-size: 1.4em;
  }

  .stats-section {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .stat-number {
    font-size: 2.5em;
  }
}

@media (prefers-color-scheme: dark) {
  .subtitle {
    color: rgba(255, 255, 255, 0.87);
  }

  .description {
    color: rgba(0, 0, 0, 0.7);
  }

  .form-card {
    background: #e53935;
    border-color: #404040;
  }

  .form-group label {
    color: rgba(255, 255, 255, 0.87);
  }

  .form-input,
  .form-textarea {
    background: #fefae2;
    color: rgba(255, 255, 255, 0.87);
    border-color: #404040;
  }

  .form-input:focus,
  .form-textarea:focus {
    background: #2a2a2a;
  }

  .benefits-card {
    background: #e53935;
  }

  .benefits-list strong {
    color: rgba(255, 255, 255, 0.87);
  }

  .benefits-list p {
    color: rgba(255, 255, 255, 0.7);
  }
}
</style>  