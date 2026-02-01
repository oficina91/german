<template>
  <div class="sobre-mi">
    <h1 class="red animate-title">¿Quién soy?</h1>
    
    <!-- Sección Hero con foto -->
    <div class="hero-section">
      <div class="foto-container">
        <img src="/img/foto_german.png" alt="Germán Ricaurte" class="foto-principal">
        <div class="foto-overlay"></div>
      </div>
      <div class="intro-text">
        <p class="highlight">Nací en Bogotá, tengo 33 años, soy economista y magíster en derecho, gobierno y gestión de la justicia.</p>
        <p class="nnegro">A pesar de que ningún miembro de mi familia había participado antes en la política, desde muy temprana edad supe que era mi vocación, pues la lectura y las noticias diarias me mostraron que es la herramienta más poderosa para transformar la sociedad.</p>
      </div>
    </div>

    <!-- Sección con imagen de noticias -->
    <div class="imagen-float-section">
      <img src="/img/noticias.png" alt="Noticias" class="imagen-float-left">
      <div class="text-content">
        <h2 class="section-title">Mis inicios en la política</h2>
        <p class="nnegro">A los 19 años fui elegido Edil de Chapinero con el respaldo de un grupo de amigos y una propuesta responsable. Durante mi periodo me destaqué por la mayor asistencia a debates y la presentación de numerosos proyectos y ponencias.</p>
        <p class="nnegro">Ejercí control político denunciando fallas en seguridad, señalización y malla vial, promoví la activación del Consejo Local de Propiedad Horizontal, impulsé mayores recursos para seguridad y apoyé la creación del primer Consejo Local de Protección y Bienestar Animal. Asimismo, lideré debates sobre microtráfico, hurto, obras de infraestructura y manejo de recursos ambientales y culturales.</p>
      </div>
    </div>

    <!-- Tarjeta de experiencia -->
    <div class="card-section">
      <div class="experience-card">
        <h3>Experiencia en el sector público</h3>
        <p >Posteriormente trabajé como asesor de la Concejal Marisol Gómez, desarrollando debates sobre seguridad, infraestructura, valorización y manejo de la pandemia, destacándose la construcción de la ponencia del cupo de endeudamiento.</p>
        <p>Más adelante, desde la administración distrital, en la Secretaría de Desarrollo Económico y la Secretaría General de Bogotá, lideré equipos territoriales para llevar programas de empleo y emprendimiento a las localidades y realicé seguimiento a grandes proyectos de infraestructura junto al alcalde Carlos Fernando Galán, fortaleciendo además el relacionamiento con gremios, comunidades y la comunicación con la ciudadanía en contextos de crisis.</p>
      </div>
    </div>

    <!-- Sección con imagen a la derecha -->
    <div class="imagen-float-section reverse">
      <img src="/img/hablando_con_la_gente.jpg" alt="Hablando con la gente" class="imagen-float-right">
      <div class="text-content">
        <h2 class="section-title">Experiencia en el sector privado</h2>
        <p class="nnegro">Trabajé durante cuatro años en la empresa privada, principalmente en el sector de la movilidad sostenible y las bicicletas, lo que me permitió conocer de primera mano las dificultades de emprender, generar empleo y cumplir con las obligaciones tributarias y regulatorias, así como competir en mercados afectados por la informalidad y el contrabando.</p>
        <p class="nnegro">Mi pasión por recorrer Colombia me llevó a visitar los 32 departamentos, experiencia que fortaleció mi compromiso con la protección de nuestra riqueza cultural y ambiental, y me permitió dimensionar los profundos retos del país en materia de deforestación, minería ilegal, narcotráfico, pobreza e infraestructura.</p>
      </div>
    </div>

    <!-- Sección de iniciativas -->
    <div class="initiatives-section">
      <h2 class="section-title centered">Mis iniciativas ciudadanas</h2>
      <div class="initiatives-grid">
        <div class="initiative-card">
          <div class="icon">🔍</div>
          <h4>Unidad Contra el Gasto Hormiga</h4>
          <p>Veeduría ciudadana enfocada en denunciar el despilfarro de recursos públicos y prácticas irregulares en el Estado, visibilizando tanto gastos innecesarios como contrataciones cuestionables de alto impacto fiscal.</p>
        </div>
        <div class="initiative-card">
          <div class="icon">📢</div>
          <h4>Ciudadano Preocupado</h4>
          <p>Ejercicio de pedagogía democrática en redes sociales, promoviendo la participación juvenil, la denuncia de la corrupción y el control ciudadano con un lenguaje moderno y cercano.</p>
        </div>
        <div class="initiative-card">
          <div class="icon">⚖️</div>
          <h4>Participación en reformas</h4>
          <p>Participación activa como ciudadano en debates de reformas clave, como propiedad horizontal, reformas tributarias y una iniciativa para fortalecer la protección penal de las personas con discapacidad.</p>
        </div>
      </div>
    </div>

    <!-- Sección de determinación -->
    <div class="determination-section">
      <div class="quote-container">
        <h2 class="section-title">¿Por qué insisto?</h2>
        <div class="stats-row">
          <div class="stat-box">
            <span class="stat-number">2015</span>
            <span class="stat-label">Concejo de Bogotá</span>
            <span class="stat-votes">~7,500 votos</span>
          </div>
          <div class="stat-box">
            <span class="stat-number">2022</span>
            <span class="stat-label">Cámara de Representantes</span>
            <span class="stat-votes">+12,700 votos</span>
          </div>
        </div>
        <p class="quote-text">Porque cuento con un equipo de trabajo maravilloso, compuesto por personas trabajadoras, intachables, inspiradoras, con quienes hemos desarrollado nuestras campañas sin maquinarias, escuchando a la gente, difundiendo las propuestas en la calle y a través de las redes sociales.</p>
        <p class="highlight-box">Estamos orgullosos porque hicimos las cosas bien y estamos convencidos de que se pueden ganar elecciones sin hacer trampa, sin engañar a la gente y sin comprar votos. <strong>En esta ocasión lo vamos a lograr.</strong></p>
      </div>
    </div>

    <!-- Video -->
    <div class="video-section">
      <h2 class="section-title centered">Conoce más sobre mi propuesta</h2>
      <div class="video-container">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/OdnQZFKPcas?rel=0"
          title="Video propuesta Germán Ricaurte"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Imagen final -->
    <div class="final-image-section">
      <img src="/img/ferrocarril.jpg" alt="Ferrocarril" class="imagen-final">
      <div class="image-caption">Comprometido con el desarrollo y la infraestructura de Colombia</div>
    </div>

    <footer class="page-footer">
      <p>Todos los derechos reservados Germán Ricaurte 2026</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SobreMi',
  mounted() {
    this.observeElements();
  },
  methods: {
    observeElements() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      const elements = document.querySelectorAll('.hero-section, .imagen-float-section, .card-section, .initiatives-section, .determination-section, .video-section, .final-image-section');
      elements.forEach(el => observer.observe(el));
    }
  }
}
</script>

