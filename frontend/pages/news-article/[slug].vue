<template>
  <div>
    <div class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent">
      <nav class="container  mx-auto flex items-center justify-start gap-3 inner ">
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/">Home</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="about-us">About us</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="/news-and-views">News and views</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div exact-active-class="exact-active" class="text-white font-semibold text-sm font-bold-custom text-[14px]">
          <router-link to="">News article</router-link>
        </div>
      </nav>
    </div>

    <div>
      <div class="container  lg:text-start text-center py-5 md:py-10 lg:py-20"
        v-if="Object.keys(store?.about_us_meet_new_articles).length">
        <h2 class="font-black-custom !font-extrabold text-[18px] text-[#20407C]">{{
          formatDate(store?.about_us_meet_new_articles?.date) }}</h2>
        <!-- <h2 class="pt-4 font-light-custom md:text-3xl text-2xl lg:text-4xl text-[#647ba4]">{{ store?.about_us_meet_new_articles?.title }}</h2> -->
        <h2 v-html="store?.about_us_meet_new_articles?.title"
          class="pt-4 font-light-custom md:text-3xl text-2xl lg:text-4xl text-[#647ba4]"></h2>


        <div class="flex flex-wrap lg:!flex-row !flex-col lg:!justify-between !justify-center items-center py-6 gap-5">
          <!-- <div class="flex flex-wrap items-center gap-3">
          <span v-for="(tag, index) in store?.about_us_meet_new_articles?.tags"
            class="py-2 px-3 font-semibold text-base transition text-center bg-[#D3D9E4] font-black-custom text-[#20407C] inline-block">{{
              tag.text }}
          </span>
        </div> -->
          <div class="flex mt-3 space-x-4 md:order-2">
            <div class="flex flex-wrap gap-3 news-social">
              <ShareNetwork network="facebook" :url=shareUrl :title=shareTitle>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.016" height="25.016" viewBox="0 0 25.016 25.016">
                    <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square"
                      d="M22.335,2.25H2.68A2.68,2.68,0,0,0,0,4.93V24.585a2.68,2.68,0,0,0,2.68,2.68h7.664v-8.5H6.826v-4h3.518V11.707c0-3.47,2.066-5.387,5.23-5.387a21.312,21.312,0,0,1,3.1.27V10H16.929a2,2,0,0,0-2.257,2.163v2.6h3.841l-.614,4H14.672v8.5h7.664a2.68,2.68,0,0,0,2.68-2.68V4.93a2.68,2.68,0,0,0-2.68-2.68Z"
                      transform="translate(0 -2.25)" fill="#20407c" />
                  </svg>
                </a>
              </ShareNetwork>
              <ShareNetwork network="LinkedIn" :url=shareUrl :title=shareTitle>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.016" height="25.016" viewBox="0 0 25.016 25.016">
                    <path id="Icon_awesome-linkedin" data-name="Icon awesome-linkedin"
                      d="M23.229,2.25H1.781A1.8,1.8,0,0,0,0,4.054V25.462a1.8,1.8,0,0,0,1.781,1.8H23.229a1.8,1.8,0,0,0,1.787-1.8V4.054A1.8,1.8,0,0,0,23.229,2.25ZM7.561,23.692H3.853V11.754H7.566V23.692ZM5.707,10.123a2.15,2.15,0,1,1,2.15-2.15A2.151,2.151,0,0,1,5.707,10.123ZM21.459,23.692H17.751V17.885c0-1.385-.028-3.166-1.926-3.166-1.932,0-2.228,1.508-2.228,3.066v5.908H9.889V11.754h3.557v1.63h.05a3.905,3.905,0,0,1,3.512-1.926c3.752,0,4.45,2.474,4.45,5.69Z"
                      transform="translate(0 -2.25)" fill="#20407c" />
                  </svg>
                </a>
              </ShareNetwork>
              <ShareNetwork network="twitter" :url=shareUrl :title=shareTitle>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="25.016" height="25.016" viewBox="0 0 25.016 25.016">
                    <path id="Icon_awesome-twitter-square" data-name="Icon awesome-twitter-square"
                      d="M22.335,2.25H2.68A2.681,2.681,0,0,0,0,4.93V24.585a2.681,2.681,0,0,0,2.68,2.68H22.335a2.681,2.681,0,0,0,2.68-2.68V4.93A2.681,2.681,0,0,0,22.335,2.25ZM19.6,11.117c.011.156.011.318.011.475A10.348,10.348,0,0,1,9.2,22.011,10.371,10.371,0,0,1,3.574,20.37a7.715,7.715,0,0,0,.882.045A7.342,7.342,0,0,0,9,18.851,3.667,3.667,0,0,1,5.578,16.31a3.947,3.947,0,0,0,1.653-.067,3.662,3.662,0,0,1-2.932-3.6V12.6a3.66,3.66,0,0,0,1.653.463,3.654,3.654,0,0,1-1.63-3.049,3.616,3.616,0,0,1,.5-1.848A10.4,10.4,0,0,0,12.368,12a3.67,3.67,0,0,1,6.248-3.345,7.176,7.176,0,0,0,2.323-.882,3.653,3.653,0,0,1-1.608,2.016,7.288,7.288,0,0,0,2.111-.57A7.708,7.708,0,0,1,19.6,11.117Z"
                      transform="translate(0 -2.25)" fill="#20407c" />
                  </svg>
                </a>
              </ShareNetwork>

            </div>
          </div>
        </div>
        <div class="pt-4">
          <img class="lg:!h-[360px] !h-[200px] object-cover mx-auto"
            :src="store.about_us_meet_new_articles?.header_image?.data?.attributes?.url">
        </div>
      </div>

      <!-- -->
      <div class="pb-20 container">
        <div class="flex items-center justify-center">
          <div class="lg:w-4/5 w-full md:!text-start !text-center">
            <div v-for="(para, index) in store?.about_us_meet_new_articles?.paragraphs?.slice(0, 3)">
              <h4 v-html="para?.title" class="font-black-custom  text-[24px] text-[#20407C]"></h4>
              <h3 v-html="para?.description"
                class="font-regular-custom !text-left text-[18px] text-[#1D1D33] my-3 leading-snug"></h3>


              <!-- {{ para?.title }} -->
              <!-- {{ para?.description }} -->


            </div>
            <!-- <h4 class="font-black-custom text-[20px] text-[#20407C]">Sub titles here</h4>
          <h3 class="font-regular-custom text-[18px] text-[#1D1D33] my-3 leading-snug">Cras lacus sem, faucibus vel luctus
            iaculis, mattis vel ante. Sed sollicitudin sollicitudin diam at condimentum. Sed blandit mi sed urna
            consequat, molestie imperdiet libero vehicula. Duis eros ante, malesuada non risus vitae, dapibus sagittis
            neque. Mauris blandit ut justo nec molestie. Ut hendrerit erat nec maximus rutrum.
          </h3>
          <h4 class="font-black-custom text-[18px] text-[#20407C]">Sub titles here</h4>
          <h3 class="font-regular-custom text-[18px] text-[#1D1D33] mt-3 leading-snug">Cras lacus sem, faucibus vel luctus
            iaculis, mattis vel ante. Sed sollicitudin sollicitudin diam at condimentum. Sed blandit mi sed urna
            consequat, molestie imperdiet libero vehicula. Duis eros ante, malesuada non risus vitae, dapibus sagittis
            neque. Mauris blandit ut justo nec molestie. Ut hendrerit erat nec maximus rutrum.
          </h3> -->
          </div>
        </div>
      </div>

      <!-- -->

      <div class="container py-28 mb-10 bgImg" v-if="store?.about_us_meet_new_articles?.quote?.description">
        <div class="flex items-center justify-center">
          <div class="lg:w-4/5 w-full md:!text-start !text-center">
            <span class="text-2xl text-primary">
              <Icon icon="ooui:quotes-ltr" />
            </span>

            <h2 v-html="store?.about_us_meet_new_articles?.quote?.description"
              class="font-light-custom text-[20px] !text-left text-white mt-5 leading-snug"></h2>
            <!-- <h2 class="font-light-custom text-[20px] !text-left text-white mt-5 leading-snug">{{ store?.about_us_meet_new_articles?.quote?.description }}</h2> -->
            <div class="my-5">

              <h2 v-html="store?.about_us_meet_new_articles?.quote?.name"
                class="font-regular-custom text-[18px] text-white"></h2>
              <h2 v-html="store?.about_us_meet_new_articles?.quote?.title"
                class="font-black-custom tsxt-[18px] text-lg text-white font-semibold"></h2>

              <!-- <h2 class="font-regular-custom text-[18px] text-white">{{ store?.about_us_meet_new_articles?.quote?.name }} </h2>
            <h2 class="font-black-custom tsxt-[18px] text-lg text-white font-semibold">{{ store?.about_us_meet_new_articles?.quote?.title }}</h2> -->
            </div>
          </div>
        </div>
      </div>

      <!-- -->

      <div class="container pb-10">
        <div class="flex items-center justify-center">
          <div class="lg:w-4/5 w-full md:!text-start !text-center">
            <div v-for="(para, index) in store?.about_us_meet_new_articles?.paragraphs?.slice(3, 6)">

              <h4 v-html="para?.title" class="font-black-custom  text-[24px] text-[#20407C]"></h4>
              <h3 v-html="para?.description"
                class="font-regular-custom !text-left text-[18px] text-[#1D1D33] my-3 leading-snug"></h3>

              <!-- <h4 class="font-black-custom text-[24px] text-[#20407C]">{{ para?.title }}</h4>
            <h3 class="font-regular-custom !text-left text-[18px] text-[#1D1D33] my-3 leading-snug">{{ para?.description }}
            </h3> -->


            </div>
            <!-- <h4 class="font-black-custom text-[20px] text-[#20407C]">Sub titles here</h4>
          <h3 class="font-regular-custom text-[18px] text-[#1D1D33] my-3 leading-snug">Cras lacus sem, faucibus vel luctus
            iaculis, mattis vel ante. Sed sollicitudin sollicitudin diam at condimentum. Sed blandit mi sed urna
            consequat, molestie imperdiet libero vehicula. Duis eros ante, malesuada non risus vitae, dapibus sagittis
            neque. Mauris blandit ut justo nec molestie. Ut hendrerit erat nec maximus rutrum.
          </h3>
          <h4 class="font-black-custom text-[18px] text-[#20407C]">Sub titles here</h4>
          <h3 class="font-regular-custom text-[18px] text-[#1D1D33] mt-3 leading-snug">Cras lacus sem, faucibus vel luctus
            iaculis, mattis vel ante. Sed sollicitudin sollicitudin diam at condimentum. Sed blandit mi sed urna
            consequat, molestie imperdiet libero vehicula. Duis eros ante, malesuada non risus vitae, dapibus sagittis
            neque. Mauris blandit ut justo nec molestie. Ut hendrerit erat nec maximus rutrum.
          </h3> -->
          </div>
        </div>
      </div>

      <!-- -->
      <div class="container  mt-[50px] pb-[30px]">
        <div class="w-full  flex justify-center flex-col">
          <div class="video-player" v-if="store?.about_us_meet_new_articles?.video">
            <ClientOnly>
              <vimeo-player :video-id='store?.about_us_meet_new_articles?.video'></vimeo-player>
            </ClientOnly>
          </div>
          <!-- <img src="../assets/Svg/BlueVedio.svg" alt="video" v-else /> -->
        </div>
      </div>
      <div class="container pb-10 md:!text-start !text-center">
        <div class="flex items-center justify-center">
          <div class="lg:w-4/5 w-full">
            <div v-for="(para, index) in store?.about_us_meet_new_articles?.paragraphs?.slice(6, 9)">

              <h4 v-html="para?.title" class="font-black-custom  text-[24px] text-[#20407C]"></h4>
              <h3 v-html="para?.description"
                class="font-regular-custom !text-left text-[18px] text-[#1D1D33] my-3 leading-snug"></h3>


            </div>
          </div>
        </div>
      </div>

      <div class="w-full mx-auto flex   justify-center border-[#EDEDEE]">
        <div class="container">
          <div class="mx-auto flex py-10 md:!flex-row !flex-col mb-10 lg:mb-20 border-y-2 lg:gap-0 gap-10">
            <div class="flex items-center grow gap-10 md:!justify-start !justify-center ">
              <span class="w-[15%] h-auto"> <img class="w-full h-auto"
                  :src="store?.about_us_meet_new_articles?.article_author?.image?.data?.attributes?.url" alt=""></span>
              <div class="text-1xl text-[#2c4b83]">
                <h6 class="font-light-custom text-[18px]">{{ store?.about_us_meet_new_articles?.article_author?.title }}
                </h6>
                <h2 class="font-black-custom !font-extrabold text-[#20407c] text-[18px]">{{
                  store?.about_us_meet_new_articles?.article_author?.name }}</h2>
              </div>
            </div>
            <div class="flex md:!justify-end !justify-center items-center w-full">
              <div class="flex space-x-4 md:order-2">
                <!-- <img src="../assets/Svg/Share.svg" alt> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
