<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>

/* Solusi: tambahkan ini di global CSS (biasanya di App.vue atau index.html) */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>
