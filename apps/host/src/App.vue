<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import { loadRemoteComponent } from '@micro/shared'

const HeaderApp = defineAsyncComponent(() =>
  loadRemoteComponent('http://localhost:5173/remoteEntry.js', './HeaderApp')
)
</script>

<template>
  <div id="app">
    <HeaderApp />
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped></style>
