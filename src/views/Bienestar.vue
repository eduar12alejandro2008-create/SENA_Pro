<template>
  <q-page>
    <div class="hero-bg text-white q-pa-xl text-center">
      <h1 class="q-my-none">Bienvenido al SENA</h1>
      <p class="text-subtitle1 q-mt-sm">Bienestar al aprendiz</p>
    </div>

    <div class="src/assets/principal" style="max-width: 1200px; margin: 0 auto;">
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
  </q-page>
</template>

<script setup>
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
</style>