<style scoped>
.sobre-mi {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* Animación del título */
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
  text-align: center;
  margin-bottom: 3rem;
  font-size: 3em;
}

/* Hero Section */
.hero-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.hero-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.foto-container {
  position: relative;
  overflow: hidden;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(229, 57, 53, 0.3);
}

.foto-principal {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.5s ease;
}

.foto-container:hover .foto-principal {
  transform: scale(1.05);
}

.foto-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100px;
  background: linear-gradient(to top, rgba(229, 57, 53, 0.6), transparent);
}

.intro-text p {
  font-size: 1.15em;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.highlight {
  font-weight: 600;
  color: #e53935;
  font-size: 1.25em !important;
  border-left: 4px solid #e53935;
  padding-left: 1.5rem;
  margin-bottom: 2rem !important;
}

.nnegro {
  color: #000000;
}

/* Secciones con imágenes flotantes */
.imagen-float-section {
  display: flex;
  gap: 2rem;
  margin: 4rem 0;
  align-items: flex-start;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s ease-out;
}

.imagen-float-section.visible {
  opacity: 1;
  transform: translateX(0);
}

.imagen-float-section.reverse {
  flex-direction: row-reverse;
  transform: translateX(30px);
}

.imagen-float-left,
.imagen-float-right {
  width: 40%;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.imagen-float-left:hover,
.imagen-float-right:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 40px rgba(229, 57, 53, 0.25);
}

.text-content {
  flex: 1;
}

.section-title {
  color: #e53935;
  font-size: 2em;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: #e53935;
}

.section-title.centered {
  text-align: center;
}

.section-title.centered::after {
  left: 50%;
  transform: translateX(-50%);
}

/* Tarjeta de experiencia */
.card-section {
  margin: 4rem 0;
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s ease-out;
}

.card-section.visible {
  opacity: 1;
  transform: scale(1);
}

.experience-card {
  background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
  padding: 3rem;
  border-radius: 15px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  border-left: 5px solid #e53935;
}

.experience-card h3 {
  color: #e53935;
  font-size: 1.8em;
  margin-bottom: 1.5rem;
}

/* Sección de iniciativas */
.initiatives-section {
  margin: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.initiatives-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.initiatives-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.initiative-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  text-align: center;
}

.initiative-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(229, 57, 53, 0.2);
}

