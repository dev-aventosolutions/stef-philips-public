<template>
  <div>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent">
      <nav class="container flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="investors">Investors</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="landlords">Existing landlords</router-link>
        </div>
      </nav>
    </div>

    <!-- section 1 -->
    <div class="w-full mb-[50px]">
      <PageBanner v-if="Object.keys(store.investors_landlords).length" :Banner="store.investors_landlords" />
    </div>

    <div v-if="Object.keys(store.investors_landlords).length">

      <div class="container py-[50px]">
        <SectionContentImage direction="image-last" :Card="store.investors_landlords.investors_landlord_cards.data[0]" />
      </div>

      <div class="mt-[80px]">
        <WhyInvest :Section1="store.investors_landlords.investors_landlord_bg_c_3.data"
          :Section2="store.investors_landlords.investors_landlord_icons_c_3s.data" />
      </div>

      <!-- <div class="pt-[120px] pb-[50px]">
        <div class="container">
          <div class="w-5/6">
            <h2 class="text-[36px] text-[#20407c] font-light-custom mb-[12px]">
              <span class="font-black-custom">Renovations</span> and remodelling
            </h2>
            <p class="text-[#1D1D33] text-[18px]">
              Covering everything from small-scale renovations to full refurbishments, Stef & Philips’ in-house construction team can transform your property into a high-quality living space. Our services include:
            </p>
          </div>
          <div class="mt-[48px] grid md:grid-cols-3 gap-[38px]">
            <div>
              <img src="@/assets/sketch.png" alt="sketch"/>
              <p class="mt-[15px] text-[18px] text-[#1D1D33]">Unique design specifications for each property, to meet landlords’ requirements. </p>
            </div>
            <div>
              <img src="@/assets/recycle.png" alt="recycle"/>
              <p class="mt-[15px] text-[18px] text-[#1D1D33]">
                Ongoing maintenance, managed by our in-house team, to ensure [the property remains / all aspects of the property remain] in good working order.  
              </p>
            </div>
            <div>
              <img src="@/assets/elevator.png" alt="elevator"/>
              <p class="mt-[15px] text-[18px] text-[#1D1D33]">
                Paying due diligence to accessibility considerations, to ensure properties are fit-for-purpose and can cater to tenants specific needs.  
              </p>
            </div>
          </div>
        </div>
      </div> -->
      <div class="py-20 container md:px-[15px] px-0 mt-[3rem] mb-[2rem]">
        <Testimonial :Card="store.investors_landlords.investors_landlord_message.data" />
      </div>
      <!-- <div class="container py-[50px] pb-[100px]">
        <SectionContentImage direction="image-last" :Card="store.investors_landlords.investors_landlord_cards.data[1]"/>
      </div> -->
      <div class="global-impact min-h-[300px] w-full">
        <div class="container py-[70px]">
          <h2 class="text-[36px] font-light-custom text-[#20407C] leading-[40px]">
            For investor landlords looking for a <span class="font-black-custom">stress free</span> management solution
          </h2>
          <p class="text-[18px] font-regular-custom text-[#20407C]">

          </p>
          <a href="/contact-investors"
            class="font-black-custom xxs:py-3 md:py-3 xxs:px-4 md:px-8 inline-block mt-[20px] border border-[#886BFF] bg-[#886BFF] hover:bg-[#6340f3] font-black-custom text-[16px] text-white">
            Get in touch
          </a>
        </div>
        <div class="py-[70px] bg-[#ededee] md:mb-[0px] mb-[60px]">
          <Faq :faqs="store.investors_landlords.investors_landlord_faqs.data" />
        </div>
        <SalesforceForm />
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted } from "vue";
import { ProductService } from '@/Service/ProductService';
import Testimonial from "@/components/Testimonial.vue";
import { useAppStore } from "@/store/index";
import PageBanner from '@/components/PageBanner.vue'
import SectionContentImage from '@/components/SectionContentImage.vue';
import Faq from "@/components/Faq.vue";
import WhyInvest from '@/components/WhyInvest.vue'
import SalesforceForm from "@/components/salesforceForm.vue";
import { watch } from "vue";


