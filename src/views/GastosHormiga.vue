<template>
  <div class="gastos-hormiga-container">
    
    <div class="header-section">
      <img src="/img/logo_gastos_hormiga.png" alt="Germán Ricaurte" class="foto-principal" >
      <p class="subtitle">Vigilancia ciudadana al gasto público</p>
      <p class="description">
        Desde la <strong>Unidad Contra el Gasto Hormiga</strong> documentamos el mal uso de recursos públicos. 
        Cada peso cuenta y debe ser invertido responsablemente.
      </p>
    </div>

    <div class="stats-section">
      <div class="stat-card">
        <div class="stat-icon">📊</div>
        <div class="stat-number">{{ totalDenuncias }}</div>
        <div class="stat-label">Denuncias registradas</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">📅</div>
        <div class="stat-number">{{ dateRange }}</div>
        <div class="stat-label">Período de seguimiento</div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">👁️</div>
        <div class="stat-number">Permanente</div>
        <div class="stat-label">Vigilancia activa</div>
      </div>
    </div>
    
    <div class="search-section">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input 
          type="text" 
          v-model="searchTerm" 
          placeholder="Buscar por palabra clave (ej: ministerio, bolos, millones...)"
          class="search-input"
        >
        <button v-if="searchTerm" @click="searchTerm = ''" class="clear-button">✕</button>
      </div>
      <div class="filter-info">
        <span v-if="filteredGastos.length !== totalDenuncias">
          Mostrando {{ filteredGastos.length }} de {{ totalDenuncias }} denuncias
        </span>
        <span v-else>
         
        </span>
      </div>
    </div>
    
    <div class="cards-container">
      <div 
        v-for="(item, index) in paginatedGastos" 
        :key="index"
        class="denuncia-card"
        :class="{ 'card-even': index % 2 === 0 }"
      >
        <div class="card-header">
          <span class="card-number">#{{ (currentPage - 1) * itemsPerPage + index + 1 }}</span>
          <span class="card-date">
            <span class="date-icon">📅</span>
            {{ formatDate(item.fecha) }}
          </span>
        </div>
        
        <div class="card-body">
          <p class="denuncia-text">{{ item.denuncia }}</p>
        </div>
        
        <div class="card-footer">
          <a 
            :href="item.publicacion" 
            target="_blank" 
            rel="noopener noreferrer"
            class="twitter-link"
          >
            <svg viewBox="0 0 24 24" class="twitter-icon">
              <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Ver publicación en X
            <span class="external-icon">↗</span>
          </a>
        </div>
      </div>
    </div>
    <!-- No results -->
    <div v-if="filteredGastos.length === 0" class="no-results">
      <div class="no-results-icon">🔍</div>
      <h3>No se encontraron resultados</h3>
      <p>Intenta con otros términos de búsqueda</p>
      <button @click="searchTerm = ''" class="reset-button">Limpiar búsqueda</button>
    </div>
    <!-- Pagination -->
    <div v-if="totalPages > 1" class="pagination">
      <button 
        @click="currentPage--" 
        :disabled="currentPage === 1"
        class="pagination-button"
      >
        ← Anterior
      </button>
      
      <div class="pagination-numbers">
        <button
          v-for="page in displayedPages"
          :key="page"
          @click="currentPage = page"
          :class="['page-number', { active: currentPage === page }]"
        >
          {{ page }}
        </button>
      </div>
      
      <button 
        @click="currentPage++" 
        :disabled="currentPage === totalPages"
        class="pagination-button"
      >
        Siguiente →
      </button>
    </div>
    <!-- Call to Action -->
    <div class="cta-section">
      <h2>¿Conoces algún gasto irregular?</h2>
      <p>Ayúdanos a seguir vigilando el uso de recursos públicos</p>
      <a href="https://twitter.com/UGastoHormiga" target="_blank" class="cta-button">
        Síguenos en X @UGastoHormiga
      </a>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const searchTerm = ref('')
const currentPage = ref(1)
const itemsPerPage = 9

