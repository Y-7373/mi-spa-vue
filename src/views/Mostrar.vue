
<script setup>
import { ref } from 'vue'

const mostrar = ref(true)
</script>

<template>
  <section>
    <h2>Directiva v-show</h2>

    <p>
      v-show permite mostrar u ocultar un elemento mediante
      la propiedad CSS display, sin eliminarlo del DOM.
    </p>

    <button @click="mostrar = !mostrar">
      {{ mostrar ? 'Ocultar mensaje' : 'Mostrar mensaje' }}
    </button>

    <p v-show="mostrar">
      ¡Hola! Este mensaje se controla con v-show.
    </p>
  </section>
</template>
