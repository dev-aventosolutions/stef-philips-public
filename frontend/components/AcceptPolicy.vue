<template>
  <div class="policy-popup" :class="{ active: state.showPolicy }">
    <button class="absolute right-[10px] top-[10px] p-3" @click="closePopup"><i class="pi pi-times"></i></button>
    <div class="container">
      <div class="flex items-center gap-[30px]">
        <div class="w-8/12">
          <p class="font-regular-custom text-[16px]">
          <h2><b>We value your privacy</b></h2><br>We use cookies to enhance your browsing experience, serve personalized
          ads or content, and analyze our traffic. By clicking "Accept all", you consent to our use of cookies. <a
            href="https://regroup-dev.com/privacy-policy">Privacy and Cookies Policy</a>.
          </p>
        </div>
        <div class="w-4/12">
          <div class="grid md:grid-cols-2 gap-[15px]">
            <button
              class="mob-full min-h-[50px] py-4 px-3 font-[400] text-[16px] transition text-center inline-block font-black-custom bg-[#20407C] hover:bg-[#173060] focus:bg-[#132850] text-white"
              @click="acceptReject">Accept all</button>
            <button
              class="mob-full min-h-[50px] py-4 px-3 font-[400] text-[16px] transition text-center inline-block font-black-custom bg-[#2A8CFB] hover:bg-[#1F73D3] focus:bg-[#175EB1] text-white"
              @click="acceptReject">Reject all</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.policy-popup {
  position: fixed;
  left: 0;
  right: 0;
  bottom: -999px;
  background: rgba(255, 255, 255, 0.9);
  padding: 50px 0;
  box-shadow: 4px 6px 8px 5px rgba(0, 0, 0, 0.5);
  transition: 0.75s all;
  z-index: 99;
}

.policy-popup.active {
  bottom: 0;
}
</style>
<script setup>
import Button from "./Button.vue";
import { onMounted, ref } from "vue";

const state = ref({
  showPolicy: false,
})

onMounted(() => {
  const cookieAccepted = localStorage.getItem("cookieAccepted");
  if (cookieAccepted == "true") {
    state.value.showPolicy = false;
  } else {
    setTimeout(() => {
      state.value.showPolicy = true;
    }, 3000);
  }
})

const closePopup = () => {
  // Set the "cookieAccepted" variable in localStorage
  localStorage.setItem("cookieAccepted", "false");
  state.value.showPolicy = !state.value.showPolicy
}

const acceptReject = () => {
  // Set the "cookieAccepted" variable in localStorage
  localStorage.setItem("cookieAccepted", "true");
  state.value.showPolicy = !state.value.showPolicy
}


</script>