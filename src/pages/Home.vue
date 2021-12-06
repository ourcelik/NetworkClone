<template>
    <advert-carousel/>
    <item-carousel  :title="'Sizin İçin Seçtiklerimiz'"/>
    <multi-grid-advert/>
    <social-network/>
</template>


<script>
import AdvertCarousel from "../components/HomePage/advertCarousel.vue";
import MultiGridAdvert from "../components/HomePage/multiGridAdvert.vue";
import SocialNetwork from "../components/HomePage/socialNetwork.vue";
import ItemCarousel from "../components/HomePage/itemCarousel.vue";

export default {
    components: { AdvertCarousel, ItemCarousel, MultiGridAdvert, SocialNetwork }
}

</script>
