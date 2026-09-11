<template>
  <q-page>
    <div class="hero bg-primary text-white q-pa-xl text-center">
      <h1 class="q-my-none">Bienvenido al SENA</h1>
      <p class="text-subtitle1 q-mt-sm">Bienestar al aprendiz</p>
    </div>

    <div class="q-pa-md row q-col-gutter-md justify-center">
      <div v-for="item in modulos" :key="item.to" class="col-12 col-sm-6 col-md-3">
        <q-btn
          :to="item.to"
          :icon="item.icon"
          :label="item.label"
          color="primary"
          class="full-width"
          size="lg"
          padding="lg"
          stack
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>

<script setup>
const modulos = [
  { to: '/coordinacion', label: 'Coordinación académica', icon: 'school' },
  { to: '/biblioteca', label: 'Biblioteca', icon: 'menu_book' },
  { to: '/cafeteria', label: 'Cafetería', icon: 'restaurant' }
]
</script>