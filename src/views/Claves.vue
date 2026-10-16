
<script setup>
import { ref } from 'vue'

const productos = ref([
  { id: 1, nombre: 'Teclado', precio: 350 },
  { id: 2, nombre: 'Mouse', precio: 180 },
  { id: 3, nombre: 'Monitor', precio: 2500 }
])
</script>

<template>
  <section>
    <h2>Directiva v-bind:key</h2>

    <p>
      La clave permite que Vue identifique cada elemento
      de una lista al actualizar la interfaz.
    </p>

    <h3>Catálogo de productos</h3>

    <ul>
      <li
        v-for="producto in productos"
        :key="producto.id"
      >
        {{ producto.nombre }} - ${{ producto.precio }} MXN
      </li>
    </ul>

    <p>
      En este ejemplo, :key="producto.id" asigna una clave
      única a cada producto.
    </p>
  </section>
</template>
