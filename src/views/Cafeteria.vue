<template>
  <q-page>
    <div class="hero-bg bg-primary text-white q-pa-xl text-center">
      <h1 class="q-my-none">Cafetería</h1>
    </div>

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <q-img src="../assets/cafeteria.jpeg" ratio="4/3" class="rounded-borders">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="48px" />
              </div>
            </template>
          </q-img>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué ofrece la Cafetería?</h2>
          <p class="text-body1">
            La Cafetería es el espacio destinado a la alimentación dentro del centro de
            formación, donde se presta un servicio de venta y atención al cliente para
            que aprendices e instructores puedan tomar sus alimentos durante la jornada,
            de acuerdo con los turnos y horarios establecidos.
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
      <h3 class="text-primary">Encargada de atención</h3>
      <q-card flat bordered class="q-pa-md">
        <div class="row items-center q-col-gutter-md">
          <q-avatar size="80px" color="grey-4" text-color="grey-8" icon="person" />
          <div class="col">
            <div class="text-weight-bold">{{ encargado.cargo }}</div>
            <div class="text-primary">{{ encargado.correo }}</div>
            <div>{{ encargado.telefono }}</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const horarios = [
  { dia: 'Lunes a viernes', hora: '7:00 a.m. - 12:00 p.m. · 1:00 p.m. - 5:30 p.m. · 7:00 p.m. - 9:30 p.m.' },
  { dia: 'Sábados', hora: '7:30 a.m. - 12:00 p.m.' }
]

const encargado = {
  cargo: 'Coordinadora de cafetería',
  correo: 'lcarreno@sena.edu.com',
  telefono: '322 303 8451'
}
</script>

<style scoped>
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>