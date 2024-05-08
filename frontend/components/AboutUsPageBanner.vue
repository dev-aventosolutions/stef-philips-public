<template>
  <div v-if="Banner" class="hero-banner">
    <div class="bannerBg">
      <img :src="Banner?.image?.data?.attributes?.url" alt="banner" />
    </div>
    <div class="container md:h-[600px] mx-auto flex items-center banner-content">
      <div class="grid md:grid-cols-2"> 
        <div class="contentImg">
          <!-- {{ props.message }} -->
          <div class="groupImg md:px-[40px]">
            <h1 class="font-light-custom md:text-[40px] text-[28px] leading-none text-white content" v-html="Banner.title"></h1>
            <p v-html="Banner.description" class="text-white mt-4 font-regular-custom text-[18px] content2"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['Banner'])
</script>

