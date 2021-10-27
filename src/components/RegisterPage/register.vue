<template>
  <section id="register">
    <form>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="text-start m-auto mt-5 w-75" id="nameArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="name">AD*</label>
          <input class="w-100 py-2 custom-tinput" type="text" name="name" id="name">
        </div>
        <div class="text-start m-auto mt-4 w-75" id="surnameArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">SOYAD*</label>
          <input class="w-100 py-2 custom-tinput" type="text">
        </div>
        <div class="text-start m-auto mt-4 w-75" id="genderArea">
          <div class="" role="group" aria-label="Basic radio toggle button group">
            <label class="d-block w-100 my-2 font-small custom-tlabel" for="gender">CİNSİYET*</label>

            <input type="radio"  name="btnradio" id="btnradio1" autocomplete="off">
            <span class="m-2 font-small">Erkek</span>
            <input type="radio"  name="btnradio" id="btnradio2" autocomplete="off">
            <span class="m-2 font-small">Kadın</span>
          </div>
        </div>
        <div class="d-flex text-start m-auto mt-4 w-25" id="dateArea">
          <select class="form-select col-4" >
            <option selected>Gün</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
           <select class="form-select col-4" >
            <option selected>Gün</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
           <select class="form-select col-4">
            <option selected>Gün</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>