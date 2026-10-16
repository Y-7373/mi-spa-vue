
<script setup>
import { ref } from 'vue'

const lenguajes = ref([
  'JavaScript',
  'Python',
  'Java',
  'C++',
  'PHP'
])
</script>

<template>
  <section>
    <h2>Directiva v-for</h2>

    <p>
      v-for permite recorrer un arreglo y generar elementos
      HTML para cada dato.
    </p>

    <h3>Lenguajes de programación</h3>

    <ul>
      <li v-for="lenguaje in lenguajes" :key="lenguaje">
        {{ lenguaje }}
      </li>
    </ul>
  </section>
</template>
