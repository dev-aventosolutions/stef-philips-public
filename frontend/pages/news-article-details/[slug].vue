<template>
  <div>
    <div
      class="h-[40px] w-full bg-[#707070] bl flex justify-center nav-bar-tranparent"
    >
      <nav
        class="container mx-auto flex items-center justify-start gap-3 inner"
      >
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
          <router-link to="about-us">About us</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="/news-and-views">News and views</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="">{{
            store?.about_us_meet_new_articles?.attributes?.title
          }}</router-link>
        </div>
      </nav>
    </div>
    <!--page body main-->

    <!--Header background color-->
    <div
      class="bgImg h-[250px] md:h-[300px] w-full relative"
      :style="{
        // backgroundColor: '#20407c',
        backgroundColor: store?.about_us_meet_new_articles?.attributes?.bannerColour,
      }"
    >
      <div class="container">
        <div class="relative">
          <div class="absolute left-0 top-14 md:top-[75px]">
            <div class="flex flex-col gap-3">
              <div class="flex gap-4 items-center">
                <!-- <img src="assets/svg/Linkedin.svg" />
                <img src="assets/svg/facebook-round.svg" />
                <img src="assets/svg/twitter-round.svg" /> -->

                <ShareNetwork
                  network="LinkedIn"
                  :url="shareUrl"
                  :title="shareTitle"
                >
                  <a href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.2234 0H1.77187C0.792187 0 0 0.773438 0 1.72969V22.2656C0 23.2219 0.792187 24 1.77187 24H22.2234C23.2031 24 24 23.2219 24 22.2703V1.72969C24 0.773438 23.2031 0 22.2234 0ZM7.12031 20.4516H3.55781V8.99531H7.12031V20.4516ZM5.33906 7.43438C4.19531 7.43438 3.27188 6.51094 3.27188 5.37187C3.27188 4.23281 4.19531 3.30937 5.33906 3.30937C6.47813 3.30937 7.40156 4.23281 7.40156 5.37187C7.40156 6.50625 6.47813 7.43438 5.33906 7.43438ZM20.4516 20.4516H16.8937V14.8828C16.8937 13.5562 16.8703 11.8453 15.0422 11.8453C13.1906 11.8453 12.9094 13.2937 12.9094 14.7891V20.4516H9.35625V8.99531H12.7687V10.5609H12.8156C13.2891 9.66094 14.4516 8.70938 16.1813 8.70938C19.7859 8.70938 20.4516 11.0813 20.4516 14.1656V20.4516Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </ShareNetwork>
                <ShareNetwork
                  network="facebook"
                  :url="shareUrl"
                  :title="shareTitle"
                >
                  <a href="#">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </ShareNetwork>
                <ShareNetwork
                  network="twitter"
                  :url="shareUrl"
                  :title="shareTitle"
                >
                  <a href="#">
                    <svg
                      width="24"
                      height="20"
                      viewBox="0 0 24 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.55016 19.75C16.6045 19.75 21.5583 12.2468 21.5583 5.74192C21.5583 5.53098 21.5536 5.31536 21.5442 5.10442C22.5079 4.40752 23.3395 3.54432 24 2.55536C23.1025 2.95466 22.1496 3.21544 21.1739 3.3288C22.2013 2.71297 22.9705 1.74553 23.3391 0.605828C22.3726 1.17862 21.3156 1.58267 20.2134 1.80067C19.4708 1.01162 18.489 0.489177 17.4197 0.314112C16.3504 0.139047 15.2532 0.321111 14.2977 0.832157C13.3423 1.3432 12.5818 2.15477 12.1338 3.14137C11.6859 4.12798 11.5754 5.23468 11.8195 6.29036C9.86249 6.19215 7.94794 5.68377 6.19998 4.79816C4.45203 3.91255 2.90969 2.6695 1.67297 1.14958C1.0444 2.2333 0.852057 3.51571 1.13503 4.73615C1.418 5.9566 2.15506 7.02351 3.19641 7.72005C2.41463 7.69523 1.64998 7.48474 0.965625 7.10598V7.16692C0.964925 8.30421 1.3581 9.40665 2.07831 10.2868C2.79852 11.167 3.80132 11.7706 4.91625 11.995C4.19206 12.1932 3.43198 12.2221 2.69484 12.0794C3.00945 13.0575 3.62157 13.913 4.44577 14.5264C5.26997 15.1398 6.26512 15.4807 7.29234 15.5013C5.54842 16.8712 3.39417 17.6142 1.17656 17.6107C0.783287 17.6101 0.390399 17.586 0 17.5385C2.25286 18.9838 4.87353 19.7514 7.55016 19.75Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </ShareNetwork>
              </div>
              <div>
                <span class="text-lg font-bold text-[#9DCAFF]"
                  >{{
                    formatDate(
                      store?.about_us_meet_new_articles?.attributes?.date
                    )
                  }}
                  <span class="text-[#EAF3FF]"> | Author - Staff Writer</span>
                </span>
              </div>
              <div>
                <span
                  v-html="store?.about_us_meet_new_articles?.attributes?.title"
                  class="md:text-[43px] text-2xl text-white font-normal leading-[1.15]"
                >
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container py-20">
      <div class="flex md:flex-row flex-col gap-10 md:gap-20">
        <div class="md:w-[70%] w-full text-left">
          <div
            v-for="el in store?.about_us_meet_new_articles?.attributes
              ?.paragraphs"
            :key="el"
          >
            <p
              class="font-black-custom text-[24px] text-[#20407C]"
              v-html="el.title"
            ></p>
            <div
              v-html="el.description"
              class="text-[22px] font-normal text-[#000A37] text-left"
            ></div>
            <div class="py-10" v-if="el?.image?.data?.attributes?.url">
              <img :src="el?.image?.data?.attributes?.url" />
            </div>
          </div>
        </div>
        <div class="md:w-[30%] w-full !h-full flex justify-start">
          <span class="relative">
            <img src="assets/Svg/more-page-green.svg" alt="Card More Image" />
            <div class="absolute top-[34%] left-5 right-14 text-white">
              <img src="assets/Svg/message-icon.svg" />
              <br />
              <p class="m-0 font-normal text-[22.5px] line-height-normal">
                Hear more from Stef & Philips, join our mailing list
              </p>
              <br />
              <router-link
                to="/contact"
                class="border border-white px-10 py-3 mt-3 font-bold"
              >
                Learn more
              </router-link>
            </div>
          </span>
        </div>
      </div>
    </div>
    <div
      v-if="
        store?.about_us_meet_new_articles?.attributes?.featured_article?.data
      "
    >
      <FeaturedNewsArticle
        :featuredArticle="
          store?.about_us_meet_new_articles?.attributes?.featured_article?.data
        "
      />
    </div>
  </div>
