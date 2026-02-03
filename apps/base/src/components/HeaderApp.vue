

<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(false);

function toggleDark() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
}
</script>

<template>
  <header class="header-app">
    <div class="header-content">
      <h1 class="header-title">My Application Header</h1>
      <button class="dark-switch" @click="toggleDark">
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </div>
  </header>
</template>

<style scoped>
.header-app {
  width: 100%;
  background: var(--header-bg, #f5f5f5);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0,0,0,0.04);
}
.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
.header-title {
  font-size: 1.5rem;
  font-weight: 600;
}
.dark-switch {
  background: none;
  border: 1px solid #ccc;
  border-radius: 20px;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s;
}
.dark-switch:hover {
  background: #eee;
}

/* Dark mode styles */
:root.dark {
  --header-bg: #222;
}
.dark :is(.header-app) {
  color: #fff;
  background: var(--header-bg, #222);
}
.dark .dark-switch {
  border-color: #444;
  background: #333;
  color: #fff;
}
</style>
