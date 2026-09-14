<template>
  <q-page>
    <div class="hero-bg bg-primary text-white q-pa-xl text-center">
      <h1 class="q-my-none">Coordinación Académica</h1>
    </div>

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <q-img src="../assets/coordinacion-p.jpeg" ratio="4/3" class="rounded-borders">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="48px" />
              </div>
            </template>
          </q-img>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué hace la Coordinación Académica?</h2>
          <p class="text-body1">
            La Coordinación Académica es el área que gestiona y hace seguimiento a los
            procesos de formación titulada del SENA. Apoya a los aprendices en trámites
            de novedades académicas como retiros, deserción, traslados y aplazamientos.
            También se encarga de la programación de los instructores durante la
            formación y de la logística necesaria para que los ambientes de aprendizaje
            se mantengan en óptimas condiciones.
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
</template>

<script setup>
const horarios = [
  { dia: 'Lunes a viernes', hora: '7:30 a.m. - 12:00 p.m.' }
]

const encargado = {
  nombre: 'Luis Carlos Reina',
  cargo: 'Coordinador académico',
  correo: 'lreinas@sena.edu.com'
}
</script>

<style scoped>
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>