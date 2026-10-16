
<template>
  <div class="contenedor">
    <header>
      <h1>Mi SPA: Directivas de Vue 3</h1>
      <p>Aprende Vue mediante ejemplos interactivos</p>
    </header>

    <nav>
      <router-link to="/">Inicio</router-link>
      <router-link to="/condicionales">v-if</router-link>
      <router-link to="/v-show">v-show</router-link>
      <router-link to="/v-for">v-for</router-link>
      <router-link to="/key">v-bind:key</router-link>
    </nav>

    <main>
      <router-view />
    </main>

    <footer>
      <p>Proyecto Unidad 3 | Vue 3 y Vue Router</p>
    </footer>
  </div>
</template>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, sans-serif;
  background: #f1f5f9;
  color: #243047;
}

.contenedor {
  max-width: 1100px;
  margin: auto;
  padding: 20px;
}

header {
  background: #166534;
  color: white;
  padding: 28px;
  border-radius: 12px;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 20px 0;
}

nav a {
  color: #166534;
  background: white;
  padding: 12px 16px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
}

nav a.router-link-active {
  background: #166534;
  color: white;
}

main {
  background: white;
  padding: 25px;
  border-radius: 12px;
  min-height: 280px;
}

button {
  padding: 10px 16px;
  margin: 8px 0;
  cursor: pointer;
  background: #15803d;
  color: white;
  border: none;
  border-radius: 6px;
}

input {
  padding: 8px;
  margin: 10px;
}

li {
  margin: 10px 0;
}

footer {
  text-align: center;
  margin-top: 25px;
  color: #64748b;
}
</style>
