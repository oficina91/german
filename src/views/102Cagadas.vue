<template>
  <div class="cagadas-container">
    
    <nav class="cagadas-nav">
      <div class="nav-content">
        <div class="nav-flex">
          <div class="nav-title">
            <span class="nav-title-white">102 Cagadas</span>
          </div>
          <router-link to="/" class="nav-button">
            ← Volver
          </router-link>
        </div>
      </div>
    </nav>


    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">
           <span class="hero-title-red">102 Cagadas</span>
        </h1>
        <p class="hero-subtitle">
          Un registro documentado de las decisiones más cuestionables de este gobierno.
        </p>
      </div>
    </section>


    
    <section class="cards-section">
      <div class="cards-wrapper">
        <div class="cards-grid">
          <div
            v-for="(cagada, index) in filteredCagadas"
            :key="index"
            class="cagada-card"
          >
            <div class="card-content-flex">
              <div class="card-number">
                {{ index + 1 }}
              </div>
              <div class="card-text-wrapper">
                <p class="card-text">
                  {{ cagada.texto }}
                </p>
              </div>
            </div>
          </div>
        </div>

        
        <div v-if="filteredCagadas.length === 0" class="empty-state">
          <p class="empty-text">No se encontraron resultados</p>
        </div>
      </div>
    </section>

    
    <footer class="footer-section">
      <div class="footer-content">
        <p class="footer-text">
          Todos los derechos reservados
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const cagadas = ref([
  {
    numero: 1,
    titulo: "Cagada 1",
    texto: "El Presidente prometió proyectos fantasiosos que nunca despegaron, como el tren elevado entre Buenaventura y Barranquilla, el tren bala en La Guajira y el tren interoceánico en el Chocó."
  },
  {
    numero: 2,
    titulo: "Cagada 2",
    texto: "Liberaron a decenas de delincuentes bajo la figura de gestores de paz, permitiéndoles fortalecer de sus actividades criminales impunemente. Nombraron gestores de paz a algunos de los peores criminales del país, como Alias Macacao, Jorge 40, Don Berna, Alias Taladro y Salvatore Mancuso, en una clara afrenta a las víctimas."
  },
  {
    numero: 3,
    titulo: "Cagada 3",
    texto: "Petro prometió que si ganaba la presidencia el ELN desaparecería en sólo 3 meses, pero no sólo no se acabaron, sino que se fortalecieron, siguieron secuestrando, extorsionando y atancando a la población con drones. El gobierno les ha rogado que vuelvan a negociar, ignorando su evidente falta de voluntad."
  },
  {
    numero: 4,
    titulo: "Cagada 4",
    texto: "Nos metieron en listas cerradas a ciertos Congresistas mediocres, algunos de los cuales han sido acusados de acoso laboral, cobrarles dinero a sus empleados de la UTL y poner a trabajar a sus empleados en negocios particulares. Oros han tenido una gestión pobrísima, presentando proyectos para cambiar el escudo y para declarar patrimonio nacional la arepa de huevo."
  },
  {
    numero: 5,
    titulo: "Cagada 5",
    texto: "Se robaron 1 billón de pesos de la Unidad Nacional de Gestión del Riesgo, destinados a atender emergencias en el país. Con esa plata el Gobierno compró Congresistas para que apoyaran sus reformas sociale. ¿Esto es diferente a la famosa Yidispolítica? Por este caso están detenidos funcionarios de las entrañas de Petro, como Olmedo López, Sandra Ortiz, Luis Fernando Velasco y Ricardo Bonilla y siguen prófugos Carlos Ramón González y César Manrique."
  },
  {
    numero: 6,
    titulo: "Cagada 6",
    texto: "Con su estrategia del Shu Shu Shu destrozaron el sistema de salud, lo desfinanciaron al no actualizar como es debido el valor de la UPC y gerenciaron con las patas las EPS intervenidas por el gobierno, agravando sus problemas financieros y administrativas. Estas decisiones han costado miles de vidas y han disparado los costos de bolsillo de los pacientes."
  },
  {
    numero: 7,
    titulo: "Cagada 7",
    texto: "A pesar de que los maestros les dieron 500 millones para la campaña, los utilizaron como conejillo de indias para probar su reforma de salud en el régimen especial del FOMAG. El experimento fracasó y ahora muchos se arrepienten de haberlos apoyado."
  },
  {
    numero: 8,
    titulo: "Cagada 8",
    texto: "Durante años sabotearon el proyecto del Metro de Bogotá, que avanza a paso firme muy a su pesar. En cambio, cuando Petro fue alcalde no fue capaz de hacerlo y solo dejó un vagón de cartón."
  },
  {
    numero: 9,
    titulo: "Cagada 9",
    texto: "Estamos importando gas para el consumo de los hogares y esto ha disparado los precios que pagan las familias. El 'decrecimiento' en materia energética afecta los bolsillos de los colombianos."
  },
  {
    numero: 10,
    titulo: "Cagada 10",
    texto: "Petro pordebajeó la carrera diplomática, nombrando Embajadores sin las mínimas capacidades para ejercer el cargo y eliminado el requisito de hablar inglés, todo para pagar favores políticos a figuras como Roy Barreras, Benedetti, Alfredo Saade, Sarabia y el tipo que corrió la línea ética."
  },
  {
    numero: 11,
    titulo: "Cagada 11",
    texto: "Se han gastado nuestros impuestos abriendo lujosas embajadas, con nóminas costosas, en países con los cuales tenemos mínimas relaciones. Nombraron hasta un Embajador en Palestina, que nunca pisó ese país."
  },
  {
    numero: 12,
    titulo: "Cagada 12",
    texto: "Estuvieron a estuvo a punto hacernos perder 700 mil millones de pesos en una consulta popular que afortunadamente nunca ocurrió. En el proceso, los Ministros fueron tan lame suelas que se atrevieron a firmar un decreto ilegal, para el cual no tenían competencia, en un intento de atajo institucional, exponiéndose a ser investigados por prevaricato. Además, el Presidente, al que le encanta metérsele al rancho a las instituciones acusó al Registrador de sedición por solicitar un concepto sobre la legalidad de la consulta."
  },
  {
    numero: 13,
    titulo: "Cagada 13",
    texto: "Para ganar las elecciones se aliaron con lo peor de la clase política, las maquinarias que antes decían combatir. Además, violaron los topes de gastos y hubo financiación de personajes oscuros."
  },
  {
    numero: 14,
    titulo: "Cagada 14",
    texto: "El mayor contrabandista del país, Alias Papá Pitufo, habría incidido en el nombramiento de funcionarios en posiciones estratégicas en los puertos. Este sujeto entregó 500 millones de pesos para la campaña presidencial, que según el Presidente fueron rechazados y devueltos, lo cual supuestamente está grabado en video. Pero ha pasado cerca de un año y seguimos esperando que Petro publique el video."
  },
  {
    numero: 15,
    titulo: "Cagada 15",
    texto: "Tienen en cuidados intensivos a Ecopetrol, la empresa más importante del país. Las utilidades y el precio de la acción cayeron dramáticamente. Ese es el resultado de su estrategia de decrecimiento."
  },
  {
    numero: 16,
    titulo: "Cagada 16",
    texto: "Han mantenido contra viento y marea al presidente de Ecopetrol Ricardo Roa, rodeado de escándalos por sus manejos como gerente de la campaña presidencial y por sus negocios personales. Esto ha afectado gravemente la reputación de la compañía"
  },
  {
    numero: 17,
    titulo: "Cagada 17",
    texto: "A la niñera de Laura Sarabia, le practicaron una prueba de polígrafo en un sótano de la Presidencia de forma irregular y violatoria de sus derechos humanos, tras la pérdida de un maletín con una gran cantidad de dinero en efectivo que la funcionaria tenía en su casa. Además, luego se supo que ni siquiera le pagaban sus prestaciones sociales."
  },
  {
    numero: 18,
    titulo: "Cagada 18",
    texto: "Han atacado incesantemente la independencia del Banco de la República, que por fortuna mantuvo su seriedad y autonomía. A pesar de los constantes llamados a bajar la tasa de interés, el Banco priorizó el criterio técnico y gracias a ello la inflación se mantuvo dentro de márgenes razonables."
  },
  {
    numero: 19,
    titulo: "Cagada 19",
    texto: "Para desviar la atención del país ante cada episodio de corrupción que sale a la luz, inventaron centenares de supuestos golpes de Estado y conspiraciones. Han promovido la desinformación."
  },
  {
    numero: 20,
    titulo: "Cagada 20",
    texto: "Petro destonó a Pastrana como el presidente más viajero de la historia, es prácticamente un nómada. Han sido más de 70 viajes internacionales, en los que causó problemas y logró pocos resultados. Han vivido sabroso dando discursos y gastando a manos llenas por el mundo. ¡Petro tranquilos que en Expo Osaka vendieron 10 millones de toneladas de lechona!"
  },
  {
    numero: 21,
    titulo: "Cagada 21",
    texto: "En su profundo desprecio por la independencia de la justicia, Petro propuso la elección popular de jueces y magistrados, tal como hicieron en México, lo que dejaría nuestro sistema judicial a merced de la politiquería. Por fortuna, fue una de esas ideas que jamás ejecutó."
  },
  {
    numero: 22,
    titulo: "Cagada 22",
    texto: "Nos prometieron que la dignidad se haría costumbre, pero lo que institucionalizaron fue la indignidad, el descaro, la permanente justificación de las alianzas con corruptos y el nombramiento de personas cuestionadas. Cuando se les reclama, evaden su responsabilidad victimizándose y respondiendo con desprecio que \"de malas\" y que \"ese no es su problema\"."
  },
  {
    numero: 23,
    titulo: "Cagada 23",
    texto: "Aumentaron los impuestos para múltiples productos que llegan del exterior, disfrazando de proteccionismo su voluntad de vernos transportarnos, vestirnos y comer caro. Esto por supuesto genera un efecto inflacionario."
  },
  {
    numero: 24,
    titulo: "Cagada 24",
    texto: "Han sido permisivos y cómplices de múltiples casos de acoso laboral al interior de entidades como el Ministerio de Trabajo, el Ministerio de Salud y RTVC, protegiendo a sus copartidarios. Ahí sí se les olvida la lucha por los derechos de los trabajadores y las trabajadoras."
  },
  {
    numero: 25,
    titulo: "Cagada 25",
    texto: "Hicieron un papelón dejando perder la sede de los Juegos Panamericanos por negligencia. Y tampoco realizaron los juegos intercolegiados que ofrecieron como premio de consolación."
  },
  {
    numero: 26,
    titulo: "Cagada 26",
    texto: "Se han empecinado en condenar a los bogotanos al trancón. Además de inventar mentiras sobre el metro como que va a incrementar los tiempos de viaje, también le han puesto palos en la rueda a la construcción de obras de importantes para la movilidad de la ciudad como la extensión de la Boyacá y la ampliación de la autopista norte."
  },
  {
    numero: 27,
    titulo: "Cagada 27",
    texto: "Toda la vida hicieron campaña criticando las roscas que montaban los podersosos en el Estado. Hoy tienen a familias enteras con altos salarios, viviendo sabroso. ¡El nepotismo en este gobierno es una política pública!"
  },
  {
    numero: 28,
    titulo: "Cagada 28",
    texto: "El narcotráfico se fortaleció durante este gobierno, razón por la cual Colombia fue descertificada por las autoridades estadounidenses. Tanto el Presidente como su Ministro del Interior fueron incluidos en la lista Clinton. ¡Colombia es un burla en la lucha contra las drogas! Además, recientemente anunciaron el regreso del glifosato, contradiciendo todo lo que prometieron en el pasado."
  },
  {
    numero: 29,
    titulo: "Cagada 29",
    texto: "Descaradamente, Petro afirma que el Congreso no lo deja gobernar. Sin embargo, los hechos dicen otra cosa. Le aprobaron: Plan de Desarrollo, la primera reforma tributaria, la reforma al sistema general de participaciones, la ampliación del cupo de endeudamiento, la reforma pensional y la reforma laboral. No sobra recordar que funcionarios de su gobierno sobornaron congresistas para obtener su voto."
  },
  {
    numero: 30,
    titulo: "Cagada 30",
    texto: "Petro logró que personas postuladas por él llegaran a cargos de Procurador, Defensora del Pueblo y Magistrados. Pero cuando sus elegidos no hacen lo que él quiere, los tilda de infiltrados uribistas. Para él, la división de poderes funciona sólo cuando le favorece."
  },
  {
    numero: 31,
    titulo: "Cagada 31",
    texto: "Ninguna plata les alcanza, por eso nos han querido clavar 3 reformas tributarias para recaudar más dinero y no solamente a los 4 mil más ricos, sino a todos los colombianos. Jamás se les pasó por la cabeza recortar gastos y burocracia, sólo saben gastar. Son como un administrador que quiebra el negocio y tiene el descaro de pedirle un aumento de sueldo al dueño."
  },
  {
    numero: 32,
    titulo: "Cagada 32",
    texto: "Crearon un Ministerio de la Igualdad que ha sido muestra de constante improvisación, incompetencia para el manejo de los recursos públicos y cero resultados. Y su respuesta es ¡De malas!"
  },
  {
    numero: 33,
    titulo: "Cagada 33",
    texto: "Entregaron el poder a políticos desvergonzados, con innumerables sospechas de corrupción. Benedetti fue nombrado Embajador en Venezuela, Embajador en la FAO, asesor presidencial y Ministro del Interior, aunque al parecer su único mérito es conocer los secretos del jefe y amenazar con que si él se hunde, se van presos todos. No olvidemos que el Ministro de Justicia de éste mismo gobierno lo llamó corrupto y le auguró que terminaría preso."
  },
  {
    numero: 34,
    titulo: "Cagada 34",
    texto: "Les incumplieron a los estudiantes colombianos. En el ICETEX prometieron condonar las deudas y en cambio empeoraron las condiciones de pago haciendo impagables las cuotas y disminuyeron drásticamente el número de nuevos beneficiarios. Prometieron cientos de miles de cupos nuevos en universidades públicas y sus números son un engaño. Y para rematar, acabaron el apoyo a COLFUTURO."
  },
  {
    numero: 35,
    titulo: "Cagada 35",
    texto: "Nicolás Petro, el hijo del Presidente, parece experto en contabilidad cuántica. Recibió aportes millonarios de delincuentes para la campaña de su padre y se los mecatió en cositas. Además, enfrenta un proceso por corrupción por negocios durante su paso por la asamblea del Atlántico. ¡Él no lo crió!"
  },
  {
    numero: 36,
    titulo: "Cagada 36",
    texto: "Han utilizado formas burdas de chantaje. Por ejemplo, para presionar la aprobación de la reforma pensional, se inventaron que el subsidio para los adultos mayores más vulnerables dependía esa ley, cuando en realidad era algo que podían hacer con los programas sociales ya existentes, cosa que terminaron finalmente haciendo."
  },
  {
    numero: 37,
    titulo: "Cagada 37",
    texto: "¡No saben hacer una suma! Elaboran presupuestos irreales, desfinanciados, haciendo cuentas alegres, apelando tal vez a la matemática cuántica. Por eso terminaron desfinanciando proyectos sociales como Mi Casa Ya y Colombia Sin Hambre y por eso el propio Presidente dijo que demandaría por inconstitucional su propio presupuesto del 2025, que él mismo decretó."
  },
  {
    numero: 38,
    titulo: "Cagada 38",
    texto: "La desesperanza frente al futuro ocasionó que cada vez más jóvenes se fueran del país para buscar mejores oportunidades el exterior y las solicitudes de asilo por parte de colombianos se dispararon en otros países. La generación que les dio su voto de confianza, se desilusionó."
  },
  {
    numero: 39,
    titulo: "Cagada 39",
    texto: "Sus permanentes ataques y descalificaciones a los medios de comunicación han deteriorado la libertad de prensa, exponiendo a un riesgo mayor a los periodistas en las regiones. A las investigaciones serias responden gritando fascismo, mentira, montaje, inteligencia artificial."
  },
  {
    numero: 40,
    titulo: "Cagada 40",
    texto: "Cuando se encuentra despierto, el presidente pierde su tiempo soñando con el espacio, en lugar de atender los problemas urgentes del país. Ha prometido llevar tejido humano a Marte, esparcir el virus de la vida por las estrellas del universo y ha insistido en la creación de una agencia espacial colombiana ¡Ad Astra!"
  },
  {
    numero: 41,
    titulo: "Cagada 41",
    texto: "Petro ha sido impulsivo en el manejo de las relaciones internacionales, cazando peleas por twitter en la madrugada, inventándose que mandatarios de otros países fueron colaboradores del M19, metiendo las narices en conflictos ajenos, tomando partido en procesos electorales de otros países, desconociendo elecciones legítimas, validando elecciones fraudulentas y hasta perdiendo su propia visa de entrada a Estados Unidos."
  },
  {
    numero: 42,
    titulo: "Cagada 42",
    texto: "Convirtieron los Consejos de Ministros en un reality show televisado, una competencia ministerial de lambonería, en la que no se toman decisiones, pero sí se sacan los trapos al sol y se desnudan las más perversas ambiciones de los funcionarios."
  },
  {
    numero: 43,
    titulo: "Cagada 43",
    texto: "Francia Márquez ha reconocido que su propia gente le dice que estaba mejor antes de que fuera Vicepresidente. Y es que el Cauca ha estado sumido en la violencia durante 4 años, mientras ella se dedicó a vivir sabroso."
  },
  {
    numero: 44,
    titulo: "Cagada 44",
    texto: "La paz total fracasó rotundamente. Se han gastado 14 mil millones de pesos en los honorarios de los negociadores y destinaron 12 mil millones para construir alojamientos para los delincuentes. En 2025 hubo 78 masacres y 187 líderes sociales asesinados, pero quienes antes denunciaban estos hechos ahora guardan silencio."
  },
  {
    numero: 45,
    titulo: "Cagada 45",
    texto: "El gabinete ministerial es una bolsa de empleo rotativa, el Presidente cambia su equipo de forma permanente, generando inestabilidad en las políticas de gobierno y retrasos en la ejecución en medio de las curvas de aprendizaje. Más de 60 personas han ocupado los Ministerios en este periodo y cada vez están peor preparados. Ser Ministro ya no es un honor sino un desprestigio."
  },
  {
    numero: 46,
    titulo: "Cagada 46",
    texto: "Petro abandonó a Bogotá en materia de seguridad, ignorando las reiteradas solicitudes de aumento del pie de fuerza y generándole mayores presiones por cuenta del fortalecimiento de bandas criminales transnacionales que hacen presencia en la ciudad. Recordemos que según la Secretaria de Seguridad de Estados Unidos Petro pidió amor y comprensión para el Tren de Aragua y ante la ONU dijo que no son terroristas."
  },
  {
    numero: 47,
    titulo: "Cagada 47",
    texto: "El Presidente abusa descaradamente de la figura de la alocución presidencial. Dejó de ser el mecanismo para informar a la ciudadanía sobre temas relevantes, para convertirse en una tribuna de discursos eternos y sin sentido. Apenas empieza, la tercera parte de los televidentes cambia el canal o apaga el televisor."
  },
  {
    numero: 48,
    titulo: "Cagada 48",
    texto: "Se autodenominan como un gobierno feminista, pero han sido permisivos con múltiples funcionarios señalados de violencia de género, además de los comentarios abiertamente machistas del Presidente en televisión nacional."
  },
  {
    numero: 49,
    titulo: "Cagada 49",
    texto: "Tenemos a un Presidente \"economista\" que ha demostrado reiteradamente que tiene serias dificultades para sumar, restar y multiplicar. Con frecuencia, expresa cifras que no corresponden con la realidad. Y los conceptos básicos que se aprenden en nuestra carrera los tiene completamente distorsionados, por eso toma decisiones erráticas, no comprende que los recursos son limitados, pide bajar la tasa de interés para bajar la inflación y piensa que si aumenta la demanda van a disminuir los precios."
  },
  {
    numero: 50,
    titulo: "Cagada 50",
    texto: "De forma alarmista y dramática, Petro anunció que Bogotá se quedaría sin agua en 2025 y que sería necesario evacuar la ciudad con el Ejército. Mintió, y bajo el liderazgo del alcalde disminuimos el consumo, diversificamos las fuentes de agua, modernizamos las plantas de tratamiento y aseguraos el suministro para 30 años."
  },
  {
    numero: 51,
    titulo: "Cagada 51",
    texto: "En su papel de epidemiólogo de Temu, Petro dijo que Bogotá sería el epicentro de una epidemia de fiebre amarilla, lo cual nunca pasó ni tenía sustento científico, pero lo cierto es que sus promesas de vacunación masiva quedaron en nada."
  },
  {
    numero: 52,
    titulo: "Cagada 52",
    texto: "Petro jamás explicó satisfactoriamente qué fue a hacer a Manta tras asistir a la posesión de Noboa en mayo del 2025. Según él, estuvo encerrado en una cabaña escribiendo un libro sobre un filósofo japonés. ¡Tan raro!"
  },
  {
    numero: 53,
    titulo: "Cagada 53",
    texto: "El Presidente tiene las prioridades trastocadas; durante la semana santa del 2025, decidió hacerse un lifting mientras los grupos armados ponían bombas en diferentes municipios del país. Sus intervenciones estéticas y asuntos personales lo distrajeron contantemente de sus funciones."
  },
  {
    numero: 54,
    titulo: "Cagada 54",
    texto: "Petro nombró al octogenario Álvaro Leyva como su Canciller y éste meses después publicó cartas narrando episodios bochornosos que el Presidente supuestamente habría protagonizado durante visitas oficiales a Francia, Suiza, China, Italia y Chile, todo esto en medio de graves adicciones. No es claro cuál de los dos miente, pero dejaron una imagen lamentable dentro y fuera de Colombia."
  },
  {
    numero: 55,
    titulo: "Cagada 55",
    texto: "Durante un discurso, el Presidente lanzó un elegante piropo al Congreso de la República: llamó HPs a los miembros de la oposición, demostrando su desprecio por la separación de poderes y su talante democrático."
  },
  {
    numero: 56,
    titulo: "Cagada 56",
    texto: "Le regalaron a dedo contratos multimillonarios a organizaciones indígenas, que luego participaron coincidentemente en marchas y manifestaciones a favor del gobierno. ¡Eso es utilizar y manosear a los grupos étnicos!"
  },
  {
    numero: 57,
    titulo: "Cagada 57",
    texto: "Convirtieron a Colombia en guarida de delincuentes internacionales. Le dieron asilo a Ricardo Martinelli, expresidente panameño salpicado en el escándalo de Odebrecht y le otorgaron la nacionalidad colombiana al exvicepresidente Jorge Glas de Ecuador, condenado por corrupción. Inaceptable."
  },
  {
    numero: 58,
    titulo: "Cagada 58",
    texto: "Este gobierno terminó expulsando a los funcionarios competentes y respetables que tenía; la exministra Ángela Buitrago renunció denunciando presiones indebidas para reemplazar funcionarios técnicos por cuotas políticas. Y varios Ministros salieron sencillamente por hacer llamados a la sensatez y expresar la inconveniencia de decisiones improvisadas y anti técnicas."
  },
  {
    numero: 59,
    titulo: "Cagada 59",
    texto: "Desmoralizaron a la Policía Nacional. En abril de 2025, mientras asesinaban a 30 policías en medio de un 'plan pistola' de los grupos ilegales, el Presidente exaltó símbolos de quienes en el pasado atentaron contra la Fuerza Pública, como la sotana del guerrillero Camilo Torres."
  },
  {
    numero: 60,
    titulo: "Cagada 60",
    texto: "Llevan desde que llegaron al poder haciendo eventos, conciertos, movilizaciones y manifestaciones que le cuestan miles de millones al país en recursos públicos. En otras palabras, hacen campaña con nuestros impuestos y luego dicen que el presupuesto no alcanza."
  },
  {
    numero: 61,
    titulo: "Cagada 61",
    texto: "El Presidente y el Ministro del Interior han sido poco transparentes en cuanto a su relación con el Clan Torres y con el empresario de conciertos Leyva, ambos muy cuestionados, ambos beneficiarios de jugosos negocios, el uno generosamente le prestó muchísimo dinero a Benedetti y el segundo le prestó su mansión."
  },
  {
    numero: 62,
    titulo: "Cagada 62",
    texto: "Tomaron la decisión irresponsable de suspender la regla fiscal, a pesar de que el Comité Autónomo de la Regla Fiscal CARF recomendó no hacerlo ¡Es que esa es una medida excepcional para situaciones como la pandemia! Pero ellos estaban decididos a gastar más de lo que podían permitirse y endeudarnos a tasas altísimas, como de gota a gota."
  },
  {
    numero: 63,
    titulo: "Cagada 63",
    texto: "Se mostraron insensibles ante el asesinato de Miguel Uribe Turbay, lanzando teorías conspirativas y alimentando aún más el clima de polarización."
  },
  {
    numero: 64,
    titulo: "Cagada 64",
    texto: "Aumentaron a niveles históricos la burocracia, cada vez con más contratistas corbatas para fortalecerse políticamente, a pesar de que el presupuesto no da para tanto. Por eso se quedaron sin caja antes de tiempo y en diciembre de 2025 ni siquiera pudieron pagar toda la nómina. Y para pagar esa burocracia es que han subido impuestos y nos han endeudado."
  },
  {
    numero: 65,
    titulo: "Cagada 65",
    texto: "En su desprecio por la meritocracia, intentaron posesionar como Viceministra de la Igualdad a la señora Juliana Guerrero, que no cumplía los requisitos y ni siquiera era profesional, puesto que su título fue obtenido de forma fraudulenta en la Universidad San José, de un viejo socio político de Benedetti."
  },
  {
    numero: 66,
    titulo: "Cagada 66",
    texto: "Tan pronto llegaron al gobierno nacional, olvidaron sus luchas por la autonomía regional. El Presidente se autodenominó jefe de los alcaldes -cosa que no es cierta- y frecuentemente ejerció el chantaje y la presión para supeditar la financiación de proyectos estratégicos al respaldo político en otros asuntos."
  },
  {
    numero: 67,
    titulo: "Cagada 67",
    texto: "En campaña firmaron sobre mármol que no convocarían una Asamblea Nacional Constituyente. Sin embargo, incumplieron su promesa e iniciaron un proceso de recolección de firmas para impulsar una peligrosa constituyente que podría poner en riesgo los cimientos de nuestra sociedad y los avances de los últimos 35 años."
  },
  {
    numero: 68,
    titulo: "Cagada 68",
    texto: "Convirtieron a RTVC – el sistema de medios públicos – en una máquina de propaganda dedicada a glorificar al Presidente, magnificar sus logros, ocultar sus fracasos, atacar a la oposición y darle vitrina a sus aliados nacionales y extranjeros. Además, abusan de las redes sociales de las entidades publicando mensajes del Presidente que no tienen nada que ver con su misionalidad."
  },
  {
    numero: 69,
    titulo: "Cagada 69",
    texto: "Hay graves denuncias sobre la infiltración de las disidencias de Alias Calarcá en cargos estratégicos de la seguridad nacional y la inteligencia del Estado. Aunque el Presidente lo niegue diciendo que esto es un montaje de la CIA o una simulación de la IA, es muy delicado el favorecimiento a un grupo criminal."
  },
  {
    numero: 70,
    titulo: "Cagada 70",
    texto: "El Presidente decidió abrir sus finanzas personales al mundo y en sus extractos se descubrió de inmediato un encantador 'Menage Strip Club', un prostíbulo portugués al que acudió durante una visita oficial de Estado. ¡Todo un maestro en el arte del amor y la diplomacia!"
  },
  {
    numero: 71,
    titulo: "Cagada 71",
    texto: "En escenarios internacionales el Presidente nos ha hecho pasar vergüenzas, por ejemplo, al afirmar con nostalgia que Stalin ha debido instaurar su régimen socialista a nivel mundial, al afirmar que la gasolina es peor que el fentalino, al llamar a la desobediencia a un ejército extranjero en su propio país y al proponer trasladar la Estatua de la Libertad a Cartagena."
  },
  {
    numero: 72,
    titulo: "Cagada 72",
    texto: "Durante años denunciaron la muerte de menores de edad en bombardeos del Ejército contra grupos armados ilegales y cuestionaron no haber obtenido mejor información por parte de la inteligencia. Sin embargo, en su gobierno ocurrió exactamente lo mismo en diversos operativos y esta vez fueron ágiles para justificarlo."
  },
  {
    numero: 73,
    titulo: "Cagada 73",
    texto: "El sueño de miles de familias por tener casa propia se vio truncado por la decisión de este gobierno de no entregar más subsidios de Mi Casa Ya, porque para ellos es más importante su pelea ideológica con el gremio de los constructores que el bienestar de las familias pobres."
  },
  {
    numero: 74,
    titulo: "Cagada 74",
    texto: "Petro se burló de uno de los departamentos con más necesidades, que es La Guajira. Les prometió un tren bala, un aeropuerto internacional y un gran tubo para llevar el agua. Todo se quedó en memes y en la corrupción de los carrotanques. Para rematar, compartió en sus redes sociales la foto de un puente que su gobierno supuestamente había construido en el departamento, pero luego se supo que en realidad estaba ubicado en Wichita, Kansas, Estados Unidos. Otra mentira más, es un verdadero Pinocho, lástima que no le crezca la nariz para que todos se den cuenta."
  },
  {
    numero: 75,
    titulo: "Cagada 75",
    texto: "El orden público se salió de control, el secuestro y la extorsión siguen afectando a la población y esto no sorprende a nadie puesto que la gran idea del Presidente para luchar contra la ilegalidad consistía en quitarle la letra \"i\" para convertirla en legalidad. Muy hábil para jugar con el castellano, no tanto para manejar la seguridad."
  },
  {
    numero: 76,
    titulo: "Cagada 76",
    texto: "Son una partida de alcahuetas con la corrupción. Carlos Ramón González se escapó de la justicia en medio del caso de corrupción la UNGRD, durante un tiempo lo hospedaron en la lujosa cada de la embajada de Colombia en Nicaragua y hasta la prestaron el carro. Cuando fueron descubiertos, hicieron el teatro de pedirlo en extradición y el Dictador de Nicaragua se negó. Meses después, Carlos Ramón fue visto de parranda con funcionarios de la misma embajada."
  },
  {
    numero: 77,
    titulo: "Cagada 77",
    texto: "Les faltaron el respeto a las víctimas al autorizar que jefes de bandas criminales fueran trasladados desde las cárceles a compartir tarima en un evento con el Presidente Petro en Medellín. Este episodio lamentable pasó a conocerse como el 'tarimazo'."
  },
  {
    numero: 78,
    titulo: "Cagada 78",
    texto: "Han utilizado indebidamente los bienes públicos, malgastando nuestros impuestos. Un buen ejemplo son los traslados de Juliana Guerrero en aeronaves de la fuerza pública para \"hacer mandados\" y atender reuniones de la Universidad del Cesar."
  },
  {
    numero: 79,
    titulo: "Cagada 79",
    texto: "Defender a los nadies fue sólo un discurso para hacerse elegir. Francia Márquez ha acusado al gobierno de discriminarla y de haberla utilizado para llegar al poder. Las causas sociales que impulsaba y las poblaciones que decía representar quedaron en segundo plano."
  },
  {
    numero: 80,
    titulo: "Cagada 80",
    texto: "Se ufanaban de ser impolutos, pero algunos de sus más altos funcionarios tienen cuentas pendientes con la justicia. El Ministro del Trabajo Antonio Sanguino, por ejemplo, enfrenta un juicio ante la Corte Suprema por el caso del carrusel de la contratación en Bogotá."
  },
  {
    numero: 81,
    titulo: "Cagada 81",
    texto: "Nunca se desligaron del chavismo y la dictadura venezolana. Negaron la pertenencia de Maduro al cartel de los soles, enviaron un delegado a su ilegítima posesión y lamentaron su captura."
  },
  {
    numero: 82,
    titulo: "Cagada 82",
    texto: "Disminuyeron en más de un 50% el presupuesto del deporte y les quitaron las becas a los campeones de juegos intercolegiados. Su primera ministra del deporte está investigada por irregularidades en la contratación. Y entre tanto, sí hubo plata para contratar un entrenador de fútbol en la presidencia y para organizar costosos torneos para los funcionarios del gobierno."
  },
  {
    numero: 83,
    titulo: "Cagada 83",
    texto: "Armaron un tremendo lío con la expedición de pasaportes, que funcionaba bien, porque supuestamente nos iban a salvar de un negocio amarrado. Sin embargo, ante la inminencia de una crisis, les entregaron el contrato a los mismos señalados, varias veces consecutivas. En medio de acusaciones de corrupción y cambios de Canciller, firmaron un cuestionado convenio con los portugueses. La incertidumbre continúa y será un problema para el próximo gobierno."
  },
  {
    numero: 84,
    titulo: "Cagada 84",
    texto: "De forma improvisada entregaron la construcción de vías terciarias a Juntas de Acción Comunal sin la experiencia para ejecutarlas. El resultado ha sido un fracaso y una decepción para las poblaciones campesinas que estaban esperanzadas en que iban a mejorar la infraestructura para sacar a la venta sus productos."
  },
  {
    numero: 85,
    titulo: "Cagada 85",
    texto: "En el gobierno anterior, criticaban la compra de aviones de guerra porque \"Colombia no tiene enemigos en el aire\" y porque en medio de una crisis era irresponsable invertir el dinero público en eso y no en la educación. Sin embargo, una vez en el poder, negociaron aviones suecos por 16 billones de pesos, contradiciéndose a ellos mismos, en una operación de compra que ha sido altamente cuestionada por los expertos en la materia."
  },
  {
    numero: 86,
    titulo: "Cagada 86",
    texto: "A pesar de que el gobierno nos ha vendido la idea de que tenemos la cuarta mejor economía del mundo, la realidad es que enfrentamos una grave crisis fiscal, la deuda pública viene creciendo y ellos mismos decretaron una Emergencia Económica con el fin de aumentar los impuestos."
  },
  {
    numero: 87,
    titulo: "Cagada 87",
    texto: "De manera populista y a pocas semanas de las elecciones, decretaron un aumento injustificado del salario mínimo del 23,7%, que generará inflación y afectará especialmente a los trabajadores informales y a los desempleados. Las primeras ideas del gobierno para mitigar estos efectos son desastrosas: control de precios, lo cual ha fracasado sistemáticamente en todo el planeta, y ofrecerles crédito a los microempresarios, que si es para financiar el pago de nómina termina por quebrar a cualquier negocio."
  },
  {
    numero: 88,
    titulo: "Cagada 88",
    texto: "Chantajean a la capital del país: a raíz del aumento del 23,7% en el salario mínimo y el aumento en el precio del diésel, Transmilenio anunció un aumento en las tarifas de los pasajes para costear el incremento en sus costos. Entonces, el gobierno Petro reaccionó amenazando con no cumplir su compromiso de financiar la nueva flota eléctrica de buses si se modificaban las tarifas."
  },
  {
    numero: 89,
    titulo: "Cagada 89",
    texto: "Enfrentar a la delincuencia requiere presupuesto y desafortunadamente éste gobierno les ha quitado recursos a las operaciones, las recompensas y las labores de inteligencia. ¡Así no se puede!"
  },
  {
    numero: 90,
    titulo: "Cagada 90",
    texto: "En febrero de 2025, Petro reconoció que su gobierno había incumplido el 75% de los compromisos asumidos con el pueblo. Así, tan campantes. Son buenos para hablar, pero pésimos para trabajar."
  },
  {
    numero: 91,
    titulo: "Cagada 91",
    texto: "El Presidente tiene muchísimo tiempo libre para trinar, pero en cambio tiene serios problemas para cumplir con su agenda oficial. Además de los retrasos exagerados y las constantes cancelaciones, en una ocasión reclamó públicamente porque se había quedado dormido y nadie lo despertó para llegar a tiempo a una reunión. Pobrecito, sueña dormido y despierto."
  },
  {
    numero: 92,
    titulo: "Cagada 92",
    texto: "Los frecuentes desvaríos del Presidente generan confusión y desconcierto en el país. Dice que es el último Aureliano, que quiere aprender árabe para leer Cien Años de Soledad en ese idioma, que va a enviar los hipopótamos del Magdalena Medio a la India y que vamos a exportarle cebolla al mayor exportador de dicho producto. ¡Coja oficio, hermano!"
  },
  {
    numero: 93,
    titulo: "Cagada 93",
    texto: "En medio del escándalo de corrupción de la UNGRD, ha surgido una versión según la cual parte del dinero habría sido utilizado para comprar la elección de un Magistrado de la Corte Constitucional. Terrible interferencia en la separación de poderes."
  },
  {
    numero: 94,
    titulo: "Cagada 94",
    texto: "Al inicio del cuatrienio abrieron una convocatoria para que los colombianos con doctorado se vincularan al gobierno, dando la sensación de creer en la preparación y la meritocracia. Esto no se concretó y con el pasar de los meses nos fueron vendiendo la idea de que los requisitos son excluyentes, clasistas y que en aras de la inclusión cualquier persona tiene derecho a asumir una posición, aun cuando no tenga la preparación para ello. Con esa excusa relajaron requisitos y cambiaron manuales de funciones en diversas posiciones del Estado."
  },
  {
    numero: 95,
    titulo: "Cagada 95",
    texto: "Han sido los campeones del auto-aplauso. Frecuentemente han entregado condecoraciones y reconocimientos entre los propios funcionarios del gobierno. Por ejemplo, el Presidente otorgó la Estrella de la Policía a Laura Sarabia, Susana Muhammad y Luis Gilberto Murillo."
  },
  {
    numero: 96,
    titulo: "Cagada 96",
    texto: "Fallaron totalmente en la lucha contra la minería ilegal, actividad cuyos ingresos ya superarían a los del narcotráfico. Esto tiene graves consecuencias ambientales."
  },
  {
    numero: 97,
    titulo: "Cagada 97",
    texto: "Persiste un altísimo grado de informalidad laboral y la mayoría de los empleos que se generan en el país están en esa categoría. De hecho, un alto porcentaje corresponde a trabajos precarios con ingresos inferiores a un salario mínimo."
  },
  {
    numero: 98,
    titulo: "Cagada 98",
    texto: "Las calificadoras de riesgo han reducido la calificación de Colombia por cuenta del manejo irresponsable de las finanzas públicas y el grave déficit fiscal. Esto genera que a Colombia le presten dinero más caro cuando lo solicita."
  },
  {
    numero: 99,
    titulo: "Cagada 99",
    texto: "El hermano del Presidente Petro es una figura opaca, que influyó en las elecciones a través de acuerdos con delincuentes en las cárceles y posteriormente ha estado rodeado de graves acusaciones y presuntos abusos de poder."
  },
  {
    numero: 100,
    titulo: "Cagada 100",
    texto: "Este gobierno tiene una actitud hostil hacia la iniciativa privada y Colombia ha retrocedido en el índice de libertad económica por el deterioro del ambiente para hacer negocios."
  },
  {
    numero: 101,
    titulo: "Cagada 101",
    texto: "De forma permanente, el Presidente y algunos de sus Ministros participan abiertamente en política tratando de influir en las próximas elecciones y generando un desequilibrio en la competencia democrática."
  },
  {
    numero: 102,
    titulo: "Cagada 102",
    texto: "Este gobierno derrocha los recursos públicos en gastos innecesarios, como hemos venido denunciando desde la Unidad Contra el Gasto Hormiga. Compras absurdas de ruanas, termos, dotaciones de peluquería, bebidas alcohólicas, talleres de pareja, actividades para solteros y regalos protocolarios, son algunos de los ejemplos. Esto también ha ocurrido en gobiernos anteriores, es decir que no hubo cambio."
  }
])

