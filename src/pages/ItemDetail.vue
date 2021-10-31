<template>
    <section class="header-margin custom-container">
        <app-breadcrumb />
        <div class="row">
            <div class="col-8  text-center">
                <item-detail-photo-list :photoList="item.photos" />
            </div>
            <div class="col-4 text-center">
                <item-detail-content :itemDetails="item.content" />
            </div>
        </div>
    </section>
</template>

<script>
import AppBreadcrumb from "../components/Shared/appBreadcrumb.vue";
import ItemDetailPhotoList from "../components/ItemDetailPage/ItemDetailPhotoList.vue";
import ItemDetailContent from "../components/ItemDetailPage/ItemDetailContent.vue";
export default {
    components: { AppBreadcrumb, ItemDetailPhotoList, ItemDetailContent },

    data() {
        return {
            item: {
                content: {
                    id: 1,
                    type:"NETWORK Smart Casual",
                    name: "Slim Fit Haki Jean Pantolon",
                    price: 799.00,
                    colorOptions: [
                        { name: 'Haki', color: "#625e45" },
                        { name: 'Camel', color: "#c5a076" },
                        { name: 'Siyah', color: "#6b360c" },
                        { name: 'Antrasit', color: "#000000" },
                        { name: 'Ekru', color: "#535051" },
                        { name: 'Kahverengi', color: "#f7f7f4" },
                    ],
                    sizes: ["25", "26", "27", "28", "29", "30", "31", "32"],
                    details: {
                        refNo: "1075927-224",
                        content: ["Slim fit'in zamansız formunu günlük stil ile bütünleştiren pantolon, konforlu stillerin aranılan parçası.",
                            "%98 Pamuk,%2 Elastan",
                            "Normal (Regular) Bel",
                            "Dar (Slim) Paça",
                            "Jean Pantolon",
                            "Fermuar Kapatmalı",
                            "5 Adet Cepli",
                        ],
                        model: {
                            boy: "177 cm",
                            gogus: "83 cm",
                            bel: "59 cm",
                            kalça: "89 cm",
                            ayak_Numarası: "40"
                        },
                        sample_size: "27"
                    },

                },
                photos: ["https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_1.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_2.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_3.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_4.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_5.jpg",
                    "https://img-network.mncdn.com/mnresize/491/754/productimages/2400405890677_6.jpg"
                ],
            }
        }
    },
}
</script>

<style>
.header-margin {
    margin-top: 180px;
}
</style>