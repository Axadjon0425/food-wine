import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import home from '../components/home.vue';
import menu from "../components/menu.vue";
import special from '../components/special.vue';
import about from '../components/about.vue';
import contact from '../components/contact';
const routes = [{
        path: "/",
        name: "Home",
        component: home
    },
    {
        path: "/menu",
        name: "Menu",
        component: menu
    },
    {
        path: '/special',
        name: 'Special',
        component: special
    },
    {
        path: '/about',
        name: 'About',
        component: about
    },
    {
        path: '/contact',
        name: 'Contact',
        component: contact
    },
]
const router = new VueRouter({ routes })

export default router