<template>
 <div>
  <img :src="item.url" class="card-img-top custom-card-img" alt="...">
  <div class="text-start" >
    <h5 class="card-title">{{item.title}}</h5>
    <p class="card-text">{{item.price}} ₺</p>
  </div>
</div>
</template>

<script>
export default {
    props:{
      item:{
        type:Object,
        default:() =>({
          id:0,
          url:"",
          title:"",
          price:""
        })
      }
    },
    data(){

    }
}
</script>

<style>
.custom-card-img{
    border: 1px solid rgba(167, 167, 167, 0.4);
}
.card-title{
    font-size: 14px !important;
    margin-top: 12px;
    font-weight: bold;
    color: rgba(167, 167, 167, 1);
}
.card-text{
    font-weight: bold;
}
</style>