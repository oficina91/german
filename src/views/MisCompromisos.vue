<template>
  <div class="compromisos-container">
    <div class="compromisos-wrapper">
      <!-- Header -->
      <div class="header-section">
        <h1 class="main-title">
           <span class="title-highlight"> Mis Compromisos</span>
        </h1>
        <div class="title-underline"></div>
        <p class="subtitle">
          Propuestas concretas para construir un país más justo y eficiente
        </p>
      </div>

      <!-- Cards Grid -->
      <div class="cards-grid">
        <!-- Card 1 -->
        <div class="card-item">
          <div class="card-header gradient-yellow">
            <div class="icon-circle circle-yellow">
              <svg class="icon-svg icon-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
              </svg>
            </div>
            <div class="number-badge badge-yellow">
              <span>01</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-yellow">Estado Eficiente</h3>
            <p class="card-text">
              Como Representante enfrentaré el <span class="text-highlight">populismo económico</span> y trabajaré por un Estado eficiente. Denunciaré el despilfarro, la burocracia excesiva y los gastos inútiles que hoy agravan el déficit fiscal.
            </p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="card-item">
          <div class="card-header gradient-blue">
            <div class="icon-circle circle-blue">
              <svg class="icon-svg icon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div class="number-badge badge-blue">
              <span>02</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-blue">Control de Impuestos</h3>
            <p class="card-text">
              Presentaré un proyecto para que ningún gobierno pueda <span class="text-highlight">subir un mismo impuesto</span> varias veces en un mismo periodo. Subir impuestos debe ser la excepción, no la regla.
            </p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="card-item">
          <div class="card-header gradient-purple">
            <div class="icon-circle circle-purple">
              <svg class="icon-svg icon-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
              </svg>
            </div>
            <div class="number-badge badge-purple">
              <span>03</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-purple">Prioridades Claras</h3>
            <p class="card-text">
              Defenderé que la inversión pública se concentre en las verdaderas prioridades: <span class="text-highlight">seguridad, salud y educación</span> pertinente para un mercado laboral que está cambiando por la inteligencia artificial.
            </p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="card-item">
          <div class="card-header gradient-green">
            <div class="icon-circle circle-green">
              <svg class="icon-svg icon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
              </svg>
            </div>
            <div class="number-badge badge-green">
              <span>04</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-green">Obras de Bogotá</h3>
            <p class="card-text">
              Haré seguimiento riguroso a las <span class="text-highlight">obras públicas de Bogotá</span> y seré un vocero firme de la ciudad para garantizar los recursos que necesitamos para proyectos estratégicos como la segunda línea del metro.
            </p>
          </div>
        </div>

        <!-- Card 5 -->
        <div class="card-item">
          <div class="card-header gradient-red">
            <div class="icon-circle circle-red">
              <svg class="icon-svg icon-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
              </svg>
            </div>
            <div class="number-badge badge-red">
              <span>05</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-red">Seguridad Equitativa</h3>
            <p class="card-text">
              No es justo que Bogotá tenga menos policías que otras ciudades. Impulsaré reglas claras para una <span class="text-highlight">distribución equitativa del pie de fuerza</span>.
            </p>
          </div>
        </div>

        <!-- Card 6 -->
        <div class="card-item">
          <div class="card-header gradient-indigo">
            <div class="icon-circle circle-indigo">
              <svg class="icon-svg icon-indigo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
              </svg>
            </div>
            <div class="number-badge badge-indigo">
              <span>06</span>
            </div>
            <div class="overlay-gradient"></div>
          </div>

          <div class="card-body">
            <h3 class="card-title title-indigo">Defensa de Derechos</h3>
            <p class="card-text">
              Me opondré a una <span class="text-highlight">Asamblea Constituyente</span> que ponga en riesgo nuestros derechos y nuestras libertades económicas.
            </p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'MisCompromisos'
}
</script>

