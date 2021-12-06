<template>
    <div class="row justify-content-between align-items-center" id="header">
        <!-- searchbar -->
        <form class="col-4 row">
            <div class="form col-10">
                <i class="fa fa-search"></i>
                <input type="text" class="form-control form-input" placeholder="Search anything..." />
            </div>
        </form>
        <!-- logo -->
        <img @click="$router.push('/')" class="mt-2 p-3 col-4 pointer" :src="logo.url" :style="{ width: logo.width }" alt />
        <!-- settings -->
        <div class="col-2 offset-2 d-flex justify-content-end align-items-center">
            <div>
               
                <img src="../../../assets/images/cart.png"
                data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                    class=" mx-2 pointer settings-icon"
                    alt=""/>
                <router-link to="/favourites">
                <img src="../../../assets/images/heart.png" alt=""
                class=" mx-2 pointer settings-icon"
                />
                </router-link>
                    
                
                    
                <router-link to="/register">
                <img src="../../../assets/images/profile.png" alt=""
                class=" mx-2 pointer settings-icon"
                />
                </router-link>
            </div>
        </div>
    </div>

   
</template>

<script>
export default {

    data() {
        return {
            logo: { id: 0, url: 'https://www.network.com.tr/assets/v2/img/Network.jpg', width: '220px' },
        }
    },
    methods:{
        log(){
            console.log("sa");
        }
    }
}
</script>

<style>
.settings-icon{
    color:#2c3e50;
}
.router-link-active{
    color:#2c3e50;
}
</style>