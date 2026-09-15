<template>
  <q-page>
    <!-- Hero Banner Rediseñado -->
    <div class="hero-banner bg-gradient text-white q-pa-xl text-center relative-position">
      <div class="hero-content">
        <q-badge outline color="white" class="q-mb-sm text-subtitle2 q-px-md q-py-xs">
          <q-icon name="restaurant" class="q-mr-xs" /> Servicio de Alimentación SENA
        </q-badge>

        <h1 class="text-h2 text-weight-bolder q-my-xs hero-title">
          Cafetería
        </h1>

        <p class="text-subtitle1 text-weight-regular text-white-8 q-mx-auto hero-subtitle">
          Espacio de alimentación, descanso y convivencia para toda la comunidad académica
        </p>
      </div>
    </div>

    <!-- Sección Principal / Presentación -->
    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <img
            src="../assets/cafeteriamela.jpg"
            alt="Cafetería SENA"
            class="rounded-borders foto-servicio shadow-2"
          />
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué ofrece la Cafetería?</h2>
          <p class="text-body1">
            La Cafetería es el espacio destinado a la alimentación y esparcimiento dentro del centro de
            formación. Aquí se presta un servicio de calidad para que aprendices, instructores y personal
            administrativo puedan disfrutar de sus alimentos durante la jornada laboral y de estudio,
            de acuerdo con los turnos y horarios establecidos.
          </p>
        </div>
      </div>
    </div>

    <!-- Servicios y Menú Oferta -->
    <div class="content-section">
      <h3 class="text-primary text-center q-mb-md">Servicios e Instalaciones</h3>
      <div class="row q-col-gutter-md justify-center">
        <div v-for="s in servicios" :key="s.label" class="col-6 col-sm-4 col-md-2">
          <q-card flat bordered class="servicio-card q-pa-md text-center full-height">
            <q-icon :name="s.icon" size="28px" color="primary" class="q-mb-xs" />
            <div class="text-body2 text-weight-medium">{{ s.label }}</div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Misión, Visión y Objetivo de la Cafetería -->
    <div class="bg-grey-2">
      <div class="content-section">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="restaurant_menu" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Servicio de Calidad</div>
              <p class="text-body2 text-grey-9">
                Ofrecer productos frescos, variados y nutritivos que satisfagan las necesidades alimenticias
                de toda la comunidad educativa, garantizando estrictos estándares de higiene e inocuidad.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="groups" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Espacio Amigable</div>
              <p class="text-body2 text-grey-9">
                Fomentar un ambiente cómodo, limpio y acogedor que propicie el descanso, el diálogo respetuoso
                y el bienestar integral entre aprendices, instructores y visitantes.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="bolt" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Atención Ágil</div>
              <p class="text-body2 text-grey-9">
                Optimizar los tiempos de atención y preparación para garantizar que la comunidad educativa
                pueda aprovechar al máximo sus recesos y jornadas de descanso.
              </p>
            </q-card>
          </div>
        </div>
      </div>
    </div>

    <!-- Horarios de Atención -->
    <div class="bg-grey-2">
      <div class="content-section">
        <h3 class="text-primary">Horarios de atención</h3>
        <q-list bordered separator class="rounded-borders bg-white">
          <q-item v-for="h in horarios" :key="h.dia">
            <q-item-section class="text-weight-medium">{{ h.dia }}</q-item-section>
            <q-item-section side class="text-primary text-weight-bold">{{ h.hora }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <!-- Encargada de atención con Avatar diseñado -->
    <div class="content-section">
      <div class="text-center q-mb-lg">
        <q-icon name="support_agent" size="36px" color="primary" />
        <h3 class="text-primary q-my-sm">Encargada de atención</h3>
        <div class="acento-verde q-mx-auto q-mb-sm"></div>
        <p class="text-body2 text-grey-8">
          Para dudas, sugerencias o inquietudes sobre el servicio de cafetería, puedes contactar a la encargada.
        </p>
      </div>

      <q-card flat bordered class="encargado-card q-pa-xl flex flex-center" style="max-width: 420px; margin: 0 auto;">
        <div class="column items-center text-center">
          <q-avatar size="128px" class="bg-primary text-white text-h4 text-weight-bold q-mb-md shadow-3">
            LC
          </q-avatar>
          <div class="text-h6 text-weight-bold">Luz Carreño</div>
          <div class="text-body1 text-grey-8 q-mb-sm">{{ encargado.cargo }}</div>

          <div class="row items-center q-gutter-xs q-mb-xs">
            <q-icon name="mail" size="18px" color="primary" />
            <a :href="'mailto:' + encargado.correo" class="text-primary contacto-link">{{ encargado.correo }}</a>
          </div>

          <div class="row items-center q-gutter-xs">
            <q-icon name="phone" size="18px" color="primary" />
            <span class="text-grey-8">{{ encargado.telefono }}</span>
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
  { label: 'Bebidas Calientes', icon: 'local_cafe' },
  { label: 'Snacks y Mecato', icon: 'lunch_dining' },
  { label: 'Platos del Día', icon: 'flatware' },
  { label: 'Jugos Naturales', icon: 'local_bar' },
  { label: 'Área de Mesas', icon: 'deck' },
  { label: 'Atención Ágil', icon: 'timer' }
]

const horarios = [
  { dia: 'Lunes a viernes', hora: '7:00 a.m. - 12:00 p.m. · 1:00 p.m. - 5:30 p.m. · 7:00 p.m. - 9:30 p.m.' },
  { dia: 'Sábados', hora: '7:30 a.m. - 12:00 p.m.' }
]

const encargado = {
  cargo: 'Coordinadora de cafetería',
  correo: 'lcarreno@sena.edu.co',
  telefono: '322 303 8451'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&display=swap');

h1, h2, h3 {
  font-family: 'Poppins', 'Segoe UI', sans-serif;
  font-weight: 600;
  letter-spacing: 0.3px;
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
  padding: 32px 16px;
}

.foto-servicio {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
  border-radius: 8px;
}

.servicio-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.servicio-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  background-color: #f2f2f2;
}

.encargado-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.encargado-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  background-color: #f2f2f2;
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