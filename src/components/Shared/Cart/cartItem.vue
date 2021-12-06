<template>
  <div class="d-flex justify-content-between">
    <div>
      <img class="img-fluid w-60" :src="item.image" alt="" />
    </div>
    <div class="d-flex flex-column align-items-start">
      <span class="font-small fw-bold" id="title">{{
        item.content.description
      }}</span>
      <span class="font-xsmall mt-2">Adet: {{ item.content.count }}</span>
      <span class="font-xsmall mt-2">Adet: {{ item.content.size }}</span>
      <span class="font-xsmall mt-2">Adet: {{ item.content.color }}</span>
    </div>
    <div class="d-flex flex-column justify-content-between mx-3">
      <p class="fw-bold">2.299.00 TL</p>
      <div class="align-self-end pointer" @click="removeItem(item.content.id)">
      <img src="../../../assets/images/trash.png" class="align-self-end" alt="" srcset="">
    
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  emits:["removeItem"],
  data() {
    return {};
  },
  methods: {
      removeItem(id)
      {
        this.$emit("removeItem",id);
      }
  },
};
</script>

<style>
#title {
  display: inline-block;
  width: 220px;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
}
.w-60 {
  width: 60%;
}
</style>