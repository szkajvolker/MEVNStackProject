import { createRouter,createWebHistory } from "vue-router";
import Home from "../views/Home.vue"
import CreateProduct from "../views/CreatePage.vue";

const routes = [
    {path: "/" , component:Home},
    {path: "/create", component:CreateProduct},
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;