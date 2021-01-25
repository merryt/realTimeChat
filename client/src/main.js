import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import socketIO from 'vue-socket.io'
import { store } from './store'

Vue.use(Vuetify)
Vue.use(socketIO, 'http://localhost:5000');
Vue.use(require('vue-moment'));

new Vue({
    el: '#app',
    store,
    render: h => h(App)
})
