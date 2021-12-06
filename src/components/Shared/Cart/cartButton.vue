<template>
    <div class="row">
              <div class="d-flex justify-content-between col-12">
                <p class="mx-3 fs-6">
                  TOPLAM <span class="font-xsmall">(KDV Dahil)</span>
                </p>
                <p class="fw-bold mx-3 fs-5">{{totalPrice}} TL</p>
              </div>
              <div>
                <button class="custom-button-cart mx-2 col-11">
                  SEPETE GİT
                </button>
              </div>
            </div>
</template>

<script>
export default {
    props:["totalPrice"]
}
</script>