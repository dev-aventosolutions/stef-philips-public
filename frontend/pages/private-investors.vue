<template>
  <div>
    <div class>
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
            <router-link to="corporate-investors">Private investors</router-link>
          </div>
        </nav>
      </div>

      <!-- section 1 -->
      <div class="w-full md:mb-[50px] mb-[20px]">
        <PageBanner v-if="Object.keys(store.private_investors).length" :Banner="store.private_investors" />
      </div>

      <div v-if="Object.keys(store.private_investors).length">
        <div class="container md:py-[50px] py-[30px]">
          <SectionContentImage direction="image-last" :Card="store.private_investors.private_invester_cards.data[0]" />
        </div>
        <div class="container md:py-[50px] py-[30px]">
          <SectionContentImage direction="image-start" :Card="store.private_investors.private_invester_cards.data[2]" />
        </div>
        <div class="md:mt-[80px]">
          <WhyInvest :Section1="store.private_investors.private_invester_bgc_3s.data[0]"
            :Section2="store.private_investors.private_invester_iconc_3s.data" />
        </div>


        <div class="py-20 container md:px-[15px] px-0 mt-[3rem] mb-[2rem]">
          <Testimonial :Card="store.private_investors.private_invester_messages.data[0]" />
        </div>

        <div class="bg-[#1D1D33]">
          <div class="container pt-[125px] pb-[80px]">
            <h2 class="text-[36px] font-light-custom text-white leading-[40px]">
              <span class="font-black-custom">Our full-service solution</span>
            </h2>
            <div class="grid md:grid-col-1 gap-[24px] text-white text-[18px] mt-[24px]">
              <p>
                We are the only company with an end-to-end, full-service offering. This includes sourcing,
                construction/renovation, managing and maintaining each property, all overseen by our dedicated in-house
                teams.
              </p>
              <p>
                Our unique approach gives you, the investor, security and peace of mind that your capital investment and
                yields are protected. Along with the reassurance that Stef & Philips’ high standards of quality and social
                responsibility will be managed, monitored and always delivered.
              </p>
            </div>
            <div class="card generic-slider mt-[35px]">
              <Carousel :value="store.private_investors.private_invester_scrollbox_1s.data" :numVisible="2" :numScroll="2"
                :responsiveOptions="responsiveOptions">
                <template #item="card">
                  <div class="m-2 p-[30px] bg-white h-full">
                    <div class="text-[#20407C]">
                      <div class="w-[50px] h-[50px] flex items-center mb-[20px]">
                        <img class="object-contain w-full h-full"
                          :src="card.data?.attributes?.image?.data?.attributes?.url" />
                      </div>
                      <h4 v-html="card.data.attributes?.title" class="font-black-custom mb-[10px] text-[20px]"></h4>
                      <h6 v-html="card.data.attributes?.description" class="mt-0 text-[18px]"></h6>
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
        </div>

        <!-- <div class="md:py-[100px] py-[50px]">
            <div class="container">
              <h2 class="text-[36px] font-light-custom text-[#20407c]">
                Appliances/Facilities
              </h2>
              <div class="card generic-slider carousel-btn-colored mt-[28px]">
                <Carousel :value="store.private_investors.private_invester_scrollbox_2s.data" :numVisible="3" :numScroll="3" :responsiveOptions="responsiveOptions">
                  <template #item="card">
                  <div class="border-1surface-border border border-round m-2 text-center text-black m-2 bg-[#EDEDEE] bg-slate-200">
                    <div>
                      <img :src="card.data?.attributes?.image?.data?.attributes?.url" alt />
                    </div>
                  </div>
                  <div v-html="card.data.attributes?.title" class="font-black-custom text-[20px] text-[#1D1D33] ml-3"></div>
                  <div v-html="card.data.attributes?.description" class="font-regular-custom text-[18px] text-black ml-3"></div>  
                </template>
                  
                </Carousel> 
              </div> 
            </div>
          </div> -->
        <div class="container">
          <h2 class="text-[36px] font-light-custom text-[#20407c] mt-[5rem] ml-[1px] mb-[5rem]">
            <span class="font-black-custom">Trusted partner to</span> 60+ local authorities, charities and housing
            associations
          </h2>
        </div>
        <div class="container">
          <div class="card partner-slider mb-[50px]">
            <Carousel :value="store.private_investors.private_investor_partners.data" :numVisible="3" :numScroll="3"
              :responsiveOptions="partnerResponsiveOptions">
              <template #item="card">
                <div class="flex items-center justify-center h-[100px]">
                  <img :src="card.data?.attributes?.image?.data?.attributes?.url" class="max-w-full max-h-full" />
                </div>
              </template>
            </Carousel>
          </div>
        </div>

        <!-- <div class="container mt-[75px] mb-[60px]">
            <Testimonial v-for="card in store.private_investors.private_invester_messages.data" :key="card" :Card="card"/>
          </div> -->


        <div class="bg-image-update py-[124px]">
          <div class="container">
            <h2 v-html="store.private_investors.private_invester_bgc_6s.data[0].attributes.title"
              class="text-[36px] text-white leading-[40px] mb-[10px]">
            </h2>
            <p v-html="store.private_investors.private_invester_bgc_6s.data[0].attributes.description"
              class="text-[18px] text-white font-regular-custom"></p>
            <div class="card generic-slider mt-[40px]">
              <Carousel :value="store.private_investors.private_invester_scrollbox_3s.data" :numVisible="3" :numScroll="3"
                :responsiveOptions="responsiveOptions">
                <template #item="card">
                  <div class="m-2 bg-[#fff]">
                    <div class="py-[45px] px-[25px] min-h-[400px]">
                      <div class="w-[55px] h-[80px] pb-5 flex items-center">
                        <img class="max-w-full max-h-full" :src="card.data?.attributes?.image?.data?.attributes?.url"
                          alt />
                      </div>
                      <h4 v-html="card.data.attributes?.title"
                        class="mb-[10px] font-black-custom text-[#20407C] text-[20px]"></h4>
                      <p v-html="card.data.attributes?.description" class="m-0 text-[#20407C] text-[18px]"></p>
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
        </div>


        <div class="container py-[60px]">
          <SectionContentImage direction="image-last" :Card="store.private_investors.private_invester_cards.data[1]" />
        </div>
        <div class="global-impact min-h-[300px] w-full">
          <div class="container py-[70px]">
            <h2 class="text-[36px] font-light-custom text-[#20407C] leading-[40px]">
              For investors looking for a <span class="font-black-custom">positive</span> impact and <span
                class="font-black-custom"> guaranteed</span> returns
            </h2>
            <!-- <p class="text-[18px] font-regular-custom text-[#20407C]">
                Stress-free property ownership delivering a guaranteed<br>income stream and tangible social impact.
            </p> -->
            <router-link to="/contact-investors"
              class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 mt-[20px] border border-[#886BFF] bg-[#886BFF] hover:bg-[#6340f3] font-black-custom text-[16px] text-white inline-block">Get
              in touch</router-link>
          </div>
        </div>
        <div class="py-[70px] bg-[#ededee] md:mb-[0px] mb-[60px]">
          <Faq :faqs="store.private_investors.private_invester_faqs.data" />
        </div>

        <!-- <InvestorSelectOneCard :Calls="store.private_investors.private_invester_calls.data" />  -->
        <SalesforceForm />
      </div>

    </div>

  </div>
</template>
  
<script setup>
import SalesforceForm from "../components/salesforceForm.vue";
import { ref, onMounted } from "vue";
import { ProductService } from '../Service/ProductService';
import { useAppStore } from "../store/index"
import Testimonial from "../components/Testimonial.vue";
import InvestorSelectOneCard from '../components/InvestorSelectOneCard.vue'
import PageBanner from '../components/PageBanner.vue'
import SectionContentImage from '../components/SectionContentImage.vue'
import WhyInvest from '../components/WhyInvest.vue'
import ImpactSection from '../components/ImpactSection.vue'
// import Quotes from "../components/Quotes.vue";
import Faq from "../components/Faq.vue";
import loader from "../components/loader.vue";

import { watch } from "vue";

const store = useAppStore();
 
const partnerResponsiveOptions = ref([
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



const bannerContent = {
  image: new URL("../assets/pInvestor.jpg", import.meta.url).href,
  heading: '<h2 class="font-light-custom text-[42px] leading-none text-white content"> <strong class="font-black-custom">Private </strong>investors</h2>',
  content: 'Experience a more positive way to invest in property. Benefit from 100% freehold ownership, a fully-managed service, and guaranteed rent and returns.'
}


const products = [
  {
    name: "Investment",
    description: "We match the scale of the investment to the appropriate scheme, allowing us to provide housing to a wide number of communities around the UK.",
    image: "@/assets/icon-5.png",
  },
  {
    name: "Sourcing",
    description: "We partner with social impact investors and funds who are dedicated to investing in social housing and homelessness, and raise funds to purchase portfolios of properties which include single dwelling houses, hostels, hotels and care homes.",
    image: "@/assets/icon-8.png",
  },
  {
    name: "Determined to make a difference",
    description: "Our goal is to reduce homelessness and create positive change in many people’s lives. ",
    image: "@/assets/S&P Icons 2023_Value - determined.png",
  }];

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

await useAsyncData('PrivateInvestoresContent', async () => {
  ProductService.getcorporateInvestor().then((data) => (getcorporateInvestor.value = data.slice(0, 9)));
  ProductService.getsevenstepprocess().then((data) => (getsevenstepprocess.value = data.slice(0, 9)));
  return await store.privateInvestors()
})
useHead({
  title: store.private_investors?.seo?.pageTitle ?? "Stef & Philips",
  meta: [
    { name: 'description', content: store.private_investors?.seo?.metaDescription },
    { name: 'title', content: store.private_investors?.seo?.metaTitle },
    { name: 'image', content: store.private_investors?.seo?.metaImage?.data?.attributes?.url }
  ],
})
</script>
  
<style  scoped>
.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5)
}

.bgImg {
  background-image: url("../assets/private-investor-slider.png");
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