const filteredCagadas = computed(() => {
  return cagadas.value
})
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.cagadas-container {
  width: 100%;
  min-height: 100vh;
  background-color: #c01718 ;
  margin: 0;
  padding: 0;
}

/* Navigation */
.cagadas-nav {
  background-color: #c01718;
  backdrop-filter: blur(10px);
  border-bottom: 1px solid #3f3f46;
  position: sticky;
  top: 0;
  z-index: 50;
}

.nav-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.nav-flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.nav-title-white {
  color: #ffffff;
}

.nav-title-red {
  color: #ef4444;
}

.nav-button {
  background-color: #ef4444;
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
}

.nav-button:hover {
  background-color: #dc2626;
}

/* Hero Section */
.hero-section {
  background: linear-gradient(to bottom right, #fefae2, #fefae2);
  color: #ffffff;
  padding: 5rem 1.5rem;
  border-bottom: 1px solid #3f3f46;
}

.hero-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-title-red {
  color: #ef4444;
}

.hero-subtitle {
  color: #000000;
  font-size: 1.125rem;
  max-width: 48rem;
  margin: 0 auto;
  line-height: 1.6;
}


/* Cards Section */
.cards-section {
  padding: 4rem 1.5rem;
  background-color: #fefae2;
}

.cards-wrapper {
  max-width: 1400px;
  margin: 0 auto;
}

.cards-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
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
.cagada-card {
  background-color: #c01718;
  border-radius: 1rem;
  padding: 1.5rem;
  border: 1px solid #3f3f46;
  transition: all 0.3s ease;
}

.cagada-card:hover {
  border-color: rgba(239, 68, 68, 0.5);
  transform: translateY(-4px);
}

.card-content-flex {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
}

.card-number {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.125rem;
}

.card-text-wrapper {
  flex: 1;
}

.card-text {
  color: #ffffff;
  line-height: 1.6;
  margin: 0;
}

/* Empty State */
.empty-state {
  text-align: center;
  padding: 5rem 0;
}

.empty-text {
  color: #6b7280;
  font-size: 1.125rem;
}

/* Footer */
.footer-section {
  background-color: #000000;
  border-top: 1px solid #3f3f46;
  color: #ffffff;
  padding: 3rem 1.5rem;
}

.footer-content {
  max-width: 1400px;
  margin: 0 auto;
  text-align: center;
}

.footer-text {
  color: #9ca3af;
  margin: 0;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .nav-title {
    font-size: 1.25rem;
  }
}
</style>