const gastos = ref([

  { denuncia: 'Presidencia gastó 55 millones de pesos en 79 termos para el café a 700.000 cada uno.', publicacion: 'https://x.com/german_ricaurte/status/1957779914397990919?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '19/08/2025' },
  { denuncia: 'Ministerio de la Igualdad no ejecutó presupuesto para vulnerables pero gastó 20 millones en torneo de bolos.', publicacion: 'https://x.com/german_ricaurte/status/1965191642106990699?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '08/09/2025' },
  { denuncia: 'Contrato irregular a dedo de 30.000 millones en UNP para vinculación de escoltas; empresa con vínculos ilegales y representante capturado.', publicacion: 'https://x.com/german_ricaurte/status/1968649509631566170?s=20', fecha: '18/09/2025' },
  { denuncia: 'En el SENA se gastan impuestos en témperas y juegos de mesa.', publicacion: 'https://x.com/german_ricaurte/status/1984680014730998224?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '01/11/2025' },
  { denuncia: 'Universidad Nacional gastó 41 millones en entrenadores para equipos de tejo y rana de funcionarios.', publicacion: 'https://x.com/german_ricaurte/status/1986085103127212468?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '05/11/2025' },
  { denuncia: '12 mil millones para armar alojamientos a narcotraficantes de Gentil Duarte y disidencias Segunda Marquetalia.', publicacion: 'https://x.com/german_ricaurte/status/1994763190820114741?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '29/11/2025' },
  { denuncia: 'A pocas semanas de elecciones, Benedetti firma convenios por 198 mil millones con objetos gaseosos para indígenas.', publicacion: 'https://x.com/german_ricaurte/status/2006466817322266868?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '31/12/2025' },
  { denuncia: '10.000 millones para firma de abogados defendiendo a Petro ante inclusión en lista Clinton.', publicacion: 'https://x.com/german_ricaurte/status/2010156848217809045?s=20', fecha: '11/01/2026' },
  { denuncia: 'Ministerio de Minas gastó 7 millones comprando ruanas para regalar a amigos.', publicacion: 'https://x.com/german_ricaurte/status/1943818529544847470?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '11/07/2025' },
  { denuncia: 'Presidente gastó 10 millones equipando peluquería del Palacio de Nariño (silla de 3.8 millones y esterilizador de 684.000).', publicacion: 'https://x.com/german_ricaurte/status/1957122978409243081?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '17/08/2025' },
  { denuncia: 'Presidencia contrató 6.800 millones en tiquetes aéreos en los últimos 11 meses del gobierno.', publicacion: 'https://x.com/german_ricaurte/status/1962880310418256031?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '02/09/2025' },
  { denuncia: 'Coincidencias: socio político de Benedetti en Universidad San José, convenio 13 mil millones con Magdalena y título fraudulento de Juliana Guerrero.', publicacion: 'https://x.com/german_ricaurte/status/1967292440026784057?s=20', fecha: '14/09/2025' },
  { denuncia: 'Presidencia reportó llamada telefónica con Emir de Qatar por 3.700.000 pesos.', publicacion: 'https://x.com/german_ricaurte/status/1965413939849933139?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '09/09/2025' },
  { denuncia: 'ICBF pagó 31 millones para ir a jugar bolos.', publicacion: 'https://x.com/german_ricaurte/status/1965761007437119977?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '10/09/2025' },
  { denuncia: '8 millones en almidonado de lencería del Palacio de San Carlos.', publicacion: 'https://x.com/german_ricaurte/status/1965780525442023726?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '10/09/2025' },
  { denuncia: 'RTVC gastó 8 mil millones con FONTUR en cumbre CELAC inútil.', publicacion: 'https://x.com/german_ricaurte/status/1987339768657588482?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '09/11/2025' },
  { denuncia: '1.400 millones en transmisión de la cumbre CELAC por máquina de propaganda.', publicacion: 'https://x.com/german_ricaurte/status/1987346920025555404?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '09/11/2025' },
  { denuncia: 'Aeronáutica Civil pagó 49 millones por taller de parejas en Lagosol.', publicacion: 'https://x.com/german_ricaurte/status/1989337442051358983?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '14/11/2025' },
  { denuncia: '14 millones en dotación para consultorio odontológico del Presidente.', publicacion: 'https://x.com/german_ricaurte/status/1990857520659800315?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '18/11/2025' },
  { denuncia: 'Presidencia firmó contrato de 884 millones con CNC para encuestas sobre “reconocimiento a la paz”.', publicacion: 'https://x.com/german_ricaurte/status/1995643090296864869?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '01/12/2025' },
  { denuncia: 'Presidencia compró dos jarrones de werregue por 7.5 millones para actividades protocolarias.', publicacion: 'https://x.com/german_ricaurte/status/1995903181641928901?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '02/12/2025' },
  { denuncia: '240 millones en celebración de fin de año del ICFES con DJ, orquesta, photo booth y hora loca.', publicacion: 'https://x.com/german_ricaurte/status/1998542136560492821?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '09/12/2025' },
  { denuncia: '102 millones parrandearon en cierre de gestión del Fondo Adaptación.', publicacion: 'https://x.com/german_ricaurte/status/1999278931636072682?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '12/12/2025' },
  { denuncia: '86 millones en "olimpiadas criollas" con premios en RTVC.', publicacion: 'https://x.com/german_ricaurte/status/1999904667262988314?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '13/12/2025' },
  { denuncia: '64 millones en toallas de manos para Presidencia en últimos 8 meses.', publicacion: 'https://x.com/german_ricaurte/status/2003452396295582055?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '23/12/2025' },
  { denuncia: 'Presidencia contrató entrenador de fútbol para burócratas de equipos interoficinas.', publicacion: 'https://x.com/german_ricaurte/status/1944518325062766706?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '13/07/2025' },
  { denuncia: 'Ministerio de Minas y Energía gastó 27 millones en crema para el café durante el gobierno.', publicacion: 'https://x.com/german_ricaurte/status/1959650845639020740?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '24/08/2025' },
  { denuncia: 'Renovaron contratos a negociadores de paz pese al fracaso de la paz total (Vera Grabe 175 millones, otros 117 millones cada uno).', publicacion: 'https://x.com/german_ricaurte/status/1965024780601753665?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '08/09/2025' },
  { denuncia: 'DPS gastó 22 millones en torneo de bolos para funcionarios.', publicacion: 'https://x.com/german_ricaurte/status/1965545029033963594?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '09/09/2025' },
  { denuncia: 'Superintendencia de Salud gastó 32 millones en paseo para solteros mientras sistema de salud se cae.', publicacion: 'https://x.com/german_ricaurte/status/1965857315317538856?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '10/09/2025' },
  { denuncia: 'SENA contrató entrenador de bolos para regional Tolima.', publicacion: 'https://x.com/german_ricaurte/status/1984697158608830906?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '01/11/2025' },
  { denuncia: 'USPEC compró cámara de fotos por 15 millones.', publicacion: 'https://x.com/german_ricaurte/status/1985018701205082211?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '02/11/2025' },
  { denuncia: 'Presidencia gastó 94 millones en trago durante el gobierno a pesar de gastritis de Petro.', publicacion: 'https://x.com/german_ricaurte/status/1985483816404709503?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '03/11/2025' },
  { denuncia: '2 millones comprando pegastics en Ministerio del Interior.', publicacion: 'https://x.com/german_ricaurte/status/1991502207750213945?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '20/11/2025' },
  { denuncia: '10 millones en medallitas para condecorar a ministros y amigos.', publicacion: 'https://x.com/german_ricaurte/status/1991650435594350833?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '20/11/2025' },
  { denuncia: 'Pagos por 14.774 millones a negociadores de paz (honorarios, reconocimientos y viajes).', publicacion: 'https://x.com/german_ricaurte/status/1991857529647988765?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '21/11/2025' },
  { denuncia: '17 palomitas de la paz por 11 millones para regalar en actos protocolarios.', publicacion: 'https://x.com/german_ricaurte/status/1995904065629295046?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '02/12/2025' },
  { denuncia: 'Ministerio de Defensa gastó 24 millones en encuentro para “solos y solas” con puente tibetano y pista acuática.', publicacion: 'https://x.com/german_ricaurte/status/1997672784701374483?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '07/12/2025' },
  { denuncia: '16 millones en bolsas plásticas para Presidencia en últimos 8 meses.', publicacion: 'https://x.com/german_ricaurte/status/2003470982015779172?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '23/12/2025' },
  { denuncia: 'Curiosidad: soporte de televisor más caro que el televisor.', publicacion: 'https://x.com/german_ricaurte/status/2003509705638052344?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '23/12/2025' },
  { denuncia: 'MinTrabajo dio plata a CGT para “actualización de líderes sindicales”.', publicacion: 'https://x.com/german_ricaurte/status/2005831438826959039?s=46&t=EXEdvC7XmsGZ8MLyf_b2Uw', fecha: '30/12/2025' },
]);
const totalDenuncias = computed(() => gastos.value.length)
const dateRange = computed(() => {
const dates = gastos.value.map(g => new Date(g.fecha.split('/').reverse().join('-')))
const minDate = new Date(Math.min(...dates))
const maxDate = new Date(Math.max(...dates))
return 'Jul - Dic 2025'
})
const filteredGastos = computed(() => {
if (!searchTerm.value) return gastos.value
const term = searchTerm.value.toLowerCase()
return gastos.value.filter(item =>
item.denuncia.toLowerCase().includes(term)
)
})
const totalPages = computed(() => Math.ceil(filteredGastos.value.length / itemsPerPage))
const paginatedGastos = computed(() => {
const start = (currentPage.value - 1) * itemsPerPage
const end = start + itemsPerPage
return filteredGastos.value.slice(start, end)
})
const displayedPages = computed(() => {
const pages = []
const maxPages = 5
let startPage = Math.max(1, currentPage.value - 2)
let endPage = Math.min(totalPages.value, startPage + maxPages - 1)
if (endPage - startPage < maxPages - 1) {
startPage = Math.max(1, endPage - maxPages + 1)
}
for (let i = startPage; i <= endPage; i++) {
pages.push(i)
}
return pages
})
const formatDate = (fecha) => {
  const [day, month, year] = fecha.split('/')
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic']
  return `${day} ${months[parseInt(month) - 1]} ${year}`
}
// Reset page when search changes
const originalSearchTerm = ref('')
const resetPageOnSearch = () => {
if (searchTerm.value !== originalSearchTerm.value) {
currentPage.value = 1
originalSearchTerm.value = searchTerm.value
}
}
// Watch search term
watch(searchTerm, resetPageOnSearch)
</script>
<style scoped>
.gastos-hormiga-container {
  background-color: #fefae2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

/* Header */
.header-section {
  text-align: center;
  margin-bottom: 3rem;
}

.foto-principal {
  max-width: 100%;
  width: auto;
  height: auto;
  max-height: 200px;
  margin-bottom: 1.5rem;
  object-fit: contain;
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
  font-size: 1.5em;
  font-weight: 600;
  color: #333;
  margin-bottom: 1rem;
}

.description {
  font-size: 1.1em;
  color: #666;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
}

.stat-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(229, 57, 53, 0.2);
}

.stat-icon {
  font-size: 3em;
  margin-bottom: 1rem;
}

.stat-number {
  font-size: 2.5em;
  font-weight: 700;
  color: #e53935;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.stat-label {
  font-size: 1.1em;
  color: #666;
  font-weight: 500;
}

/* Search Section */
.search-section {
  margin-bottom: 3rem;
}

.search-box {
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1rem 1.5rem;
  border-radius: 50px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.search-icon {
  font-size: 1.5em;
}

.search-input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 1.1em;
  background: transparent;
}

.clear-button {
  background: #e53935;
  color: white;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s ease;
}

.clear-button:hover {
  background: #c62828;
}

.filter-info {
  text-align: center;
  color: #666;
  font-size: 1em;
}

/* Cards Container */
.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.denuncia-card {
  background: white;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  border-left: 4px solid #e53935;
  display: flex;
  flex-direction: column;
  animation: fadeInUp 0.5s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.denuncia-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(229, 57, 53, 0.15);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #f5f5f5;
}

.card-number {
  background: #e53935;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9em;
}

.card-date {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #666;
  font-size: 0.95em;
  font-weight: 500;
}

.date-icon {
  font-size: 1.1em;
}

.card-body {
  flex: 1;
  margin-bottom: 1.5rem;
}

.denuncia-text {
  color: #333;
  line-height: 1.7;
  font-size: 1em;
  white-space: pre-line;
}

.card-footer {
  margin-top: auto;
}

.twitter-link {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  padding: 0.8rem 1.5rem;
  background: #000;
  color: white;
  text-decoration: none;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.95em;
  transition: all 0.3s ease;
}

.twitter-link:hover {
  background: #1d9bf0;
  transform: translateX(3px);
}

.twitter-icon {
  width: 18px;
  height: 18px;
}

.external-icon {
  font-size: 1.2em;
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
}

.no-results-icon {
  font-size: 5em;
  margin-bottom: 1rem;
  opacity: 0.5;
}

.no-results h3 {
  color: #333;
  font-size: 1.8em;
  margin-bottom: 0.5rem;
}

.no-results p {
  color: #666;
  font-size: 1.1em;
  margin-bottom: 2rem;
}

.reset-button {
  padding: 1rem 2rem;
  background: #e53935;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1.1em;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.reset-button:hover {
  background: #c62828;
  transform: translateY(-2px);
}

/* Pagination */
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 4rem;
}

.pagination-button {
  padding: 0.8rem 1.5rem;
  background: white;
  color: #e53935;
  border: 2px solid #e53935;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.pagination-button:hover:not(:disabled) {
  background: #e53935;
  color: white;
}

.pagination-button:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.pagination-numbers {
  display: flex;
  gap: 0.5rem;
}

.page-number {
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 2px solid #e0e0e0;
  background: white;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.page-number:hover {
  border-color: #e53935;
  color: #e53935;
}

.page-number.active {
  background: #e53935;
  color: white;
  border-color: #e53935;
}

/* CTA Section */
.cta-section {
  text-align: center;
  background: #c01718;
  padding: 4rem 2rem;
  border-radius: 20px;
  color: white;
  box-shadow: 0 10px 40px rgba(229, 57, 53, 0.3);
}

.cta-section h2 {
  font-size: 2.5em;
  margin-bottom: 1rem;
}

.cta-section p {
  font-size: 1.3em;
  margin-bottom: 2rem;
  opacity: 0.95;
}

.cta-button {
  display: inline-block;
  padding: 1.2rem 3rem;
  background: white;
  color: #e53935;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 700;
  font-size: 1.2em;
  transition: all 0.3s ease;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
}

/* Responsive */
@media (max-width: 968px) {
  .gastos-hormiga-container {
    padding: 1rem;
  }
  
  .foto-principal {
    max-height: 150px;
  }
  
  .red {
    font-size: 2.5em;
  }
  
  .stats-section {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .cards-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .search-box {
    padding: 0.8rem 1.2rem;
  }
  
  .pagination {
    flex-wrap: wrap;
  }
  
  .cta-section h2 {
    font-size: 1.8em;
  }
  
  .cta-section p {
    font-size: 1.1em;
  }
}

@media (prefers-color-scheme: dark) {
  .subtitle {
    color: rgba(0, 0, 0, 0.87);
  }
  
  .description {
    color: rgba(0, 0, 0, 0.7);
  }
  
  .stat-card {
    background: #bebebe;
  }
  
  .stat-label {
    color: rgba(0, 0, 0, 0.7);
  }
  
  .search-box {
    background: #2a2a2a;
  }
  
  .search-input {
    color: rgba(255, 255, 255, 0.87);
  }
  
  .filter-info {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .denuncia-card {
    background: #9e0000;
  }
  
  .card-date {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .denuncia-text {
    color: rgba(255, 255, 255, 0.87);
  }
  
  .no-results {
    background: #2a2a2a;
  }
  
  .no-results h3 {
    color: rgba(255, 255, 255, 0.87);
  }
  
  .no-results p {
    color: rgba(255, 255, 255, 0.7);
  }
  
  .pagination-button {
    background: #2a2a2a;
  }
  
  .page-number {
    background: #2a2a2a;
    border-color: #404040;
    color: rgba(255, 255, 255, 0.87);
  }
}
</style>