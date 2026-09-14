<template>
  <q-page>
    <div class="hero-bg bg-primary text-white q-pa-xl text-center">
      <h1 class="q-my-none">Enfermería</h1>
    </div>

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <q-img src="../assets/enfermeria-p.jpeg" ratio="4/3" class="rounded-borders">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="48px" />
              </div>
            </template>
          </q-img>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué ofrece Enfermería?</h2>
          <p class="text-body1">
            Enfermería es el servicio encargado del cuidado de la salud de los
            aprendices dentro del centro de formación. Ofrece atención en promoción y
            prevención de enfermedades, así como atención básica en primeros auxilios
            ante cualquier eventualidad que se presente durante la jornada académica.
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
            <div class="text-weight-bold">{{ encargado.nombre }}</div>
            <div>{{ encargado.cargo }}</div>
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
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>