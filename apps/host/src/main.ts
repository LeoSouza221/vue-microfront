import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.component('HeaderApp', defineAsyncComponent(() =>
  import('base/HeaderApp')
))

app.mount('#app')
