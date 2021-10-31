<template>
    <div class="d-flex flex-column justify-content-start align-items-start mt-3">
        <h5 class="font-small">{{ itemDetails.type }}</h5>
        <h4 class="fw-bold">{{ itemDetails.name }}</h4>
        <p class="fw-bold">{{ itemDetails.price }} TL</p>
        <div class="d-flex justify-content-start h-50 align-items-center">
            <span
                @mouseover="changeCurrentOver(item.name)"
                class="w-100 item-color mx-1 pointer"
                v-for="(item, index) in itemDetails.colorOptions"
                :style="{ backgroundColor: item.color }"
                :key="index"
            ></span>
            <span class="mx-2 font-small">{{ currentColor }}</span>
        </div>
        <div id="body_size" class="w-100 mt-5">
            <div class="d-flex justify-content-between align-item-center">
                <p class="font-small fw-bold">Beden Seçimi:</p>
                <p class="font-xsmall fw-bold pointer">Beden Tablosu</p>
            </div>
            <hr class="mt-0" />
            <div id="size_list" class="d-flex justify-content-between mx-3">
                <span
                    class="fw-bold font-small"
                    v-for="(item, index) in itemDetails.sizes"
                    :key="index"
                >{{ item }}</span>
            </div>
            <hr />
        </div>
        <div id="cart-add" class="align-self-stretch row align-items-center mt-4">
            <button class="custom-button-cart mx-2 col-9">SEPETE EKLE</button>
            <div class="col-1 mx-2 ">
                <i class="fas fa-heart fa-2x pointer"></i>
            </div>
        </div>
        <div class="w-100 mt-5">
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div>
                    <h3 id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button bg-transparent fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne"
                        >Ürün Detayı</button>
                    </h3>
                    <div
                        id="panelsStayOpen-collapseOne"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body text-start">
                            <p class="font-small fw-bold">Ref. No: {{ itemDetails.details.refNo }}</p>
                            <ul>
                                <li
                                    class="mb-3 c-gray"
                                    v-for="(item, index) in itemDetails.details.content"
                                    :key="index"
                                >{{ item }}</li>
                            </ul>
                            <p class="c-gray">
                                Manken Bilgileri :
                                 Boy: {{itemDetails.details.model.boy}} / Göğüs: {{itemDetails.details.model.gogus}} / Bel: {{itemDetails.details.model.bel}} / Kalça: {{itemDetails.details.model.kalca}} / Ayak Numarası: {{itemDetails.details.model.ayak_Numarası}}
                                  
                                 
                            </p>
                            <p class="c-gray">
                                Numune Bedeni:{{itemDetails.details.sample_size}}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-0" />
            <div class="accordion" id="accordionPanelsStayOpenExample">
                <div>
                    <h3 id="panelsStayOpen-headingOne">
                        <button
                            class="accordion-button bg-transparent fw-bold"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#panelsStayOpen-collapseOne2"
                            aria-expanded="false"
                            aria-controls="panelsStayOpen-collapseOne"
                        >İade ve Teslimat</button>
                    </h3>
                    <div
                        id="panelsStayOpen-collapseOne2"
                        class="accordion-collapse collapse"
                        aria-labelledby="panelsStayOpen-headingOne"
                    >
                        <div class="accordion-body text-start">
                            <p
                                class="font-small c-gray"
                            >Ürünleriniz stok durumuna göre siparişiniz onaylandığında tedarik edilmekte ve sonrasında kargoya verilmektedir. Siparişinizin onaylanabilmesi için satın almış olduğunuz ürünlerin ücretinin kredi karti ile ödenmesi gerekmektedir. Onaylanan siparişler 2-7 iş günü içerisinde kargoya teslim edilecektir.</p>
                        </div>
                    </div>
                </div>
            </div>
            <hr class="mt-0">
        </div>
        <div id="socialMedia" class="w-100 row mt-5">
            <div class="col-4 fw-bold">
                <p>Ürünü Paylaş:</p>
            </div>
            <div class="col-8 d-flex justify-content-start">
               <i class="fas fa-link mx-2 pointer"></i>
                <i class="fab fa-whatsapp mx-2 pointer"></i>
                <i class="fas fa-envelope mx-2 pointer"></i>
                <i class="fab fa-facebook-f mx-2 pointer"></i>
                <i class="fab fa-twitter mx-2 pointer" ></i>
                <i class="fab fa-pinterest mx-2 pointer"></i>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props: [
        "itemDetails"
    ],
    data() {
        return {
            currentColor: "Haki"
        }
    },
    methods: {
        changeCurrentOver(name) {
            this.currentColor = name;
        }
    },
}


</script>

<style>
.item-color {
    border-radius: 50%;
    border: 1px solid black;
    padding: 13px;
}
.custom-button-cart {
    color: white;
    background-color: #1c1c1c;
    border: 0px;
    letter-spacing: 2px;
    font-weight: bold;
    transition: 0.3s all ease;
    padding-top: 15px;
    padding-bottom: 15px;
}
.custom-button-cart:hover {
    background-color: #555555;
}
.accordion-button {
    color: black !important;
    border-top: 1px solid rgb(223, 223, 223) !important;
    outline: none !important;
    box-shadow: none !important;
    border: none;
}
.accordion-button:focus {
    outline: none !important;
    box-shadow: none;
}
.accordion-button:active {
    outline: none !important;
    box-shadow: none;
}
.accordion-button:not(.collapsed)::after {
    background-image: none;
    content: "+";
    transform: none;
}
.accordion-button::after {
    background-image: none;
    content: "-";
    font-size: 25px;
    object-fit: cover;
    transform: none;
    color: rgb(158, 158, 158);
}

.c-gray {
    color: gray;
}
</style>