<template>
  <q-page>
    <q-img src="../assets/cafeteria.jpeg" ratio="21/9">
      <div class="absolute-bottom text-center bg-black bg-opacity-40">
        <div class="text-h3 text-weight-bold">Cafetería</div>
      </div>
    </q-img>

    <div class="q-pa-lg" style="max-width: 1200px; margin: 0 auto;">
      <h2 class="text-primary">¿Qué ofrece?</h2>
      <p class="text-body1">
        La Cafetería del SENA brinda atención al público con venta de comidas para los
        aprendices, instructores y visitantes del centro, garantizando un espacio de
        alimentación accesible dentro de las instalaciones durante la jornada académica.
      </p>

      <h2 class="text-primary">Horarios de atención</h2>
      <q-list bordered separator style="max-width: 400px;">
        <q-item>
          <q-item-section>Lunes a viernes</q-item-section>
          <q-item-section side>7:00 a.m. – 12:00 p.m.</q-item-section>
        </q-item>
        <q-item>
          <q-item-section></q-item-section>
          <q-item-section side>1:00 p.m. – 5:30 p.m.</q-item-section>
        </q-item>
        <q-item>
          <q-item-section></q-item-section>
          <q-item-section side>7:00 p.m. – 9:30 p.m.</q-item-section>
        </q-item>
        <q-item>
          <q-item-section>Sábados</q-item-section>
          <q-item-section side>7:30 a.m. – 12:00 p.m.</q-item-section>
        </q-item>
      </q-list>

      <h2 class="text-primary">Contacto</h2>
      <p class="text-body1">
        <q-icon name="phone" class="q-mr-sm" />322 303 8451
      </p>
      <p class="text-body1">
        <q-icon name="mail" class="q-mr-sm" />lcarreno@sena.edu.com
      </p>

      <h2 class="text-primary">Encargada</h2>
      <q-card flat bordered class="q-pa-md" style="max-width: 420px;">
        <div class="row items-center q-gutter-md">
          <q-avatar size="70px" color="primary" text-color="white" icon="person" />
          <div>
            <div class="text-weight-bold">Coordinadora de cafetería</div>
            <div>lcarreno@sena.edu.com</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
</script>