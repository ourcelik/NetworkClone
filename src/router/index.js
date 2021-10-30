import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        name:"HomePage",
        path:"/",
        component:() =>import("@/pages/Home")
    },
    {
        name:"FavouritesPage",
        path:"/favourites",
        component:() =>import("@/pages/Favourites")
    },
    {
        name:"RegisterPage",
        path:"/register",
        component:() => import("@/pages/Register")
    }
];

const router = createRouter({
    routes,
    history: createWebHistory()
});

export default router;