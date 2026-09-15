<template>
  <q-page>
    <!-- Hero Banner Rediseñado -->
    <div class="hero-banner bg-gradient text-white q-pa-xl text-center relative-position">
      <div class="hero-content">
        <q-badge outline color="white" class="q-mb-sm text-subtitle2 q-px-md q-py-xs shadow-1">
          <q-icon name="menu_book" class="q-mr-xs" /> Centro de Recursos para el Aprendizaje
        </q-badge>

        <h1 class="text-h2 text-weight-bolder q-my-xs hero-title">
          Biblioteca
        </h1>

        <p class="text-subtitle1 text-weight-regular text-white-8 q-mx-auto hero-subtitle">
          Acceso a consulta bibliográfica, espacios de estudio y recursos digitales para tu formación integral
        </p>
      </div>
    </div>

    <!-- Sección Principal / Presentación -->
    <div class="content-section">
      <div class="row q-col-gutter-xl items-center">
        <div class="col-12 col-md-5">
          <div class="img-container shadow-3 rounded-borders">
            <img
              src="../assets/bibliotecaultimi.jpg"
              alt="Biblioteca SENA"
              class="foto-servicio"
            />
          </div>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary text-h4 text-weight-bold q-mb-md">¿Qué ofrece la Biblioteca?</h2>
          <p class="text-body1 text-grey-9 line-height-lg">
            La Biblioteca es el espacio de apoyo académico donde los aprendices pueden
            fortalecer su proceso de formación a través de la consulta de material
            bibliográfico y el acompañamiento de personal especializado. Entre sus
            servicios se encuentran las consultas en sala, los préstamos a domicilio,
            el préstamo interbibliotecario (PIP), talleres de lectura, capacitaciones,
            acceso a TIC, asesorías en búsqueda de información y orientación para el
            uso adecuado del catálogo bibliográfico.
          </p>
        </div>
      </div>
    </div>

    <!-- Servicios que ofrece -->
    <div class="bg-grey-2">
      <div class="content-section">
        <h3 class="text-primary text-center text-h5 text-weight-bold q-mb-lg">Servicios que ofrece</h3>
        <div class="row q-col-gutter-md justify-center">
          <div v-for="s in servicios" :key="s.label" class="col-6 col-sm-4 col-md-3">
            <q-card flat bordered class="servicio-card q-pa-md text-center full-height flex flex-center column">
              <q-icon :name="s.icon" size="32px" color="primary" class="q-mb-xs" />
              <div class="text-body2 text-weight-medium text-grey-9">{{ s.label }}</div>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Pilares / Beneficios -->
    <div class="content-section">
      <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height card-pilar">
            <q-icon name="menu_book" size="36px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Acervo Bibliográfico</div>
            <p class="text-body2 text-grey-8">
              Amplio catálogo físico e interbibliotecario adaptado a todos los programas de formación técnica y tecnológica.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height card-pilar">
            <q-icon name="laptop_mac" size="36px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Recursos Digitales & TIC</div>
            <p class="text-body2 text-grey-8">
              Acceso a bases de datos especializadas, repositorios digitales y equipos de cómputo para consulta e investigación.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height card-pilar">
            <q-icon name="psychology" size="36px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Asesoría Especializada</div>
            <p class="text-body2 text-grey-8">
              Acompañamiento personalizado en técnicas de búsqueda, citación y uso del sistema de bibliotecas.
            </p>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Horarios de atención -->
    <div class="bg-grey-2">
      <div class="content-section">
        <h3 class="text-primary text-h5 text-weight-bold q-mb-md">Horarios de atención</h3>
        <q-list bordered separator class="rounded-borders bg-white shadow-1">
          <q-item v-for="h in horarios" :key="h.dia" class="q-py-md">
            <q-item-section avatar>
              <q-icon :name="h.icon" color="primary" size="24px" />
            </q-item-section>
            <q-item-section class="text-weight-medium text-grey-9">{{ h.dia }}</q-item-section>
            <q-item-section side class="text-primary text-weight-bold">{{ h.hora }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- Encargada de atención -->
    <div class="content-section">
      <div class="text-center q-mb-lg">
        <q-icon name="auto_stories" size="36px" color="primary" />
        <h3 class="text-primary text-h5 text-weight-bold q-my-sm">Encargada de atención</h3>
        <div class="acento-verde q-mx-auto q-mb-sm"></div>
        <p class="text-body2 text-grey-8">
          Para préstamos, asesorías o novedades con el material bibliográfico, puedes comunicarte directamente con la bibliotecaria.
        </p>
      </div>

      <q-card flat bordered class="encargado-card q-pa-xl flex flex-center" style="max-width: 420px; margin: 0 auto;">
        <div class="column items-center text-center">
          <img
            src="../assets/biblioteca-p.jpeg"
            alt="Yudith Milagros Martínez Bautista"
            class="foto-encargada q-mb-md"
          />
          <div class="text-h6 text-weight-bold text-grey-9">{{ encargado.nombre }}</div>
          <div class="text-body1 text-grey-8 q-mb-sm">{{ encargado.cargo }}</div>

          <div class="row items-center q-gutter-xs q-mb-xs">
            <q-icon name="mail" size="18px" color="primary" />
            <a :href="'mailto:' + encargado.correo" class="text-primary contacto-link">{{ encargado.correo }}</a>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon name="phone" size="18px" color="primary" />
            <span class="text-grey-8 text-weight-medium">{{ encargado.telefono }}</span>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>

  <!-- Footer Estándar -->
  <footer class="bg-grey-9 text-white q-pa-lg">
    <div class="row q-col-gutter-lg">

      <div class="col-12 col-md-8">
        <div class="row items-center q-mb-md">
          <q-icon name="school" size="32px" color="primary" class="q-mr-sm" />
          <div>
            <div class="text-weight-bold">SERVICIO NACIONAL DE APRENDIZAJE</div>
            <div class="text-weight-bold">SENA</div>
          </div>
        </div>

        <div class="text-subtitle2 text-weight-bold q-mb-xs">Sede principal</div>
        <p class="q-mb-xs">Dirección: <b>Calle 57 No. 8 - 69 Bogotá D.C.</b></p>
        <p class="q-mb-xs">Horario de atención: <b>8:00 a.m. a 12:30 p.m. y 2:00 p.m. a 5:30 p.m.</b></p>
        <p class="q-mb-xs">Teléfono conmutador: <b>+57 601 736 6060</b></p>
        <p class="q-mb-md">Correo institucional: <b>servicioalciudadano@sena.edu.co</b></p>

        <div class="row q-gutter-md text-caption">
          <span>Facebook: @SENA</span>
          <span>Instagram: @SENACOMUNICA</span>
          <span>WhatsApp: 305 809 24 44</span>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="text-subtitle2 text-weight-bold q-mb-sm">Enlaces</div>
        <div class="column q-gutter-xs">
          <a href="#" class="text-white">Directorio institucional</a>
          <a href="#" class="text-white">Políticas</a>
          <a href="#" class="text-white">Mapa del sitio</a>
          <a href="#" class="text-white">Términos y condiciones</a>
        </div>
      </div>

    </div>
  </footer>
</template>

<script setup>
const servicios = [
  { label: 'Consulta en sala', icon: 'menu_book' },
  { label: 'Préstamo a domicilio', icon: 'import_contacts' },
  { label: 'Préstamo interbibliotecario (PIP)', icon: 'swap_horiz' },
  { label: 'Talleres de lectura', icon: 'auto_stories' },
  { label: 'Capacitaciones', icon: 'school' },
  { label: 'Acceso a TIC', icon: 'computer' },
  { label: 'Asesorías en búsqueda', icon: 'search' },
  { label: 'Catálogo bibliográfico', icon: 'category' }
]

const horarios = [
  { dia: 'Consulta y préstamo en sala', hora: '7:00 a.m. - 12:00 p.m. y 2:00 p.m. - 5:00 p.m.', icon: 'meeting_room' },
  { dia: 'Préstamo a domicilio', hora: '7:00 a.m. - 4:30 p.m.', icon: 'home' },
  { dia: 'Asesorías y capacitaciones', hora: 'Martes y jueves, 2:00 p.m. - 4:00 p.m.', icon: 'cast_for_education' },
  { dia: 'Jornada especial sábados', hora: '8:00 a.m. - 12:00 p.m.', icon: 'event' }
]

const encargado = {
  nombre: 'Yudith Milagros Martínez Bautista',
  cargo: 'Bibliotecaria',
  correo: 'ymmartinez@sena.edu.co',
  telefono: '312 584 8032'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

h1, h2, h3 {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  letter-spacing: 0.3px;
}

.line-height-lg {
  line-height: 1.7;
}

/* Rediseño Hero Banner */
.bg-gradient {
  background: linear-gradient(135deg, #2e7d32 0%, #1b5e20 100%);
  border-bottom: 4px solid #4caf50;
  box-shadow: inset 0 -10px 20px rgba(0, 0, 0, 0.15);
  padding: 50px 20px;
}

.hero-title {
  font-family: 'Poppins', sans-serif;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.hero-subtitle {
  max-width: 650px;
  opacity: 0.95;
}

.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 36px 16px;
}

.img-container {
  overflow: hidden;
  border-radius: 12px;
}

.foto-servicio {
  width: 100%;
  height: 320px;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.img-container:hover .foto-servicio {
  transform: scale(1.03);
}

.foto-encargada {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--q-primary);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.servicio-card, .card-pilar {
  border-radius: 10px;
  transition: transform 0.25 ease, box-shadow 0.25s ease, background-color 0.2s ease;
}

.servicio-card:hover, .card-pilar:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
  background-color: #ffffff;
}

.encargado-card {
  border-radius: 12px;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}

.encargado-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
}

.acento-verde {
  width: 60px;
  height: 4px;
  background-color: var(--q-primary);
  border-radius: 4px;
}

.contacto-link {
  text-decoration: none;
  font-size: 1rem;
}

.contacto-link:hover {
  text-decoration: underline;
}
</style>