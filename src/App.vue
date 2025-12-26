<script setup lang="ts">
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <n-config-provider>
    <n-layout>
      <n-layout-header>
        <Header />
      </n-layout-header>
      <n-layout-content>
        <router-view />
      </n-layout-content>
      <n-layout-footer>
        <Footer />
      </n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>
