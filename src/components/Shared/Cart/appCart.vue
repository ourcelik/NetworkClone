<template>
  <!-- Modal -->
  <div
    class="modal animate__animated animate__fadeIn"
    id="cartModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog m-0 modal-dialog-custom">
      <div id="modal-custom" class="modal-content mt-0 modal-custom rounded-0">
        <div class="modal-header no-border h-10 mx-4">
          <div class="d-flex align-items-center w-100 h-100">
            <i class="fa fa-shopping-bag fa-lg mr-5 fa-lg"></i>
            <h5 class="ls-1 mt-2">Sepetim</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
        </div>
        <div class="modal-body r-0">
          <div
            v-if="items.length > 0"
            class="d-flex flex-column h-100 justify-content-between"
          >
            <div>
              <cart-item
                v-for="(item, index) in items"
                @remove-item="removeItem($event)"
                :key="index"
                :item="item"
                class="mt-2"
              />
            </div>
            <cart-button :totalPrice="totalPrice"/>
          </div>
          <blank-cart v-else />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BlankCart from "./blankCart.vue";
import CartItem from "./cartItem.vue";
import CartButton from "./cartButton.vue";

export default {
  components: {
    BlankCart,
    CartItem,
    CartButton
  },
  data() {
    return {
      items: [
        {
          content: {
            id: 1,
            description: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            count: 1,
            size: "M",
            color: "Vizon",
            price: 2299.0,
          },
          image:
            "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
        },
        {
          content: {
            id: 2,
            description: "Vizon Kapüşonlu Büzgü Detaylı Pardösü",
            count: 1,
            size: "M",
            color: "Vizon",
            price: 2399.0,
          },
          image:
            "https://img-network.mncdn.com/productimages/2400406202424_1_100_154.jpg",
        },
      ],
    };
  },
  methods:{
      removeItem(id)
      {
          this.items = this.items.filter(i=>i.content.id != id);
      }
  },
  computed:{
      totalPrice(){
          let totalPrice = 0;
          this.items.forEach(item =>{
              totalPrice += item.content.price;
          });
          return totalPrice;
      }
  }
};
</script>

<style>
.modal-custom {
  height: 100vh !important;
  width: 27vw !important;
}
.h-10 {
  height: 10% !important;
}
.modal-dialog-custom {
  position: fixed !important;
  right: 0 !important;
}
.animate__animated.animate__fadeIn {
  --animate-duration: 0.5s;
}
.mr-5 {
  margin-right: 30px !important;
}
.ls-2 {
  letter-spacing: 1px;
}
.no-border {
  border: 0 !important;
}

/* login lazım */
.favorites__loginText {
  font-family: TTNormsPro-Medium;
  font-size: 18px;
  margin-top: 50px;
}
.c-black {
  color: black;
}
.black-button {
  background-color: black;
  color: white;
  width: 275px;
  height: 45px;
  border-radius: 0px;
  border: 0;
}
.white-button {
  background-color: white;
  color: black;
  width: 275px;
  border: 1px solid black;
  height: 45px;
  border-radius: 0px;
}

.custom-button-cart {
  color: white;
  background-color: black;
  border: 0px;
  letter-spacing: 2px;
  font-weight: bold;
  transition: 0.3s all ease;
  padding-top: 15px;
  padding-bottom: 15px;
}
</style>