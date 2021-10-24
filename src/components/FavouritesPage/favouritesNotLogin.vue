<template>
  <div class="custom-container d-flex flex-column justify-content-between align-items-center">
      <div class="my-3">
        <i class="far fa-folder fa-3x "></i>
      </div>
      <div class="mb-4">
          <span class="c-black favorites__loginText">Favori Listelerinizi görebilmek için</span>
          <a class ="c-black favorites__loginText" href="#"> giriş yapınız.</a>
      </div>
      <div class="mb-3">
          <button style="width: 275px" type="button" class="black-button">Giriş Yap</button>
      </div>
      <div>
          <button  type="button" class="white-button">Üye Ol</button>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
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
}
.white-button{
    background-color: white;
    color:black;
    width: 275px;
    border: 2px solid black;
    height: 45px;
    border-radius: 0px;
}

</style>