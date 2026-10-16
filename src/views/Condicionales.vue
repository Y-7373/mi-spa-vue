
<script setup>
import { ref } from 'vue'

const calificacion = ref(85)
</script>

<template>
  <section>
    <h2>v-if, v-else-if y v-else</h2>

    <p>
      Estas directivas permiten mostrar contenido dependiendo
      de una condición.
    </p>

    <label for="calificacion">Calificación de 0 a 100:</label>

    <input
      id="calificacion"
      type="number"
      min="0"
      max="100"
      v-model.number="calificacion"
    />

    <p v-if="calificacion < 0 || calificacion > 100">
      Introduce una calificación válida entre 0 y 100.
    </p>

    <p v-else-if="calificacion >= 70">
      ¡Felicidades! Aprobaste la materia.
    </p>

    <p v-else>
      No aprobaste la materia.
    </p>
  </section>
</template>
