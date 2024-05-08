<template>
  <div>
    <div class="w-full home-banner relative">
      <div class="bg-img">
        <img :src="store.main_page.image_c1.data.attributes.url" alt="home-banner" />
      </div>
      <div class="banner-content relative">
        <div class="container">
          <div class="columns-1 md:pt-[70px] md:pb-[90px] py-[40px]">
            <div class="bannerContent">
              <div class="contentSec">
                <h1 v-html="store.main_page.title_c1"
                  class="font-light-custom md:text-[40px] text-[28px] leading-none text-white content"></h1>
                <p v-html="store.main_page.desc_c1" class="text-white mt-4 font-regular-custom text-[18px]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div v-if="Object.keys(store.main_page).length">
      <div class="w-full flex justify-center md:pb-0 pb-[150px]">
        <div class="container">
          <div class="py-20">
            <div class="grid md:grid-cols-2 items-center lg:gap-[110px] md:gap-[70px]">
              <div class="md:order-last">
                <img :src="store.main_page.main_cards.data[0].attributes.image.data
                  .attributes.url
                  " alt />
              </div>
              <div class="md:mt-0 mt-9">
                <h2 v-html="store.main_page.main_cards.data[0].attributes.title"
                  class="leading-none text-trisec font-light-custom text-[32px]"></h2>

                <b>
                  <span v-html="store.main_page.main_cards.data[0].attributes.description"
                    class="mt-4 font-regular-custom lg:text-[18px] text-[16px] block ">
                  </span>

                  <Button value="Hear our story"
                    addClass="bg-[#20407C] hover:bg-[#173060]  focus:bg-[#132850]  w-[154px] mt-5 text-white shadow-sm"
                    link="/about-us"></Button>
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="min-h-[400px] w-full bg-[#20407C]">
        <div class="container md:-translate-y-0 -translate-y-[170px] md:pt-[100px]">
          <div class="lg:py-26">
            <div class="grid md:grid-cols-2 items-center lg:gap-[10px] md:gap-[70px]">
              <div class="md:mb-0 mb-9">
                <img :src="store.main_page.main_cards.data[1].attributes.image.data
                  .attributes.url
                  " alt />
              </div>
              <div class="text-white">
                <h2 v-html="store.main_page.main_cards.data[1].attributes.title"
                  class="leading-none font-regular-custom lg:text-[42px] text-[24px]"></h2>
                <p v-html="store.main_page.main_cards.data[1].attributes.description
                  " class="mt-10 font-regular-custom lg:text-[18px] text-[16px]"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="min-h-[600px] w-full fnf-image md:-translate-y-0 -translate-y-[70px]">
        <div class="container md:pt-20 md:pb-0 pb-[110px]">
          <div class="grid md:grid-cols-5 md:gap-y-0 gap-y-[40px] md:gap-5 gap-0">
            <div class="single-point">
              <div class="md:mt-[5rem] text-white">
                <h2 v-html="store.main_page.main_stats.data[0].attributes.number"
                  class="font-light-custom text-[36px] text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                </h2>
                <p v-html="store.main_page.main_stats.data[0].attributes.title"
                  class="text-[18px] font-regular-custom mt-4"></p>
                <img src="@/assets/Keyline.png" alt />
              </div>
            </div>
            <div class="single-point">
              <div class="md:mt-[2rem] text-white">
                <h2 v-html="store.main_page.main_stats.data[1].attributes.number"
                  class="font-light-custom text-[36px] text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                </h2>
                <p v-html="store.main_page.main_stats.data[1].attributes.title"
                  class="text-[18px] font-regular-custom mt-4"></p>
                <img src="@/assets/Keyline.png" alt />

              </div>
            </div>
            <div class="single-point">
              <div class="md:mt-[5rem] text-white">
                <h2 v-html="store.main_page.main_stats.data[2].attributes.number"
                  class="font-light-custom text-[36px] text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                </h2>
                <p v-html="store.main_page.main_stats.data[2].attributes.title"
                  class="text-[18px] font-regular-custom mt-4"></p>
                <img src="@/assets/Keyline.png" alt />
              </div>
            </div>
            <div class="single-point">
              <div class="md:mt-[4rem] text-white">
                <h2 v-html="store.main_page.main_stats.data[3].attributes.number"
                  class="font-light-custom text-[36px] text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                </h2>
                <p v-html="store.main_page.main_stats.data[3].attributes.title"
                  class="text-[18px] font-regular-custom mt-4"></p>
                <img src="@/assets/Keyline.png" alt />
              </div>
            </div>
            <div class="single-point">
              <div class="md:mt-[2rem] text-white">
                <h2 v-html="store.main_page.main_stats.data[4].attributes.number"
                  class="font-light-custom text-[36px] text-[38px] lg:font-[500] xxxs:font-[200] text-ellipsis leading-[40px]">
                </h2>
                <p v-html="store.main_page.main_stats.data[4].attributes.title"
                  class="text-[18px] font-regular-custom mt-4"></p>
                <img src="@/assets/Keyline.png" alt />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="pt-20 container md:px-[15px] px-0 mt-[3rem] md:mb-[100px] mb-[50px]"
        v-if="store.main_page.main_messages.data.length > 0">
        <Testimonial v-for="card in store.main_page.main_messages.data" :key="card" :Card="card" />
      </div>

      <div :style="{
        backgroundImage: `url(${store.main_page.main_card_5s.data[0].attributes.image.data.attributes.url})`,
      }" class="happyG mt-[30px]">
        <div class="min-h-[640px] flex items-center justify-center happyS">
          <div class="container pt-[100px] md:pt-0 pb-[50px] md:pb-0">
            <div class="w-full">
              <div class="w-full md:w-[50%] md:pr-10 text-white">
                <h2 v-html="store.main_page.main_card_5s.data[0].attributes.title"
                  class="font-light-custom sm:text-[36px] text-[30px] leading-none"></h2>
                <p v-html="store.main_page.main_card_5s.data[0].attributes.description
                  " class="mt-4 font-regular-custom sm:text-[18px] text-[16px]"></p>
              </div>

              <div class="flex flex-wrap items-center justify-start gap-4 mt-8">
                <Button value="Tenants" link="/tenants"
                  addClass="w-full md:w-[150px] bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 ring-2 ring-white text-white"></Button>
                <Button value="Housing partners" link="/housing-partners"
                  addClass="w-full md:w-[200px] bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 ring-2 ring-white text-white"></Button>
                <Button value="For Investors" link="/investors"
                  addClass="w-full md:w-[180px] bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 ring-2 ring-white text-white"></Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <NeedHelp :needHelp="needHelp" />

      <div class="justify-center">
        <div class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6">
          <YourHomeCardButtonOnly :data="store.main_page.your_home_tempacc_card_2s?.data" bgColor="#F0F7FE" />
        </div>
      </div>

      <div class="pb-20 pt-0 mt-20">
        <div class="container">
          <div class="grid md:grid-cols-3 sm:grid-cols-3 xs:grid-cols-1 xxs:grid-cols-1 gap-6">
            <Cards :data="store.main_page.main_lastcards.data" bgColor="#F0F7FE" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Cards from "@/components/YourHomeCards.vue";