import { defineComponent, h, onMounted, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import Button from "../components/Button.vue";
import Loader from "../components/loader.vue";
import { useAppStore } from "../store";
import { createApp } from 'vue';
const store = useAppStore()
const route = useRoute();
import moment from 'moment';
const websiteUrl = 'https://stefphilips.com';
var shareUrl = '';
const shareTitle = 'Article';


await useAsyncData('newsDetailContent', async () => {
  store.about_us_meet_new_articles = {}
  await store.aboutUsMeetNewArticles(route.params.slug)
  shareUrl = websiteUrl + route.path
})

useHead({
  title: store.about_us_meet_new_articles?.seo?.pageTitle ?? "Stef & Philips",
  meta: [
    { name: 'description', content: store.about_us_meet_new_articles?.seo?.metaDescription },
    { name: 'title', content: store.about_us_meet_new_articles?.seo?.metaTitle },
    { name: 'image', content: store.about_us_meet_new_articles?.seo?.metaImage?.data?.attributes?.url }
  ],
})

const formatDate = (date) => {
  return moment(date).format('Do MMMM YYYY');
}

const shareOnFacebook = () => {


  // return this.$route.path;
  // Logic to share on Facebook
};
const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" }
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" }
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" }
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" }
  ],
  social: [
    // {
    //   name: "Facebook",
    //   href: "#",
    //   icon: defineComponent({
    //     render: () =>
    //       h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
    //         h("path", {
    //           "fill-rule": "evenodd",
    //           d:
    //             "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z",
    //           "clip-rule": "evenodd"
    //         })
    //       ])
    //   })
    // },
    {
      name: "Instagram",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd"
            })
          ])
      })
    },
    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d:
                "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
            })
          ])
      })
    },
    {
      name: "GitHub",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd"
            })
          ])
      })
    },
    {
      name: "YouTube",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d:
                "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
              "clip-rule": "evenodd"
            })
          ])
      })
    }
  ]
};
</script>

<style  scoped>
.bgImg {
  background-image: url("@/assets/Svg/Background4.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
</style>