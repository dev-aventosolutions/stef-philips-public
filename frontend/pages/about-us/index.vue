<template>
  <div>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
      <nav class="container h-full mx-auto flex items-center justify-start gap-3 inner">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="about-us">About us</router-link>
        </div>
      </nav>
    </div>

    <div class="w-full md:min-h-[600px]">
      <PageBanner v-if="Object.keys(store.about_us)?.length" :Banner="store.about_us?.header" />
    </div>

    <div v-if="Object.keys(store.about_us).length">
      <!-- Step 2 -->
      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pt-20 pb-[40px]">
            <SectionContentImage direction="image-last" :Card="store.about_us?.featured[0]" />
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pb-20 pt-[40px]">
            <SectionContentImage :Card="store.about_us?.featured[1]" />
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pt-20 pb-[40px]">
            <SectionContentImage direction="image-last" :Card="store.about_us?.featured[2]" />
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pb-20 pt-[40px]">
            <SectionContentImage :Card="store.about_us?.featured[3]" />
          </div>
        </div>
      </div>


      <div class="container">
        <div class="w-full flex justify-center">
          <!-- <video v-if="store.about_us.video.data" width="320" height="240" controls>
          <source :src="store.about_us.video.data.attributes?.url" type="video/mp4">
          <source :src="store.about_us.video.data.attributes.url" type="video/ogg">
        Your browser does not support the video tag.
        </video> -->
          <!-- {{ store.about_us.videoUrl }}
        <img src="@/assets/Svg/BlueVedio.svg" alt="video" /> -->

          <div class="video-player" v-if="store.about_us.videoUrl">
            <ClientOnly fallback-tag="span" fallback="Loading comments...">
              <vimeo-player :video-id='store.about_us?.videoUrl'></vimeo-player>
            </ClientOnly>
          </div>
          <img src="@/assets/Svg/BlueVedio.svg" alt="video" v-else />
        </div>
      </div>


      <!-- image -->
      <!-- <div class="happyG md:mt-[80px] mt-[34px] hidden">
      <div class="min-h-[640px] flex items-center justify-center happyS">
        <div class="container py-[100px]">
          <div class="grid md:grid-cols-2 gap-[24px]">
            <div
              class="mt-4 text-white font-regular-custom xl:text-[18px] text-[15px]"
            >
              <p v-html="store.about_us.desc1_c2"></p>
              <p v-html="store.about_us.desc2_c2" class="mt-4"></p>
            </div>
            <div
              class="mt-4 text-white font-regular-custom xl:text-[18px] text-[15px]"
            >
              <p v-html="store.about_us.desc3_c2"></p>
              <p v-html="store.about_us.desc4_c2" class="mt-4"></p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

      <div class="bg-image-update min-h-[450px] w-full md:mt-[70px] mt-[30px]">
        <div class="container">
          <div class="md:py-20 py-10">
            <div class="lg:w-full">
              <h2 class="px-2 text-[32px] lg:font-[400] xxxs:font-[200] text-white leading-[40px]">
                <span class="font-black-custom">Our </span>Values
              </h2>
              <p class="text-[18px] text-white font-regular-custom mt-4 px-2 md:pr-[8rem]">
                At Stef & Philips, our values are central to our ethos. They<br />guide
                everything we do.
              </p>
            </div>
            <div class="min-h-[300px] text-white w-full">
              <div class="mx-auto w-full lg:py-10">
                <div class="card generic-slider">
                  <Carousel :value="store.about_us?.value_card" :numVisible="3" :numScroll="3"
                    :responsiveOptions="responsiveOptions">
                    <template #item="card">
                      <div class="m-2 px-[30px] pt-[40px] pb-3 lg:h-[380px] bg-white">
                        <div class="text-[#20407C]">
                          <div class="w-[80px] h-[85px] flex items-center pb-5">
                            <img class="max-w-full max-h-full" :src="card.data?.image?.data?.attributes?.url" alt />
                          </div>
                          <h4 v-html="card?.data?.title" class="mb-3 font-black-custom text-[18px]">
                          </h4>
                          <p v-html="card?.data?.description" class="mt-0 mb-3 text-[16px]">
                          </p>
                        </div>
                      </div>
                    </template>
                  </Carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pt-20 pb-[40px]">
            <SectionContentImage direction="" :Card="store.about_us?.featured[4]" />
          </div>
        </div>
      </div>

      <div class="w-full flex justify-center">
        <div class="container">
          <div class="pb-20 pt-[40px]">
            <SectionContentImage direction="image-last" :Card="store.about_us.featured[5]" />
          </div>
        </div>
      </div>

      <!-- step 6 -->
      <div class="container mt-[100px] mb-[10px]">
        <div class="bg-help">
          <div class="card-background">
            <img :src="store.about_us.featured_with_icon?.image?.data?.attributes?.url" class="max-w-[70px]" />
            <h2 v-html="store.about_us.featured_with_icon?.title"
              class="block py-4 font-light-custom lg:text-[36px] xxxs:text-[30px] font-light text-[#00A8A8]">
            </h2>
            <p v-html="store.about_us?.featured_with_icon?.description"
              class="pb-4 lg:text-[18px] xxxs:text-[16px] font-regular-custom">
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <h2 class="text-[36px] font-light-custom text-[#20407c] mt-[2rem] ml-[1px] mb-[3rem]">
          Our <span class="font-black-custom">accreditations</span>
        </h2>
      </div>
      <div class="container my-20">
        <div class="card partner-slider">
          <Carousel :value="store.about_us?.accredation?.images?.data" :numVisible="3" :numScroll="3"
            :responsiveOptions="accredationResponsiveOptions">
            <template #item="card">
              <div class="flex items-center justify-center h-[100px]">
                <img :src="card?.data?.attributes?.url" class="max-w-full max-h-full" />
              </div>
            </template>
          </Carousel>
        </div>
      </div>
      <!-- <div class="w-full flex justify-center">
        <div class="container">
          <div class="pb-20 pt-[40px]">
            <SectionContentImage direction="image-last" :Card="store.about_us?.featured[6]" />
          </div>
        </div>
      </div> -->

      <!-- slider -->
      <div class="bg-second min-h-[600px] text-white w-full pb-[50px] md:pb-[0]">
        <div class="container lg:py-20">
          <div class="flex justify-between flex-wrap items-center py-8 mx-[0.6rem]">
            <h2 class="text-white font-light-custom text-[36px]">
              Our senior team
            </h2>
            <Button value="Meet the full team" link="/about-us/meet-the-team"
              addClass="bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 ring-2 ring-white text-white md:px-[35px]"></Button>
          </div>
          <div class="card generic-slider">
            <Carousel :value="store.about_us.our_senior_team" :numVisible="3" :numScroll="3"
              :responsiveOptions="responsiveOptions">
              <template #item="card">
                <div class="m-[0.6rem]">
                  <img v-if="card.data?.image?.data" class="w-full mb-[20px]"
                    :src="card.data?.image?.data?.attributes?.url" alt />
                  <div v-else
                    class="border-1surface-border border border-round text-center text-black py-20 px-10 lg:h-[300px] mb-[20px] bg-slate-200">
                  </div>
                  <h3 class="font-black-custom text-[18px]">
                    {{ card.data?.name }}
                  </h3>
                  <p class="font-regular-custom text-[16px]">
                    {{ card.data?.designation }}
                  </p>
                </div>
                <!-- <div class="m-2 px-[30px] pt-[40px] pb-3 lg:h-[380px] bg-white">
                <div class="text-[#20407C]">
                  <img class="w-[55px] pb-5" :src="card.data.attributes.image.data.attributes.url" alt />
                  <h4 class="mb-3 font-black-custom text-[18px]">
                    {{ card.data.attributes.name }}
                  </h4>
                  <p class="mt-0 mb-3 text-[16px]">
                    {{ card.data.attributes.designation }}
                  </p>
                </div>
              </div> -->
              </template>
            </Carousel>
          </div>
        </div>
      </div>

      <div class="py-20 container md:px-[15px] px-0 mt-[3rem] mb-[2rem]">
        <Testimonial :Card="store.about_us?.ceo_message" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
