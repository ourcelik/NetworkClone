<template>
    <div class="mt-header custom-container row">
        <div class="custom-sticky d-flex justify-content-between bg-white">
            <app-breadcrumb class="my-3" />
            <div class="d-flex justify-content-start align-items-center">
                <p class="font-little-small py-0 my-0 mx-5">
                    13/
                    <span class="fw-bold">13 Ürün</span>
                </p>
                <img
                    v-if="itemCountPerRow.three"
                    @click="threeItem()"
                    class="align-self-center pointer"
                    src="../assets/images/threeitemactive.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="!itemCountPerRow.three"
                    @click="threeItem()"
                    class="align-self-center pointer"
                    src="../assets/images/threeitem.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="!itemCountPerRow.four"
                    @click="fourItem()"
                    class="align-self-center pointer"
                    src="../assets/images/fouritem.png"
                    width="30"
                    height="30"
                    alt
                />
                <img
                    v-if="itemCountPerRow.four"
                    @click="fourItem()"
                    class="align-self-center pointer"
                    src="../assets/images/fouritemactive.png"
                    width="30"
                    height="30"
                    alt
                />
                <!-- editor prefers -->
                <div class="dropdown mx-2">
                    <button
                        class="btn btn-secondary dropdown-toggle menu-custom font-little-small"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >Editör Sıralaması</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something</a>
                        </li>
                    </ul>
                </div>
                <!-- editor prefers end -->
                <!-- editor prefers -->
                <div class="dropdown mx-2">
                    <button
                        class="btn btn-secondary dropdown-toggle menu-custom font-little-small"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                    >Filtreler</button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something</a>
                        </li>
                    </ul>
                </div>
                <!-- editor prefers end -->
            </div>
        </div>
        <item
            :class="{ 'col-4': itemCountPerRow.three, 'col-3': itemCountPerRow.four }"
            v-for="item in items"
            :key="item.id"
            :item="item"
        />
    </div>
</template>


<script>
import Item from "../components/Shared/appItems/item.vue";
import AppBreadcrumb from "../components/Shared/appBreadcrumb.vue";
export default {
    created() {
        this.$store.dispatch("fetchItemsForHome");
    },
    data() {
        return {
            itemCountPerRow: {
                three: true,
                four: false
            },
        }
    },
    methods: {
        threeItem() {
            this.itemCountPerRow.three = true;
            this.itemCountPerRow.four = false;
        },
        fourItem() {
            this.itemCountPerRow.three = false;
            this.itemCountPerRow.four = true;
        }
    },
    computed: {
        items() {
            return this.$store.state.homeItems;
        }
    },
    components: { Item, AppBreadcrumb }
}

</script>

<style>
.menu-custom {
    background-color: white !important;
    border-radius: 0px !important;
    color: black !important;
    padding-left: 10px !important;
    padding-right: 15px !important;
    border: 1px solid #e6e6e6 !important;
    text-align: center !important;
    vertical-align: text-top !important;
    padding-top: 5px !important;
    padding-bottom: 1px !important;
    outline: none !important;
    box-shadow: none !important;
    transition: all 0.3s ease-in-out;
}
.menu-custom:hover {
    border-color: black !important;
}
.menu-custom::focus {
    outline: none !important;
    box-shadow: none !important;
}
.menu-custom::after {
    content: none !important;
}
.menu-custom::before {
    content: url(../assets/images/az.png) !important;
    vertical-align: -25%;
    padding: 7px !important;
}
.custom-sticky {
    position: -webkit-sticky;
    position: sticky;
    top: 132.5px;
}
.mt-header {
    margin-top: 140px;
}
</style>