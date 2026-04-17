<template>
    <Navbar />
    <main>
      <router-view />
    </main>
    <Footer />
  </template>
  
  <script>
  import Navbar from '@/components/ui/Navbar.vue'
  import Footer from '@/components/ui/Footer.vue';
  export default {
    name: 'MainLayout',
    components: {
      Navbar,
      Footer
    }
  }
  </script>