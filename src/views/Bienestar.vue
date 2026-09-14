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

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">

        <div class="col-12 col-md-5">
          <q-img
            src="../assets/bienestar-aprendiz-p.jpeg"
            ratio="4/3"
            class="rounded-borders"
          >
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="48px" />
              </div>
            </template>
          </q-img>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué es Bienestar al Aprendiz?</h2>
          <p class="text-body1">
            Bienestar al Aprendiz es el área del SENA encargada de acompañar a los
            aprendices durante su formación, ofreciendo apoyo psicosocial, deportivo,
            cultural y de salud. Su objetivo es garantizar que el aprendiz cuente con
            las condiciones necesarias para culminar su proceso formativo de manera
            integral, atendiendo situaciones que puedan afectar su permanencia en el
            centro de formación.
          </p>
        </div>

      </div>
    </div>

    <div class="content-section">
      <h3 class="text-primary">Horarios de atención</h3>
      <q-list bordered separator class="rounded-borders">
        <q-item v-for="h in horarios" :key="h.dia">
          <q-item-section>{{ h.dia }}</q-item-section>
          <q-item-section side>{{ h.hora }}</q-item-section>
        </q-item>
      </q-list>
    </div>

    <div class="content-section">
      <h3 class="text-primary">Encargado de atención</h3>
      <q-card flat bordered class="q-pa-md">
        <div class="row items-center q-col-gutter-md">
          <q-avatar size="80px" color="grey-4" text-color="grey-8" icon="person" />
          <div class="col">
            <div class="text-weight-bold">{{ encargado.nombre }}</div>
            <div>{{ encargado.cargo }}</div>
            <div class="text-primary">{{ encargado.correo }}</div>
          </div>
        </div>
      </q-card>
    </div>

  </q-page>

  <footer class="bg-dark text-white q-pa-lg">
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
          <span>WhatsApp: 3176377670</span>
          <span>Correo: mdarenas@sena.edu.com</span>
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
  { dia: 'Lunes', hora: '8:00 a.m. - 12:30 p.m. y 2:00 p.m. - 5:30 p.m.' },
  { dia: 'Martes', hora: '8:00 a.m. - 12:30 p.m. y 2:00 p.m. - 5:30 p.m.' },
  { dia: 'Miércoles', hora: '8:00 a.m. - 12:30 p.m. y 2:00 p.m. - 5:30 p.m.' },
  { dia: 'Jueves', hora: '8:00 a.m. - 12:30 p.m. y 2:00 p.m. - 5:30 p.m.' },
  { dia: 'Viernes', hora: '8:00 a.m. - 12:30 p.m. y 2:00 p.m. - 5:30 p.m.' }
]

const encargado = {
  nombre: 'Nombre completo del encargado',
  cargo: 'Encargado(a) de Bienestar al Aprendiz',
  correo: 'correo@sena.edu.co'
}
</script>

<style scoped>
.hero-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url('../assets/hero.png');
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
</style>