const store = useAppStore();


const bannerContent = {
  image: new URL("../assets/Landlords.jpg", import.meta.url).href,
  heading: '<h2 class="font-light-custom text-[42px] leading-none text-white content"> <strong class="font-black-custom">Landlords </strong></h2>',
  content: 'A full-service partnership with services tailored to your requirements.'
}

const sectionContentImage = {
  image: new URL("../assets/fullService.png", import.meta.url).href,
  heading: '<h2 class="font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">A <strong class="font-black-custom">full-service </strong> solution</h2>',
  content: 'Partnering with Stef & Philips gives landlords peace of mind their properties are in safe hands. Our complete solution covers everything from property management to renovation and remodelling, with services tailored to meet [the specific needs of your tenants / with services tailored to meet your specific needs]. ',
  buttons: [
    { value: 'Speak to our team', link: '/about-us/meet-the-team', addClass: 'bg-[#2A8CFB] hover:bg-[#1F73D3]  focus:bg-[#175EB1] w-[195px] mt-5 text-white', icon: '' }
  ]
}

const sectionContentImage1 = {
  image: new URL("../assets/ukSide.png", import.meta.url).href,
  heading: '<h2 class="font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">Supporting communities, <strong class="font-black-custom">UK-wide </strong></h2>',
  content: 'Our services can be adapted to support the specific needs of a wide range of communities. ',
}

const products = ref();
const getcorporateInvestor = ref();
const getsevenstepprocess = ref();
const responsiveOptions = ref([
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 3
  },
  {
    breakpoint: '991px',
    numVisible: 2,
    numScroll: 2
  },
  {
    breakpoint: '767px',
    numVisible: 1,
    numScroll: 1
  }
]);


const people = [
  {
    name: "Landlords",
    role: "Giving housing partners the help, they need",
    imageUrl: new URL("../assets/card-1.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"
  },
  {
    name: "Private Investors",
    role: "Safe homes, sound investments",
    imageUrl: new URL("../assets/card-2.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"

  },
  {
    name: "Corporate Investors",
    role: "Meet corporate and ESG goals responsibly",
    imageUrl: new URL("../assets/card-3.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more"
  }
  // More people...
];

await useAsyncData('landlordsContent', async () => {
  ProductService.getfullservice().then((data) => (products.value = data.slice(0, 9)));
  ProductService.getcorporateInvestor().then((data) => (getcorporateInvestor.value = data.slice(0, 9)));
  ProductService.getsevenstepprocess().then((data) => (getsevenstepprocess.value = data.slice(0, 9)));
  return await store.investorsLandlords()
})
useHead({
  title: store.investors_landlords?.seo?.pageTitle || "Stef & Philips",
  meta: [
    { name: 'description', content: store.investors_landlords?.seo?.metaDescription, tagPosition: "head" },
    { name: 'title', content: store.investors_landlords?.seo?.metaTitle, tagPosition: "head" },
    { name: 'image', content: store.investors_landlords?.seo?.metaImage?.data?.attributes?.url, tagPosition: "head" }
  ],
})


</script>
  
<style  scoped>
.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5)
}

.bgImg {
  background-image: url("../assets/Landlords-slider.png");
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
  background-image: url("../assets/bg-uk-need.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.happyG2 {
  background-image: url("../assets/Background-investor.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-image-update {
  background-image: url("../assets/Background-investor.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bg-color {
  opacity: 0.85;
  background: #1d1d33
}

.global-impact {
  background-image: url("../assets/global-impact.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.obligation-background {
  background-image: url("../assets/obligation-background.png");
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

.bgColor1 {
  background-color: #1d1d33;
  background-image: url("../assets/full_quote.png");
  background-repeat: no-repeat;
}

.backgroundButton1 {
  width: 164px;
  height: 50px;
  padding: 8px;
  color: white;
  background: #2a8cfb;
}
</style>