// import { ProductService } from "../Service/ProductService";
import { useAppStore } from "@/store/index";
import Testimonial from "@/components/TestimonialMeetTheTeam.vue";
import Button from "@/components/Button.vue";
import PageBanner from "@/components/AboutUsPageBanner.vue";
import SectionContentImage from "@/components/AboutUsSectionContentImage.vue";

//  
import { watch } from "vue";

const store = useAppStore();
await useAsyncData("AboutUs", async () => {
  return await store.aboutUs()
});
useHead({
  title: store.about_us?.seo?.pageTitle ?? "Stef & Philips",
  meta: [
    { name: 'description', content: store.about_us?.seo?.metaDescription },
    { name: 'title', content: store.about_us?.seo?.metaTitle },
    { name: 'image', content: store.about_us?.seo?.metaImage?.data?.attributes?.url }
  ],
})


// onMounted(() => {
//   if (!Object.keys(store.about_us).length)
// })

// onMounted(() => {
//   ProductService.getProductsSmall().then(
//     (data) => (products.value = data.slice(0, 9))
//   );
//   ProductService.getsevenstepprocess().then(
//     (data) => (getsevenstepprocess.value = data.slice(0, 9))
//   );
// });

const products = ref();
const getsevenstepprocess = ref();
const responsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
const accredationResponsiveOptions = ref([
  {
    breakpoint: "1199px",
    numVisible: 3,
    numScroll: 3,
  },
  {
    breakpoint: "991px",
    numVisible: 2,
    numScroll: 2,
  },
  {
    breakpoint: "767px",
    numVisible: 1,
    numScroll: 1,
  },
]);
const getSeverity = (status) => {
  switch (status) {
    case "INSTOCK":
      return "success";

    case "LOWSTOCK":
      return "warning";

    case "OUTOFSTOCK":
      return "danger";

    default:
      return null;
  }
};
</script>

