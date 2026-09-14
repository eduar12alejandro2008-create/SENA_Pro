<template>
  <q-page>
<q-img src="../assets/bibliotecame.jpeg" ratio="21/9">
      <div class="absolute-bottom text-center bg-black bg-opacity-40">
        <div class="text-h3 text-weight-bold">Biblioteca</div>
      </div>
    </q-img>

    <div class="q-pa-lg" style="max-width: 1200px; margin: 0 auto;">
      <h2 class="text-primary">¿Qué ofrece?</h2>
      <p class="text-body1">
        La Biblioteca del SENA es un espacio de apoyo académico abierto a todos los aprendices,
        donde pueden realizar consultas en sala, solicitar préstamos a domicilio y acceder al
        préstamo interbibliotecario (PIB) con otras instituciones. Además, ofrece talleres de
        lectura, capacitaciones y acceso a herramientas TIC, junto con asesorías personalizadas
        en búsqueda de información y en el uso adecuado del catálogo bibliográfico.
      </p>

      <h2 class="text-primary">Horarios de atención</h2>
      <q-list bordered separator style="max-width: 400px;">
        <q-item>
          <q-item-section>Lunes a viernes</q-item-section>
          <q-item-section side>7:00 a.m. – 10:00 a.m.</q-item-section>
        </q-item>
      </q-list>

      <h2 class="text-primary">Contacto</h2>
      <p class="text-body1">
        <q-icon name="phone" class="q-mr-sm" />312 584 8032
      </p>

      <h2 class="text-primary">Encargada</h2>
      <q-card flat bordered class="q-pa-md" style="max-width: 420px;">
        <div class="row items-center q-gutter-md">
          <q-avatar size="70px" color="primary" text-color="white" icon="person" />
          <div>
            <div class="text-weight-bold">Yudith Milagros Martínez Bautista</div>
            <div>Bibliotecaria</div>
            <div>ymmartinez@sena.edu.co</div>
          </div>
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
</script>