<template>
  <q-page>
    <div class="hero-bg text-white q-pa-xl text-center">
      <h1 class="q-my-none">Bienvenido al SENA</h1>
      <p class="text-subtitle1 q-mt-sm">Bienestar al aprendiz</p>
    </div>

    <div class="content-section">
      <h2 class="text-primary">¿Qué es el SENA?</h2>
      <p class="text-body1">
        El Servicio Nacional de Aprendizaje (SENA) es una entidad pública colombiana
        encargada de ofrecer formación profesional gratuita a millones de colombianos,
        con el fin de contribuir al desarrollo técnico, tecnológico y social del país.
        A través de sus programas de formación titulada y complementaria, el SENA
        prepara a los aprendices con las competencias necesarias para vincularse al
        mundo laboral o crear sus propios proyectos productivos.
      </p>
    </div>

    <div class="bg-grey-2">
      <div class="content-section">
        <div class="row q-col-gutter-lg">
        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height">
            <q-icon name="flag" size="32px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Misión</div>
            <p class="text-body2 text-grey-9">
              El SENA está encargado de cumplir la función que le corresponde al
              Estado de invertir en el desarrollo social y técnico de los
              trabajadores colombianos, ofreciendo y ejecutando la formación
              profesional integral para la incorporación y el desarrollo de las
              personas en actividades productivas que contribuyan al desarrollo
              social, económico y tecnológico del país.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height">
            <q-icon name="visibility" size="32px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Visión</div>
            <p class="text-body2 text-grey-9">
              Para el año 2026, el SENA estará a la vanguardia de la cualificación
              del talento humano, tanto a nivel nacional como internacional, a
              través de la formación profesional integral, el empleo, el
              emprendimiento y el reconocimiento de aprendizajes previos.
            </p>
          </q-card>
        </div>

        <div class="col-12 col-md-4">
          <q-card flat bordered class="q-pa-md full-height">
            <q-icon name="track_changes" size="32px" color="primary" class="q-mb-sm" />
            <div class="text-subtitle1 text-weight-bold q-mb-xs">Objetivo</div>
            <p class="text-body2 text-grey-9">
              Generar valor público y fortalecer la economía, con un enfoque
              diferencial orientado a la transformación productiva, dando
              formación profesional integral que aumente la productividad
              nacional y promueva el desarrollo económico y social del país.
            </p>
          </q-card>
        </div>
        </div>
      </div>
    </div>

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">

        <div class="col-12 col-md-5">
          <img
            src="../assets/bienestarulto.jpg"
            alt="Bienestar al aprendiz"
            class="rounded-borders foto-servicio"
          />
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué es Bienestar al Aprendiz?</h2>
          <p class="text-body1">
            Bienestar al Aprendiz es una estrategia institucional para contribuir en la
            permanencia de los aprendices en su proceso formativo. Sus servicios están
            alineados con la Política Nacional Integral de Bienestar al Aprendiz: el
            reconocimiento de la cultura como creadora de identidad e inclusión; la
            prevención de la enfermedad y promoción de la salud física y mental; el
            fortalecimiento de habilidades blandas y para la vida; el deporte y el
            aprovechamiento del tiempo libre; y la promoción de expresiones artísticas.
            También se manejan apoyos socioeconómicos (sostenimiento, FIC, medios
            tecnológicos, alimentación y transporte), monitorías y liderazgo.
          </p>
        </div>

      </div>
    </div>

    <div class="bg-grey-2">
      <div class="content-section">
        <h3 class="text-primary">Horarios de atención</h3>
        <q-list bordered separator class="rounded-borders bg-white">
          <q-item v-for="h in horarios" :key="h.area">
            <q-item-section>{{ h.area }}</q-item-section>
            <q-item-section side>{{ h.hora }}</q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>

    <div class="content-section">
      <h3 class="text-primary">Encargada de atención</h3>
      <q-card flat bordered class="encargado-card q-pa-xl flex flex-center" style="max-width: 420px; margin: 0 auto;">
        <div class="column items-center text-center">
          <img
            src="../assets/bienestar-aprendiz-p.jpeg"
            alt="María Delia Arenas Mejía"
            class="foto-encargada q-mb-md"
          />
          <div class="text-h6 text-weight-bold">{{ encargado.nombre }}</div>
          <div class="text-body1 text-grey-8 q-mb-sm">{{ encargado.cargo }}</div>
          <div class="text-subtitle1 text-primary">{{ encargado.correo }}</div>
          <div class="text-subtitle1 text-grey-8">{{ encargado.telefono }}</div>
        </div>
      </q-card>
    </div>

  </q-page>

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
const horarios = [
  { area: 'Enfermería (sede principal)', hora: '6:30 a.m. - 10:30 a.m. y 4:00 p.m. - 8:00 p.m.' },
  { area: 'Enfermería (Unisangil)', hora: '8:00 a.m. - 12:00 p.m. y 4:00 p.m. - 8:00 p.m.' },
  { area: 'Apoyos socioeconómicos', hora: '8:00 a.m. - 12:00 p.m. y 2:00 p.m. - 6:00 p.m.' },
  { area: 'Líder de bienestar al aprendiz', hora: '7:30 a.m. - 12:00 p.m. y 2:00 p.m. - 6:00 p.m.' }
]

const encargado = {
  nombre: 'María Delia Arenas Mejía',
  cargo: 'Líder de bienestar al aprendiz',
  correo: 'mdarenas@sena.edu.com',
  telefono: '317 637 7670'
}
</script>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(30, 40, 30, 0.55), rgba(30, 40, 30, 0.55)),
    url('../assets/ini-sena.png');
  background-size: cover;
  background-position: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}

.encargado-card {
  transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease;
}

.encargado-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
  background-color: #f2f2f2;
}

.foto-servicio {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  display: block;
}

.foto-encargada {
  width: 128px;
  height: 128px;
  border-radius: 50%;
  object-fit: cover;
}
</style>