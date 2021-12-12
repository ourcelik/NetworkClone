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
    },
    {
        name:"ItemDetailPage",
        path:"/itemdetail/:id",
        component:()=> import("@/pages/ItemDetail")
    },
    {
        name:"CartPage",
        path:"/cart",
        component:()=> import("@/pages/Cart")
    },
    {
        name:"CategoryItemsPage",
        path:"/category/:id",
        component:()=> import("@/pages/CategoryItems")
    },
];

const router = createRouter({
    routes,
   
    history: createWebHistory()
});
router.afterEach(() =>{
    window.scrollTo({behavior:"smooth",top:0});
})
export default router;