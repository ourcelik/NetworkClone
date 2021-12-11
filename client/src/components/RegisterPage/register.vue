<template>
  <section id="register">
    <form>
      <div class="d-flex flex-column justify-content-center align-items-center">
        <div class="text-start m-auto mt-5 w-75" id="nameArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="name">AD*</label>
          <input class="w-100 py-2 custom-tinput" type="text" name="name" id="name" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="surnameArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">SOYAD*</label>
          <input class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="genderArea">
          <div class role="group" aria-label="Basic radio toggle button group">
            <label class="d-block w-100 my-2 font-small custom-tlabel" for="gender">CİNSİYET*</label>

            <input type="radio" name="btnradio" id="btnradio1" autocomplete="off" />
            <span class="m-2 font-small">Erkek</span>
            <input type="radio" name="btnradio" id="btnradio2" autocomplete="off" />
            <span class="m-2 font-small">Kadın</span>
          </div>
        </div>
        <div class="d-flex flex-column align-items-start mt-4 w-75">
          <span class="font-small custom-tlabel text-uppercase">DOĞUM TARİHİ</span>
          <div class="w-100 d-flex justify-content-start" id="dateArea">
            <select class="custom-sinput">
              <option selected>GÜN</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="custom-sinput mx-2">
              <option selected>AY</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="custom-sinput">
              <option selected>YIL</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="text-start m-auto mt-4 w-75" id="phoneNumberArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">CEP TELEFONU*</label>
          <input class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="mailArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">E-POSTA*</label>
          <input class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">ŞİFRE*</label>
          <input class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordRepeatArea">
          <label class="d-block w-100 my-2 font-small custom-tlabel" for="surname">ŞİFRE TEKRAR*</label>
          <input class="w-100 py-2 custom-tinput" type="text" />
        </div>
        <div class="text-start m-auto mt-4 w-75" id="passwordRepeatArea">
          <span class="font-small custom-tlabel">
            Lütfen üye olmadan önce aydınlatma metnini okuyunuz.
            <a
              class="c-link"
              href="#"
            >Aydınlatma metnine</a> her zaman anasayfadaki
            <a
              class="c-link"
              href
            >“Kişisel Verilerinizin Korunmasına İlişkin Aydınlatma Metni”</a>
            ibaresine tıklayarak da ulaşabilirsiniz.
          </span>
        </div>
        <div class="text-start m-auto mt-4 w-75 d-flex align-items-center" id="passwordRepeatArea">
          <input class="align-self-start" type="checkbox" id="check" />
          <label for="check" class="mx-2 align-self-start remember-pass-label font-small">
            <span>
              Ay Marka’nın (Network,Divarese) kampanyalarından haberdar olmak istiyorum. Ay Marka Mağazıcılık A.Ş.’nin tarafıma ticari elektronik ileti göndermesine
              <a
                href="#"
                class="custom-orange-link"
              >burada</a>
              belirtilen izni veriyorum
            </span>
          </label>
        </div>
        <div class="text-start m-auto mt-4 w-75 d-flex align-items-center" id="passwordRepeatArea">
          <input class="align-self-start" type="checkbox" id="check" />
          <label for="check" class="mx-2 align-self-start remember-pass-label font-small">
            <span>
              <a class="custom-orange-link" href="#">Üyelik sözleşmesini</a>,
              <a class="custom-orange-link" href="#">kişiselleştirilmiş pazarlamaya ilişkin açık rıza metnini</a> ve kişisel verilerimin
              <a class="custom-orange-link" href="#">yurtdışına aktarılmasına ilişkin açık rıza metnini</a> okudum, onaylıyorum.
            </span>
          </label>
        </div>
        <div class="w-75 my-5">
            <button class="custom-button w-100 p-3">ÜYE OL</button>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
export default {

}
</script>

<style>
.custom-sinput {
  background-color: #f8f8f8;
  border: 1px solid #cccccc;
  font-size: small;
  letter-spacing: 1px;
  padding: 10px 16px 10px 10px;
  color: #8a8a8a;
  cursor: pointer;
}
.custom-sinput:focus {
  background-color: white;
}
.custom-sinput:hover {
  background-color: white;
}

.c-link {
  color: black;
}
.c-link:hover {
  color: black;
  text-decoration: none;
}
</style>