<template>
    <advert-carousel/>
    <item-carousel/>
    <multi-grid-advert/>
    <social-network/>
</template>


<script>
import AdvertCarousel from "../components/HomePage/advertCarousel.vue";
import ItemCarousel from "../components/Shared/appItems/itemCarousel.vue";
import MultiGridAdvert from "../components/HomePage/multiGridAdvert.vue";
import SocialNetwork from "../components/HomePage/socialNetwork.vue";
export default {
    components: { AdvertCarousel, ItemCarousel, MultiGridAdvert, SocialNetwork }
}

</script>