</template>
<script setup>
import { defineComponent } from "vue";
import { useRoute } from "vue-router";
import { useAppStore } from "../store";
import FeaturedNewsArticle from "../components/FeaturedNewsArticle.vue";
const store = useAppStore();
const route = useRoute();
import moment from "moment";
const websiteUrl = "https://stefphilips.com";
var shareUrl = "";
const shareTitle = "Article";
await useAsyncData("newsDetailContent", async () => {
  store.about_us_meet_new_articles = {};
  await store.aboutUsMeetNewArticles(route.params.slug);
  shareUrl = websiteUrl + route.path;
});
useHead({
  title:
    store.about_us_meet_new_articles?.attributes?.seo?.pageTitle ??
    "Stef & Philips",
  meta: [
    {
      name: "description",
      content:
        store.about_us_meet_new_articles?.attributes?.seo?.metaDescription,
    },
    {
      name: "title",
      content: store.about_us_meet_new_articles?.attributes?.seo?.metaTitle,
    },
    {
      name: "image",
      content:
        store.about_us_meet_new_articles?.attributes?.seo?.metaImage?.data
          ?.attributes?.url,
    },
  ],
});
const imageUrl =
  store.about_us_meet_new_articles?.attributes?.header_image?.data?.attributes
    ?.url;
const formatDate = (date) => {
  return moment(date).format("Do MMMM YYYY");
};
const shareOnFacebook = () => {
  // return this.$route.path;
  // Logic to share on Facebook
};
const navigation = {
  solutions: [
    { name: "Marketing", href: "#" },
    { name: "Analytics", href: "#" },
    { name: "Commerce", href: "#" },
    { name: "Insights", href: "#" },
  ],
  support: [
    { name: "Pricing", href: "#" },
    { name: "Documentation", href: "#" },
    { name: "Guides", href: "#" },
    { name: "API Status", href: "#" },
  ],
  company: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Partners", href: "#" },
  ],
  legal: [
    { name: "Claim", href: "#" },
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
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
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
    {
      name: "GitHub",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "YouTube",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
  ],
};
</script>
<style scoped>
.bgImg {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.line-height-normal {
  line-height: normal;
}
</style>
