

<script setup lang="ts">
import { ref } from 'vue';

const isDark = ref(false);

function toggleDark() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle('dark', isDark.value);
}
</script>

<template>
  <header class="header-container">
    <div class="flex items-center justify-between max-w-screen-xl mx-auto px-8">
      <h1 class="text-2xl font-semibold dark:text-white">My Application Header</h1>
      <button
        class="border border-gray-300 dark:border-gray-700 rounded-full px-4 py-2 cursor-pointer text-base transition bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 dark:bg-gray-900 dark:text-white"
        @click="toggleDark"
      >
        {{ isDark ? '🌙 Dark' : '☀️ Light' }}
      </button>
    </div>
  </header>
</template>


