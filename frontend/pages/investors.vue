<template>
  <div>
    <div class>
      <div
        class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent"
      >
        <nav class="container flex items-center justify-start gap-3 inner">
          <div
            exact-active-class="exact-active"
            class="text-white font-semibold text-sm font-bold-custom text-[14px]"
          >
            <router-link to="/">Home</router-link>
          </div>
          <i class="pi pi-angle-right text-white"></i>
          <div
            exact-active-class="exact-active"
            class="text-white font-semibold text-sm font-bold-custom text-[14px]"
          >
            <router-link to="investors">Investors</router-link>
          </div>
        </nav>
      </div>

      <!-- Step 2 -->
      <div class="w-full mb-[50px]">
        <PageBanner
          v-if="Object.keys(store.investors).length"
          :Banner="store.investors"
        />
      </div>

      <!-- Step 2 -->
      <div v-if="Object.keys(store.investors).length">
        <div class="w-full flex justify-center">
          <div class="container">
            <div class="pt-20 pb-[40px]">
              <SectionContentImage
                direction="image-last"
                :Card="store.investors.investor_cards.data[0]"
              />
            </div>
          </div>
        </div>
        <div class="w-full flex justify-center">
          <div class="container">
            <div class="pb-20 pt-[40px]">
              <SectionContentImage
                :Card="store.investors.investor_cards.data[2]"
              />
            </div>
          </div>
        </div>
        <div class="container">
          <h2
            class="text-[36px] font-light-custom text-[#20407c] mt-[1rem] ml-[1px] mb-[3rem]"
          >
            <span class="font-black-custom">Trusted partner to</span> 60+ local
            authorities, charities and housing associations
          </h2>
        </div>
        <div class="container" v-if="store.investors.investor_partners">
          <div class="card partner-slider mb-[50px]">
            <Carousel
              :value="store.investors.investor_partners?.data"
              :numVisible="3"
              :numScroll="3"
              :responsiveOptions="partnerResponsiveOptions"
            >
              <template #item="card">
                <div class="flex items-center justify-center h-[100px]">
                  <img
                    :src="card.data.attributes.image.data.attributes.url"
                    class="max-w-full max-h-full"
                  />
                </div>
              </template>
            </Carousel>
          </div>
        </div>
        <WhyInvest
          :Section1="store.investors.investor_bg_c_3.data"
          :Section2="store.investors.investor_icons_c_3s.data"
        />

        <div class="container py-[50px]">
          <SectionContentImage :Card="store.investors.investor_cards.data[1]" />
        </div>
        <div class="global-impact min-h-[300px] w-full">
          <div class="container py-[70px]">
            <h2
              class="text-[36px] font-light-custom text-[#20407C] leading-[40px]"
            >
              For investors who want to make a
              <span class="font-black-custom">positive impact</span>
            </h2>
            <p class="text-[18px] font-regular-custom text-[#20407C]">
              Stress-free property ownership delivering a guaranteed income
              stream and tangible social impact.
            </p>
            <router-link
              to="/contact-investors"
              class="xxs:py-3 md:py-3 xxs:px-4 md:px-8 mt-[20px] border border-[#886BFF] bg-[#886BFF] hover:bg-[#6340f3] font-black-custom text-[16px] text-white inline-block"
              >Get in touch</router-link
            >
          </div>
        </div>

        <div class="bg-[#1D1D33]">
          <div class="container pt-[125px] pb-[80px]">
            <h2 class="text-[36px] font-light-custom text-white leading-[40px]">
              <span class="font-black-custom">Our full-service solution</span>
            </h2>
            <div
              class="grid md:grid-col-1 gap-[24px] text-white text-[18px] mt-[24px]"
            >
              <p>
                We are the only company with an end-to-end, full-service
                offering. This includes sourcing, construction/renovation,
                managing and maintaining each property, all overseen by our
                dedicated in-house teams.
              </p>
              <p>
                Our unique approach gives you, the investor, security and peace
                of mind that your capital investment and yields are protected.
                Along with the reassurance that Stef & Philips’ high standards
                of quality and social responsibility will be managed, monitored
                and always delivered.
              </p>
            </div>
            <div class="card generic-slider mt-[35px]">
              <Carousel
                :value="store.investors.investor_scrollbox_1s.data"
                :numVisible="2"
                :numScroll="2"
                :responsiveOptions="responsiveOptions"
              >
                <template #item="card">
                  <div class="m-2 p-[30px] bg-white h-full">
                    <div class="text-[#20407C]">
                      <div
                        class="w-[50px] h-[50px] flex items-center mb-[20px]"
                      >
                        <img
                          class="object-contain w-full h-full"
                          :src="
                            card.data?.attributes?.icon?.data?.attributes?.url
                          "
                        />
                      </div>
                      <h4
                        v-html="card.data.attributes.title"
                        class="mb-[10px] font-black-custom text-[20px]"
                      ></h4>
                      <h6
                        v-html="card.data.attributes.description"
                        class="mt-0 text-[18px]"
                      ></h6>
                    </div>
                  </div>
                </template>
              </Carousel>
            </div>
          </div>
        </div>
        <div class="container py-[50px]">
          <div class="grid md:grid-cols-3 gap-[24px]">
            <Cards
              :data="store.investors.investor_smallcards.data"
              bgColor="#F4F9FF"
            />
          </div>
        </div>
        <!-- <div class="bg-image-update min-h-[450px] w-full">
      <div class="container">
        <div class="lg:py-20 xxxs:py-10">
          <div class="container">
            <h2
              class="lg:text-[32px] lg:font-[400] xxxs:font-[200] text-white leading-[40px]"
            >
              <span class="font-black-custom lg:text-[30px] xxxs:text-[18px]"
                >You’re always fully supported
              </span>
            </h2>
             checck font-regular-custom is tailwind?
            <p
              class="text-[18px] text-white font-regular-custom mt-4pr-[8rem] mb-[18px]"
            >
            Our team is always here to support you in your home. 
            </p>
          </div>
          <div class="min-h-[300px] text-white w-full">
            <div class="container mx-auto w-full lg:py-10">
              <div
                class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6"
              >
              {{ store.investors.investor_scrollbox_2s.data }}
              <Yourhome :data="store.investors.investor_scrollbox_2s.data" bgColor="#fff"/>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>-->
        <div
          class="py-[70px] bg-[#ededee] md:mb-[0px] mb-[60px]"
          v-if="store.investors.investor_faqs"
        >
          <Faq :faqs="store.investors.investor_faqs?.data" />
        </div>

        <!-- <InvestorSelectOneCard :Calls="store.investors.investor_calls.data" />  -->
        <SalesforceForm />
      </div>
    </div>
    <div v-if="store?.investors?.featured_investor_article?.data">
      <FeaturedNewsArticle
        :featuredArticle="store?.investors?.featured_investor_article?.data"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import Cards from "@/components/YourHomeCards.vue";
