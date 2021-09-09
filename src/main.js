import Vue from 'vue'
import App from './App.vue'
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/style/style.css'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


library.add(fas)


Vue.component('fonts', FontAwesomeIcon)
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App),
}).$mount('#app')