import { createApp } from 'vue'
import App from './App.vue'
import routers from "./routes"
import { store } from "./store"
import fetch from 'node-fetch'
import "./assets/scss/main.scss"
const app = createApp(App);
app.use(routers)
app.use(fetch)
app.use(store)

app.mount('#app')
