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
                <div class="modal-header no-border h-10 mx-4 ">
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
                    
                    <div class="custom-container d-flex flex-column justify-content-between align-items-center">
                    <div class="my-3">
                        <i class="fa fa-shopping-bag fa-3x"></i>

                    </div>
                    <div class="mb-4 ">
                        <span class="c-black favorites__loginText">Sepetiniz Henüz Boş</span>
                    </div>
                    <div class="mb-3 mt-3">
                        <button style="width: 275px" type="button" class="black-button">Favorilerize göz atın</button>
                    </div>
                    <div>
                        <button  type="button" class="white-button">Alışverişe devam edin</button>
                    </div>
                    </div>
                    
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {


}
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
.black-button{
    background-color: black;
    color:white;
    width: 275px;
    height: 45px;
    border-radius: 0px;
    border: 0;
}
.white-button{
    background-color: white;
    color:black;
    width: 275px;
    border: 1px solid black;
    height: 45px;
    border-radius: 0px;
}
</style>