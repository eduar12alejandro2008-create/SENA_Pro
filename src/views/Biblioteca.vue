<template>
  <q-page>
    <div class="hero-bg bg-primary text-white q-pa-xl text-center">
      <h1 class="q-my-none">Biblioteca</h1>
      <p class="text-subtitle1 q-mt-sm">Centro de Recursos para el Aprendizaje</p>
    </div>

    <div class="content-section">
      <div class="row q-col-gutter-lg items-center">
        <div class="col-12 col-md-5">
          <q-img src="../assets/biblioteca-p.jpeg" ratio="4/3" class="rounded-borders">
            <template v-slot:error>
              <div class="absolute-full flex flex-center bg-grey-3 text-grey-7">
                <q-icon name="image" size="48px" />
              </div>
            </template>
          </q-img>
        </div>

        <div class="col-12 col-md-7">
          <h2 class="text-primary">¿Qué ofrece la Biblioteca?</h2>
          <p class="text-body1">
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
            <div>{{ encargado.telefono }}</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const horarios = [
  { dia: 'Lunes a viernes', hora: '7:00 a.m. - 10:00 a.m.' }
]

const encargado = {
  nombre: 'Yudith Milagros Martínez Bautista',
  cargo: 'Bibliotecaria',
  correo: 'ymmartinez@sena.edu.co',
  telefono: '312 584 8032'
}
</script>

<style scoped>
.content-section {
  max-width: 1200px;
  margin: 0 auto;
  padding: 32px 16px;
}
</style>