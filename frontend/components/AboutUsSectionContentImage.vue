<template>
  <div class="grid md:grid-cols-2 grid-cols-1 items-center gap-[24px]">
    <div class="img-section" :class="{'md:order-last' : props.direction == 'image-last'}">
        <img :src="props?.Card?.image?.data?.attributes?.url" alt=""/>
    </div>  
    <div class="content-section md:px-[40px]">
      <h2 v-html="(props.Card?.title) ? props.Card.title : ''" class=" font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]"></h2>

      <!-- <h2 v-html="props?.Card?.title " class=" font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]"></h2> -->
      <p v-html="props?.Card?.description " class="text-[18px] font-regular-custom mt-4 "> </p>
      <div class="grid grid-cols-1 gap-y-[15px] mt-[20px]">
        <div v-if="props?.Card?.button ? true:false" >
          <Button :value="props?.Card.button?.btnTitle" :class="`bg-[${props?.Card.button?.btnColor}]`" addClass="hover:bg-[#1F73D3]  focus:bg-[#175EB1] text-white px-8" 
          :link="props?.Card.button?.btnUrl"></Button>
        </div>
      </div>
    </div>  
  </div>
</template>

<script setup>
const props = defineProps(["Card","direction"])
 import Button from "../components/Button.vue";

</script>