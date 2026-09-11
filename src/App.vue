<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>

        
        <q-avatar>
          <img src="/favicon.svg" alt="Logo SENA">
        </q-avatar>
        <q-toolbar-title class="q-ml-sm">
          SENA
        </q-toolbar-title>

    
        <q-tabs align="left" class="text-white" dense>

          <q-route-tab to="/bienestar" label="Bienestar al aprendiz" />
          <q-route-tab to="/coordinacion" label="Coordinacion academica" />
          <q-route-tab to="/biblioteca" label="Biblioteca" />
          <q-route-tab to="/cafeteria" label="Cafeteria" />
        </q-tabs>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