<style scoped>
/* Reset de estilos del contenedor principal */
.compromisos-container {
  width: 100vw;
  min-height: 100vh;
  background-color: #fefae2;
  margin: 0;
  padding: 0;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

.compromisos-wrapper {
  max-width: 1400px;
  margin: 0 auto;
  padding: 4rem 1.5rem;
}

/* Header */
.header-section {
  text-align: center;
  margin-bottom: 4rem;
}

.main-title {
  font-size: 3.5rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.title-highlight {
  color: #c01718;
}

.title-underline {
  width: 6rem;
  height: 0.25rem;
  background-color: #eab308;
  margin: 0 auto 1.5rem;
}

.subtitle {
  color: #9ca3af;
  font-size: 1.25rem;
  max-width: 42rem;
  margin: 0 auto;
  line-height: 1.6;
}

/* Cards Grid */
.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 5rem;
}

@media (min-width: 768px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .cards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* Card Item */
.card-item {
  background-color: #c01718;
  border-radius: 1rem;
  overflow: hidden;
  border: 1px solid #3f3f46;
  transition: all 0.3s ease;
}

.card-item:hover {
  border-color: rgba(234, 179, 8, 0.5);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(234, 179, 8, 0.1);
  transform: translateY(-8px);
}

/* Card Header */
.card-header {
  position: relative;
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.gradient-yellow {
  background: linear-gradient(to bottom right, rgba(234, 179, 8, 0.2), #000000);
}

.gradient-blue {
  background: linear-gradient(to bottom right, rgba(59, 130, 246, 0.2), #000000);
}

.gradient-purple {
  background: linear-gradient(to bottom right, rgba(168, 85, 247, 0.2), #000000);
}

.gradient-green {
  background: linear-gradient(to bottom right, rgba(34, 197, 94, 0.2), #000000);
}

.gradient-red {
  background: linear-gradient(to bottom right, rgba(239, 68, 68, 0.2), #000000);
}

.gradient-indigo {
  background: linear-gradient(to bottom right, rgba(99, 102, 241, 0.2), #000000);
}

.overlay-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #000000, rgba(0, 0, 0, 0.5), transparent);
}

/* Icon Circle */
.icon-circle {
  position: relative;
  z-index: 10;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid;
  transition: transform 0.3s ease;
}

.card-item:hover .icon-circle {
  transform: scale(1.1);
}

.circle-yellow {
  background-color: rgba(234, 179, 8, 0.3);
  border-color: rgba(234, 179, 8, 0.5);
}

.circle-blue {
  background-color: rgba(59, 130, 246, 0.3);
  border-color: rgba(59, 130, 246, 0.5);
}

.circle-purple {
  background-color: rgba(168, 85, 247, 0.3);
  border-color: rgba(168, 85, 247, 0.5);
}

.circle-green {
  background-color: rgba(34, 197, 94, 0.3);
  border-color: rgba(34, 197, 94, 0.5);
}

.circle-red {
  background-color: rgba(239, 68, 68, 0.3);
  border-color: rgba(239, 68, 68, 0.5);
}

.circle-indigo {
  background-color: rgba(99, 102, 241, 0.3);
  border-color: rgba(99, 102, 241, 0.5);
}

.icon-svg {
  width: 2.5rem;
  height: 2.5rem;
}

.icon-yellow { color: #eab308; }
.icon-blue { color: #3b82f6; }
.icon-purple { color: #a855f7; }
.icon-green { color: #22c55e; }
.icon-red { color: #ef4444; }
.icon-indigo { color: #6366f1; }

/* Number Badge */
.number-badge {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid;
  z-index: 10;
  font-weight: bold;
  font-size: 1.125rem;
}

.badge-yellow {
  color: #eab308;
  border-color: rgba(234, 179, 8, 0.3);
}

.badge-blue {
  color: #3b82f6;
  border-color: rgba(59, 130, 246, 0.3);
}

.badge-purple {
  color: #a855f7;
  border-color: rgba(168, 85, 247, 0.3);
}

.badge-green {
  color: #22c55e;
  border-color: rgba(34, 197, 94, 0.3);
}

.badge-red {
  color: #ef4444;
  border-color: rgba(239, 68, 68, 0.3);
}

.badge-indigo {
  color: #6366f1;
  border-color: rgba(99, 102, 241, 0.3);
}

/* Card Body */
.card-body {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.75rem;
}

.title-yellow { color: #eab308; }
.title-blue { color: #3b82f6; }
.title-purple { color: #a855f7; }
.title-green { color: #22c55e; }
.title-red { color: #ef4444; }
.title-indigo { color: #6366f1; }

.card-text {
  color: #d1d5db;
  line-height: 1.6;
}

.text-highlight {
  color: #eab308;
  font-weight: 600;
}

/* Footer CTA */
.footer-cta {
  text-align: center;
  margin-top: 5rem;
}

.cta-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background-color: rgba(234, 179, 8, 0.1);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(234, 179, 8, 0.3);
  padding: 1rem 2rem;
  border-radius: 9999px;
}

.pulse-dot {
  width: 0.75rem;
  height: 0.75rem;
  background-color: #eab308;
  border-radius: 50%;
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

.cta-text {
  color: #eab308;
  font-weight: 600;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .main-title {
    font-size: 2.5rem;
  }
  
  .subtitle {
    font-size: 1rem;
  }
  
  .compromisos-wrapper {
    padding: 3rem 1rem;
  }
}
</style>