.icon {
  font-size: 3em;
  margin-bottom: 1rem;
}

.initiative-card h4 {
  color: #e53935;
  font-size: 1.3em;
  margin-bottom: 1rem;
}

/* Sección de determinación */
.determination-section {
  background: linear-gradient(135deg, #e53935 0%, #c62828 100%);
  color: white;
  padding: 4rem 3rem;
  border-radius: 20px;
  margin: 5rem 0;
  box-shadow: 0 10px 40px rgba(229, 57, 53, 0.3);
  opacity: 0;
  transform: scale(0.95);
  transition: all 0.8s ease-out;
}

.determination-section.visible {
  opacity: 1;
  transform: scale(1);
}

.determination-section .section-title {
  color: white;
  text-align: center;
  font-size: 2.5em;
}

.determination-section .section-title::after {
  background: white;
  left: 50%;
  transform: translateX(-50%);
}

.stats-row {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.stat-box {
  background: rgba(255, 255, 255, 0.15);
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  min-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-number {
  font-size: 2.5em;
  font-weight: bold;
  display: block;
}

.stat-label {
  font-size: 1em;
  opacity: 0.9;
  display: block;
}

.stat-votes {
  font-size: 1.3em;
  font-weight: 600;
  display: block;
  margin-top: 0.5rem;
}

.quote-text {
  font-size: 1.2em;
  line-height: 1.8;
  text-align: center;
  margin: 2rem 0;
}

.highlight-box {
  background: rgba(255, 255, 255, 0.2);
  padding: 2rem;
  border-radius: 10px;
  font-size: 1.15em;
  line-height: 1.8;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

/* Video */
.video-section {
  margin: 5rem 0;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.video-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.video-container {
  max-width: 900px;
  margin: 2rem auto;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 15px;
}

/* Imagen final */
.final-image-section {
  margin: 5rem 0 3rem;
  text-align: center;
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.final-image-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.imagen-final {
  width: 100%;
  max-width: 1000px;
  border-radius: 15px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}

.image-caption {
  margin-top: 1.5rem;
  font-size: 1.2em;
  color: #666;
  font-style: italic;
}

/* Footer */
.page-footer {
  text-align: center;
  padding: 2rem 0;
  margin-top: 3rem;
  border-top: 2px solid #e0e0e0;
  color: #666;
}

/* Responsive */
@media (max-width: 968px) {
  .hero-section {
    grid-template-columns: 1fr;
  }

  .imagen-float-section,
  .imagen-float-section.reverse {
    flex-direction: column;
  }

  .imagen-float-left,
  .imagen-float-right {
    width: 100%;
  }

  .initiatives-grid {
    grid-template-columns: 1fr;
  }

  .stats-row {
    flex-direction: column;
    gap: 1.5rem;
  }

  .red {
    font-size: 2em;
  }

  .experience-card {
    padding: 2rem;
  }

  .determination-section {
    padding: 3rem 2rem;
  }
}

p {
  font-size: 1.1em;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: #333;
}

@media (prefers-color-scheme: dark) {
  .experience-card {
    background: linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%);
    color: rgba(255, 255, 255, 0.87);
  }

  .initiative-card {
    background: #2a2a2a;
    color: rgba(255, 255, 255, 0.87);
  }

  p {
    color: rgba(255, 255, 255, 0.87);
  }
}
</style>