import { useAppStore } from "../store/index";

import { watch } from "vue";

const store = useAppStore();

await useAsyncData('MainPageContent', async () => {
  await store.mainPage()
})


useHead({
  title: store.main_page?.seo?.pageTitle,
  meta: [
    { name: "description", content: store.main_page?.seo?.metaDescription || "Stef & Philips", tagPosition: "head" },
    { name: 'title', content: store.main_page?.seo?.metaTitle, tagPosition: "head" },
    { name: 'image', content: store.main_page?.seo?.metaImage?.data?.attributes?.url, tagPosition: "head" }
  ],
})


const needHelp =
  "Using our online form is the quickest way to report an issue and get it fixed.";

const people = [
  {
    name: "Help in your home",
    role: "Short description excerpt here",
    imageUrl: new URL("@/assets/Svg/ThreeCardFlexN.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
  },
  {
    name: "Quick report form",
    role: "Use our quick online form. The quickest way to report an issue and get it fixed.",
    imageUrl: new URL("@/assets/Svg/ThreeCardFlexM.svg", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
  },
  {
    name: "Report repair or maintainance",
    role: "Short description excerpt here",
    imageUrl: new URL("@/assets/Svg/RectangularFlex.svg", import.meta.url)
      .href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
  },
  // More people...
];
const peopleM = [
  {
    name: "Career",
    role: "Keen to join our team?",
    imageUrl: new URL("@/assets/career.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Find out more",
    button_url: "/careers",
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
    buttonPadding: "",
  },
  {
    name: "News",
    role: "Latest updates from Stef & Philips",
    imageUrl: new URL("@/assets/news.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report an issue",
    button_url: "/news",
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
    buttonPadding: "",
  },
  {
    name: "FAQ's",
    role: "Commonly asked questions",
    imageUrl: new URL("@/assets/faqs.png", import.meta.url).href,
    twitterUrl: "#",
    linkedinUrl: "#",
    btnName: "Report now",
    button_url: "/faqs",
    height: "h-auto",
    width: "w-auto",
    color: "bg-[#F0F7FE]",
    buttonPadding: "",
  },
  // More people...
];
</script>

<style scoped>
.bg-image-update {
  background-image: url("@/assets/you-always-Background.png");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.home-banner {
  padding-top: 50px;
}

.home-banner .bg-img {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.home-banner .bg-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.fnf-image {
  background-image: url("@/assets/bg-image-home.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.fnf-image .container {
  max-width: 1180px;
}

.bcrumbs {
  background-color: rgba(29, 29, 51, 0.5);
}

.bgImg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* width: 1920px; */
  /* height: 600px; */
}

.bannerContent {
  background-image: url("@/assets/sliderlogo.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-position: center;
  max-width: 420px;
  padding: 130px 16px 70px 16px;
}

.bannerContent .contentSec {
  padding: 15px;
}

.happyG {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
}

.happyG:after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  /* background: url('@/assets/arc.png'); */
  height: 80px;
  background-size: cover;
}

.happyS {
  /* background-color: rgba(0,0,0,0.5); */
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

@media (max-width: 767px) {
  .home-banner .banner-content {
    background: rgb(29, 29, 51);
    background: linear-gradient(0deg,
        rgba(29, 29, 51, 1) 54%,
        rgba(29, 29, 51, 0.1) 100%);
    margin-top: -50px;
    padding-top: 50px;
    min-height: 650px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .home-banner .columns-1 {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .home-banner .bg-img img {
    height: 350px;
  }

  .bannerContent {
    padding: 110px 16px 55px 16px;
  }

  .single-point img {
    display: none;
  }
}
</style>