<style scoped>
.bg-help {
  background: url("@/assets/bg-approch.png") no-repeat;
  background-size: cover;
}

.card-background {
  padding: 100px 80px;
}

.dropdown {
  float: left;
  overflow: hidden;
}

/* .bcrumbs{
  background-color: rgba(29, 29, 51, 0.5)
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 6.3rem ;
  left:0;
  background-color: rgba(29, 29, 51, 0.5);
  height: 3rem;
  min-width: 100%;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content a {
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

.dropdown-content a:hover {
  background-color: #ddd;
  color: black;
}

.dropdown:hover .dropdown-content {
  display: block;
} */

.bgImg {
  background-image: url("@/assets/overlay-about-us.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG {
  background-image: url("@/assets/mediaos.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

/* .bg-secon{
  background-image: url("@/assets/step-5.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
} */

.bg-third {
  background: #20407c;
}

.blueBg {
  background-image: url("@/assets/blueBg.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.tiltGirlBg {
  background-image: url("@/assets/Svg/RightUpBg.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.contentImg {
  background: linear-gradient(158deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(29, 29, 51, 0) 100%);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 30px 15px;
}

.contentImgnew {
  background-image: url("@/assets/Shape-Green.png");
  background-repeat: no-repeat;

  background-size: cover;
  background-position: center;
  /* Path 543 */

  /* position: absolute; */
  width: 394px;
  height: 437px;
  margin-left: 11%;
  /* margin-top: 5%; */
  opacity: 90%;
}

.top-margin {
  margin-top: 30%;
}

.left-margin {
  margin-left: 15%;
}

.text-margin {
  margin-left: 11%;
}

.find-btn {
  margin-left: 5%;
}

.houseflex-n {
  position: absolute;
  width: 430.9px;
  height: 480px;
  margin-right: 3%;
  margin-bottom: 5%;
}

.groupImg {
  background-image: url("@/assets/Group 96.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.max-w-sm {
  max-width: 29rem;
}

.bg-image-update {
  background-image: url("@/assets/our-values.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

@media(max-width: 767px) {
  .card-background {
    padding: 50px 25px
  }
}
</style>
