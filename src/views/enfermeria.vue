<template>
  <q-page>
    <!-- Hero Banner Rediseñado -->
    <div class="hero-banner bg-gradient text-white q-pa-xl text-center relative-position">
      <div class="hero-content">
        <q-badge outline color="white" class="q-mb-sm text-subtitle2 q-px-md q-py-xs">
          <q-icon name="local_hospital" class="q-mr-xs" /> Servicio de Salud SENA
        </q-badge>

        <h1 class="text-h2 text-weight-bolder q-my-xs hero-title">
          Enfermería
        </h1>

        <p class="text-subtitle1 text-weight-regular text-white-8 q-mx-auto hero-subtitle">
          Atención en salud, prevención y primeros auxilios para toda la comunidad académica
        </p>
      </div>
    </div>

    <!-- Sección Principal / Presentación -->
    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <img
            src="../assets/enfermeriaia.jpg"
            alt="Área de Enfermería SENA"
            class="rounded-borders foto-servicio shadow-2"
          />
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué ofrece Enfermería?</h2>
          <p class="text-body1">
            Enfermería es el servicio encargado del cuidado de la salud y el bienestar integral de los
            aprendices dentro del centro de formación. Ofrece atención preventiva, orientación en salud
            y atención básica en primeros auxilios ante cualquier eventualidad o emergencia que se presente
            durante la jornada académica.
          </p>
        </div>
      </div>
    </div>

    <!-- Servicios y Atención de Salud -->
    <div class="content-section">
      <h3 class="text-primary text-center q-mb-md">Servicios que ofrece</h3>
      <div class="row q-col-gutter-md justify-center">
        <div v-for="s in servicios" :key="s.label" class="col-6 col-sm-4 col-md-2">
          <q-card flat bordered class="servicio-card q-pa-md text-center full-height">
            <q-icon :name="s.icon" size="28px" color="primary" class="q-mb-xs" />
            <div class="text-body2 text-weight-medium">{{ s.label }}</div>
          </q-card>
        </div>
      </div>
    </div>

    <!-- Misión, Visión y Objetivos de Salud -->
    <div class="bg-grey-2">
      <div class="content-section">
        <div class="row q-col-gutter-lg">
          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="health_and_safety" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Atención Oportuna</div>
              <p class="text-body2 text-grey-9">
                Brindar respuesta rápida y profesional ante accidentes o malestares generales durante la
                estancia en el centro de formación, velando por la integridad de toda la comunidad.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="favorite" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Promoción y Prevención</div>
              <p class="text-body2 text-grey-9">
                Fomentar hábitos de vida saludable, campañas de autocuidado y educación en salud para
                prevenir enfermedades y promover un entorno educativo sano.
              </p>
            </q-card>
          </div>

          <div class="col-12 col-md-4">
            <q-card flat bordered class="q-pa-md full-height">
              <q-icon name="medical_services" size="32px" color="primary" class="q-mb-sm" />
              <div class="text-subtitle1 text-weight-bold q-mb-xs">Acompañamiento</div>
              <p class="text-body2 text-grey-9">
                Ofrecer orientación en salud y canalización a centros asistenciales de salud en caso de
                requerir atención médica especializada.
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

    <!-- Encargada de Atención -->
    <div class="content-section">
      <div class="text-center q-mb-lg">
        <q-icon name="support_agent" size="36px" color="primary" />
        <h3 class="text-primary q-my-sm">Encargada de atención</h3>
        <div class="acento-verde q-mx-auto q-mb-sm"></div>
        <p class="text-body2 text-grey-8">
          Para consultas, atención médica básica o reporte de emergencias, puedes contactar a la encargada.
        </p>
      </div>

      <q-card flat bordered class="encargado-card q-pa-xl flex flex-center" style="max-width: 420px; margin: 0 auto;">
        <div class="column items-center text-center">
          <img
            src="../assets/enfermeria-p.jpeg"
            alt="María Fernanda Gómez Reyes"
            class="foto-encargada q-mb-md"
          />
          <div class="text-h6 text-weight-bold">{{ encargado.nombre }}</div>
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
  { label: 'Primeros Auxilios', icon: 'medical_services' },
  { label: 'Promoción y Prevención', icon: 'health_and_safety' },
  { label: 'Control de Signos Vitales', icon: 'monitor_heart' },
  { label: 'Orientación en Salud', icon: 'volunteer_activism' },
  { label: 'Atención de Emergencias', icon: 'e911_emergency' },
  { label: 'Jornadas de Salud', icon: 'vaccines' }
]

const horarios = [
  { dia: 'Lunes a viernes', hora: '6:30 a.m. - 10:30 a.m. y 4:00 p.m. - 8:00 p.m.' }
]

const encargado = {
  nombre: 'María Fernanda Gómez Reyes',
  cargo: 'Enfermera',
  correo: 'Mafecita1118@gmail.com',
  telefono: '321 415 3995'
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

.foto-encargada {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--q-primary);
  box-shadow: 0 4px 10px rgba(0,0,0,0.15);
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