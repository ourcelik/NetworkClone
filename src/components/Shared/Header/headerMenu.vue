<template>
    <div class="container my-1" id="menu">
                    <nav class="d-flex justify-content-around px-5 mx-5">
                        <a
                            v-for="category in categories"
                            :key="category.id"
                            class="black-color fs-6 p-0 pb-1 text-decoration-none menu-link"
                            href="#"
                        >
                            <span class="fs-7">{{ category.name }}</span>
                        </a>
                    </nav>
                </div>
                 
</template>

<script>
export default {
    data() {
        return {
            logo: { id: 0, url: "https://www.network.com.tr/assets/v2/img/Network.jpg", width: "220px" },
            categories: [
                { id: 0, name: "YENI GELENLER" },
                { id: 1, name: "KADIN" },
                { id: 2, name: "ERKEK" },
                { id: 3, name: "SHOES & BAGS" },
                { id: 4, name: "DIVARESE" },
                { id: 5, name: "N-TECH" },
                { id: 6, name: "OUTLET" },
            ]
        };
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
.menu-link{
    transition: 0.1s all ease-in-out;
    border-bottom: 3px solid white;

}
.menu-link:hover{
    border-bottom: 3px solid black;
    color: black;
}
</style>