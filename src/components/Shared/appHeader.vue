<template>
    <header class="fixed-top bg-white">
        <div class="m-0 p-0">
            <div class="custom-container">
                <div class="row justify-content-between align-items-center" id="header">
                    <!-- searchbar -->
                    <form class="col-4 row">
                        <div class="form col-10 ">
                            <i class="fa fa-search"></i>
                            <input
                                type="text"
                                class="form-control form-input"
                                placeholder="Search anything..."
                            />
                        </div>
                    </form>
                    <!-- logo -->
                    <img class="mt-2 p-3 col-4" :src="logo.url" :style="{ width: logo.width }" alt />
                    <!-- settings -->
                    <div class="col-2  offset-2 d-flex justify-content-end align-items-center">
                        <div>
                        <i data-bs-toggle="modal"  data-bs-target="#cartModal" class="fa fa-shopping-bag fa-lg mx-2 pointer"></i>
                        <i class="fas fa-heart fa-lg mx-2 pointer"></i>
                        <i class="fas fa-user fa-lg mx-2 pointer"></i>
                        </div>
                        
                    </div>
                </div>
                <hr class="m-2 my-2 mx-0"/>
                <div class="container my-1" id="menu">
                    <nav class="d-flex justify-content-around px-5 mx-5">
                        <a
                            v-for="category in categories"
                            :key="category.id"
                            class="black-color fs-6 p-0 pb-2 text-decoration-none"
                            href="#"
                        >
                            <span class="fs-7">{{ category.name }}</span>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            logo: { id: 0, url: 'https://www.network.com.tr/assets/v2/img/Network.jpg', width: '220px' },
            categories: [
                { id: 0, name: "YENI GELENLER" },
                { id: 1, name: "KADIN" },
                { id: 2, name: "ERKEK" },
                { id: 3, name: "SHOES & BAGS" },
                { id: 4, name: "DIVARESE" },
                { id: 5, name: "N-TECH" },
                { id: 6, name: "OUTLET" },


            ]
        }
    },
}
</script>

<style>
.black-color {
    color: black;
}
.bg-white{
    background-color:white ;
}

.fs-7 {
    font-size: small;
    letter-spacing: 1px;
}


/* search */




.form {
    position: relative
}

.form .fa-search {
    position: absolute;
    top: 40%;
    left: 20px;
    color: #9ca3af
}

.form-input {
    height: 125%;
    text-indent: 33px;
    border-radius: 0px !important;
}

.form-input:focus {
    box-shadow: none !important;
    border: black 1px solid !important;
    outline: none !important;
}
</style>