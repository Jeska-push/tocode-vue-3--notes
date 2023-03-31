import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routes"
import { store } from "./store"

import fetch from 'node-fetch'
import "./assets/scss/main.scss"
<script src="/tocode-vue-3--notes/tocode-vue-3--notes/src/utils/local.js"></script>
//import { updateLocalStorage } from "./src/utils/local.js"
const app = createApp(App);
app.use(routers)
app.use(fetch)
app.use(store)

app.mount('#app')