import { useAppStore } from "@/store/index";
import PageBanner from "@/components/PageBanner.vue";
import SectionContentImage from "@/components/SectionContentImage.vue";
import WhyInvest from "@/components/WhyInvest.vue";
import Faq from "@/components/Faq.vue";
import SalesforceForm from "@/components/salesforceForm.vue";
import { watch } from "vue";

const store = useAppStore();
await useAsyncData("InvestorsContent", async () => {
  return await store.getInvestors();
});
useHead({
  title: store.investors?.seo?.pageTitle || "Stef & Philips",
  meta: [
    { name: "description", content: store.investors?.seo?.metaDescription },
    { name: "title", content: store.investors?.seo?.metaTitle },
    {
      name: "image",
      content: store.investors?.seo?.metaImage?.data?.attributes?.url,
    },
  ],
});

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

const sectionContentImage = {
  image: new URL("../assets/investor-right-img.png", import.meta.url).href,
  heading:
    '<h2 class="font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">A <strong class="font-black-custom">unique approach  </strong>to social impact investing</h2>',
  content:
    "Social impact investing is a fast-growing specialist sector; social and affordable housing now accounts for 48% of the market.  Stef & Philips’ offering appeals to private investors and corporate entities who are looking for secure investments that have a guaranteed return and a positive impact on society.By partnering with us, investors will be helping deliver safe, suitable homes and vital services for vulnerable tenants, authorities and partners across the UK.",
  buttons: [
    {
      value: "Speak to our team",
      link: "/about-us/meet-the-team",
      addClass:
        "bg-[#2A8CFB] hover:bg-[#1F73D3]  focus:bg-[#175EB1] w-[200px] mt-5 text-white",
      icon: "",
    },
  ],
};

const sectionContentImage1 = {
  image: new URL("../assets/housing-partner-3.png", import.meta.url).href,
  heading:
    '<h2 class="font-light-custom text-[36px] text-trisec text-ellipsis leading-[40px]">Our commitment to  <strong class="font-black-custom">quality </strong></h2>',
  content:
    "Our vision is to see a world without homelessness; our mission is to make the lives of vulnerable people safer and more secure. That’s why Stef & Philips has established itself as a trusted provider of high-quality social housing. All our accommodation is designed to be fit-for-purpose – safe, suitable and secure – and caters to a variety of specific needs including mother and baby, young adult and disabilities.",
  // buttons: [
  //   {value: 'Meet our team', link: '/about-us/meet-the-team', addClass: 'bg-[#2A8CFB] hover:bg-[#1F73D3]  focus:bg-[#175EB1] w-[205px] mt-5 text-white', icon: ''}
  // ]
};

const bannerContent = {
  image: new URL("../assets/Investor.jpg", import.meta.url).href,
  heading:
    '<h2 class="font-light-custom text-[42px] leading-none text-white content">Invest with <strong class="font-black-custom">impact </strong></h2>',
  content:
    "A social impact investment opportunity for private individuals and corporate entities - with guaranteed returns, and low risk.",
};

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

const people = [
  {
    name: "Landlords",
    role: "Giving housing partners the help, they need",
    imageUrl: new URL("../assets/card-1.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: "#",
  },
  {
    name: "Private Investors",
    role: "Safe homes, sound investments",
    imageUrl: new URL("../assets/card-2.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: "#",
  },
  {
    name: "Corporate Investors",
    role: "Meet corporate and ESG goals responsibly",
    imageUrl: new URL("../assets/card-3.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: "#",
  },
  // More people...
];
</script>

<style scoped>
.bg-image-update {
  background-image: url("../assets/you-always-Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5);
}

.bgImg {
  background-image: url("../assets/overlay-investor.png");
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
  background: #20407c;
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

.fnf-image .container {
  max-width: 1180px;
}
</style>
