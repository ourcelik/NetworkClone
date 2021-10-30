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
        <img class="mt-2 p-3 col-4" :src="logo.url" :style="{ width: logo.width }" alt />
        <!-- settings -->
        <div class="col-2 offset-2 d-flex justify-content-end align-items-center">
            <div>
                <i
                    data-bs-toggle="modal"
                    data-bs-target="#cartModal"
                    class="fa fa-shopping-bag fa-lg mx-2 pointer"
                ></i>
                <i class="fas fa-heart fa-lg mx-2 pointer"></i>
                <i class="fas fa-user fa-lg mx-2 pointer"></i>
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
}
</script>