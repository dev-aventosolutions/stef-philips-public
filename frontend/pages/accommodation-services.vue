<template>
  <div>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="container mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="housing-partners">Housing partners</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/accommodation-services">Accommodation Types</router-link>
        </div>
      </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full md:mb-[100px] mb-[50px]">
      <PageBanner :Banner="store.hp_accommodation_types" v-if="Object.keys(store.hp_accommodation_types).length" />
    </div>
    <div v-if="Object.keys(store.hp_accommodation_types).length">

      <div v-for="(card, index) in store.hp_accommodation_types.hp_accommodation_type_cards.data" :key="card"
        class="container py-[30px]">
        <SectionContentImage v-if="index % 2 == 0" direction="image-last" :Card="card" />
        <SectionContentImage v-else :Card="card" />
      </div>


      <div class="container py-[100px] bg-[#FFFBE5] my-[80px] mb-[100px]">
        <div class="md:w-4/6 w-10/12 mx-auto">
          <img class="block mx-auto" src="../assets/IconYell.png" alt />
          <div class="text-center">
            <h2 class="block py-[12px] m-0 font-weight-medium md:text-[36px] text-[24px] text-[#20407C]">
              <span class="font-black-custom">Where we operate</span>
            </h2>
            <p class="font-regular-custom text-[18px]">
              Stef & Philips provides temporary, emergency and PRS accommodation to
              housing partners across the UK.
            </p>
            <Button value="Find out more" link="/where-we-operate"
              addClass="bg-[#20407C] hover:bg-[#173060] focus:bg-[#132850]  w-[154px] mt-[30px] text-white font-xbold-custom"></Button>
          </div>
        </div>
      </div>

      <PartnerUs v-for="Card in store.hp_accommodation_types.hp_accommodation_type_lastblues.data" :key="Card"
        :Card="Card" />
    </div>
  </div>
</template>
  
<script setup>
import { useAppStore } from "@/store/index"


const store = useAppStore();

await useAsyncData('AccommodationServicesContent', async () => {
  return await store.hpAccommodationTypes()
})
useHead({
  title: store.hp_accommodation_types?.seo?.pageTitle ?? "Stef & Philips",
  meta: [
    { name: 'description', content: store.hp_accommodation_types?.seo?.metaDescription },
    { name: 'title', content: store.hp_accommodation_types?.seo?.metaTitle },
    { name: 'image', content: store.hp_accommodation_types?.seo?.metaImage?.data?.attributes?.url }
  ],
})
</script>
  
<style  scoped>
.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5)
}

.bgImg {
  background-image: url("../assets/acc-types-slider.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* width: 1920px; */
  /* height: 600px; */
}

.contentImg {
  background-image: url("../assets/outline-house@4.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  opacity: 100%;
}

.groupImg {
  background-image: url("../assets/Group 96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* Path 543 */

  position: absolute;
  width: 409px;
  height: 425px;

  /* background: #2a8cff */
}

.happyG {
  background-image: url("../assets/prs-element.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG2 {
  background-image: url("../assets/aim-move-people.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyS {
  background-image: url("../assets/Svg/MidBackground.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.content {
  margin-top: 35%;
  margin-left: 10%;
  opacity: 100%;
}

.content2 {
  /* margin-top: 35%; */
  margin-left: 10%;
}

.bg-third {
  background: #20407c
}

.px-8 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.bgpartner {
  background-image: url("../assets/Graphic.png");
  right: 18%;
  background-repeat: no-repeat;
  background-position: left;
  position: relative;
  width: 100%;
  height: 434.7px;
  opacity: 90%;
  top: -44.1%;
}
</style>