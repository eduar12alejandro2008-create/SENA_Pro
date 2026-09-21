<template>
  <q-page class="acerca-page">

    <!-- TÍTULO -->
    <div class="text-center q-pt-xl q-pb-lg">
      <div class="titulo-linea"></div>
      <h4 class="titulo-principal">Acerca del Proyecto y la Organización</h4>
      <p class="text-grey-7">Conoce más sobre la institución y el equipo detrás de este desarrollo</p>
    </div>

    <!-- INFORMACIÓN INSTITUCIONAL -->
    <div class="row justify-center q-px-md q-mb-xl">
      <div class="col-12 col-md-9 col-lg-8">
        <q-card flat bordered class="q-pa-lg info-card">
          <div class="text-h6 text-primary text-center q-mb-md">
            Información Institucional
          </div>
<p class="text-body2 text-center info-texto">
  El SENA cumple la función del Estado de invertir en el desarrollo social y técnico de los
  trabajadores colombianos, ofreciendo formación profesional integral que impulsa su
  incorporación a actividades productivas. Además de la formación en sus centros, brinda
  capacitación para el empleo, apoyo al desarrollo empresarial, servicios tecnológicos para
  el sector productivo y respaldo a proyectos de innovación y competitividad.
</p>

<p class="text-body2 text-center info-texto q-mt-md">
  El <strong>Centro Agroturístico (CAT)</strong> de San Gil fue creado en 1997 como Centro
  Multisectorial de las Provincias Guanentina y Comunera, cambiando su denominación en 2008.
  En su crecimiento, extendió operaciones a una subsede en Socorro (Santander) y, desde 2012,
  alberga el <strong>Tecnoparque Colombia Nodo Socorro</strong>, apoyando el desarrollo
  tecnológico de la región.
</p>

<p class="text-body2 text-center info-texto q-mt-md">
  Con esto, el SENA fortalece la formación profesional integral a nivel urbano y rural,
  impulsa la investigación y el desarrollo tecnológico, y propicia relaciones que fortalecen
  el sistema regional de formación profesional.
</p>

          <div class="row q-col-gutter-md q-mt-md">
            <div class="col-12 col-sm-6">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="location_on" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption>Regional</q-item-label>
                  <q-item-label>Santander</q-item-label>
                </q-item-section>
              </q-item>
            </div>
            <div class="col-12 col-sm-6">
              <q-item>
                <q-item-section avatar>
                  <q-icon name="school" color="primary" />
                </q-item-section>
                <q-item-section>
                  <q-item-label caption>Centro de Formación</q-item-label>
                  <q-item-label>Centro Agroturístico (CAT) - San Gil</q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </div>

          <p class="text-body2 text-center info-texto q-mt-sm">
            El CAT promueve la innovación tecnológica y la investigación aplicada mediante
            proyectos de software alineados a las necesidades de la región, bajo la estrategia
            de <strong>Formación por Proyectos</strong> del SENA.
          </p>
        </q-card>
      </div>
    </div>

    <!-- EQUIPO DE DESARROLLO -->
    <div class="text-center q-mb-md">
      <h5 class="text-primary q-mb-none">Equipo de Desarrollo</h5>
      <p class="text-grey-7 q-mt-xs">
        Programa: Análisis y Desarrollo de Software (ADSO) · Ficha 3174193
      </p>
    </div>

    <div class="row q-col-gutter-md justify-center q-px-md q-mb-xl">
      <div
        class="col-12 col-sm-6 col-md-3"
        v-for="dev in desarrolladores"
        :key="dev.nombre"
      >
        <q-card class="dev-card text-center" flat bordered>
          <q-avatar size="70px" class="q-mt-lg" color="primary" text-color="white">
            <q-icon name="person" size="40px" />
          </q-avatar>
          <q-card-section>
            <div class="text-subtitle1 text-weight-bold">{{ dev.nombre }}</div>
            <div class="text-caption text-grey-7">{{ dev.rol }}</div>
          </q-card-section>
        </q-card>
      </div>
    </div>

    <!-- STACK TECNOLÓGICO -->
    <div class="row justify-center q-px-md q-mb-xl">
      <div class="col-12 col-md-9 col-lg-8 text-center">
        <div class="text-subtitle1 text-primary text-weight-bold q-mb-sm">
          Stack Tecnológico
        </div>
        <div class="row justify-center q-col-gutter-sm">
          <q-chip color="primary" text-color="white" icon="hub">Git & GitHub</q-chip>
          <q-chip color="primary" text-color="white" icon="storage">MongoDB</q-chip>
          <q-chip color="primary" text-color="white" icon="cloud">API REST / Render</q-chip>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <footer class="bg-grey-9 text-white q-pa-lg">
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
            <span>WhatsApp: 305 809 24 44</span>
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

  </q-page>
</template>

<script>
export default {
  name: 'Acerca',
  data() {
    return {
      desarrolladores: [
        { nombre: 'Eduar Alejandro Yáñez Sánchez', rol: 'Líder de Proyecto / Backend' },
        { nombre: 'Carlos Andrés Gómez', rol: 'Requisitos / UI-UX' },
        { nombre: 'María Fernanda Pérez', rol: 'Frontend / Base de Datos' },
        { nombre: 'Juan Sebastián Rodríguez', rol: 'Tester / Documentación' }
      ]
    }
  }
}
</script>

<style scoped>
.acerca-page {
  background: #ffffff;
}

.titulo-linea {
  width: 60px;
  height: 4px;
  background: primary;
  margin: 0 auto 12px auto;
  border-radius: 2px;
}

.titulo-principal {
  color: primary;
  font-weight: 700;
  margin: 0;
}

.info-card {
  border-radius: 14px;
  border-color: #0b6b10;
  background-color:rgb(3, 65, 3);
  color: white;
}

.info-texto {
  max-width: 750px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;

}

.dev-card {
  border-radius: 14px;
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
}

.dev-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}
</style>