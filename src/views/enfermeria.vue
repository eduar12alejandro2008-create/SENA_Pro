<template>
  <q-page>
    <q-img src="../assets/enfermeria.jpeg" ratio="21/9">
      <div class="absolute-bottom text-center bg-black bg-opacity-40">
        <div class="text-h3 text-weight-bold">Enfermería</div>
      </div>
    </q-img>

    <div class="q-pa-lg" style="max-width: 1200px; margin: 0 auto;">
      <h2 class="text-primary">¿Qué ofrece?</h2>
      <p class="text-body1">
        El servicio de Enfermería ofrece atención en promoción y prevención de
        enfermedades, así como atención básica en primeros auxilios para los
        aprendices, instructores y funcionarios del centro.
      </p>

      <h2 class="text-primary">Horarios de atención</h2>
      <q-list bordered separator style="max-width: 400px;">
        <q-item>
          <q-item-section>Lunes a viernes</q-item-section>
          <q-item-section side>6:30 a.m. – 10:30 a.m.</q-item-section>
        </q-item>
        <q-item>
          <q-item-section></q-item-section>
          <q-item-section side>4:00 p.m. – 8:00 p.m.</q-item-section>
        </q-item>
      </q-list>

      <h2 class="text-primary">Contacto</h2>
      <p class="text-body1">
        <q-icon name="phone" class="q-mr-sm" />321 415 3995
      </p>

      <h2 class="text-primary">Encargada</h2>
      <q-card flat bordered class="q-pa-md" style="max-width: 420px;">
        <div class="row items-center q-gutter-md">
          <q-avatar size="70px" color="primary" text-color="white" icon="person" />
          <div>
            <div class="text-weight-bold">María Fernanda Gómez Reyes</div>
            <div>Enfermera</div>
            <div>Mafecita1118@gmail.com</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
</script>