<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// import LoadingComponent from './components/LoadingComponent.vue'
// import ErrorComponent from './components/ErrorComponent.vue'
import { loadRemoteComponent } from '@micro/shared'

// const HeaderApp = defineAsyncComponent(loadRemoteComponent('base/HeaderApp'))
// const HeaderApp = defineAsyncComponent({
//   // the loader function
//   loader: () => import('base/HeaderApp'),

//   // A component to use while the async component is loading
//   loadingComponent: LoadingComponent,
//   // Delay before showing the loading component. Default: 200ms.
//   delay: 200,

//   // A component to use if the load fails
//   errorComponent: ErrorComponent,
//   // The error component will be displayed if a timeout is
//   // provided and exceeded. Default: Infinity.
//   timeout: 3000
// })

// async function loadRemoteComponentByUrl(remoteEntryUrl: string, exposedName: string) {
//   // Ex: remoteEntryUrl = 'http://localhost:5173/remoteEntry.js'
//   // exposedName = './HeaderApp'
//   const remoteModule = await import(/* @vite-ignore */ remoteEntryUrl)
//   // inicializa container se existir
//   if (remoteModule.init) {
//     try {
//       await remoteModule.init({})
//     } catch (e) {
//       // init pode falhar se já inicializado ou se não usa share scope
//       console.warn('remote init:', e)
//     }
//   }
//   const factory = await remoteModule.get(exposedName)
//   const Module = factory()
//   return Module.default || Module
// }

const HeaderApp = defineAsyncComponent(() =>
  loadRemoteComponent('http://localhost:5173/remoteEntry.js', './HeaderApp')
)
</script>

<template>
  <div id="app">
    <!-- <component v-if="HeaderApp" :is="HeaderApp" /> -->
    <HeaderApp />
    <Suspense>
      <!-- component with nested async dependencies -->
      <component v-if="HeaderApp" :is="HeaderApp" />

      <!-- loading state via #fallback slot -->
      <template #fallback>
        Loading...
      </template>
    </Suspense>
    <h1>You did it!</h1>
    <p>
      Visit <a href="https://vuejs.org/" target="_blank" rel="noopener">vuejs.org</a> to read the
      documentation
    </p>
  </div>
</template>

<style scoped></style>
