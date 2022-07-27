import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'


createApp(App).mount('#app')
import "bootstrap/dist/js/bootstrap.js"

module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
    ? '/vue3-bootstrap5-test/'
    : '/'
}