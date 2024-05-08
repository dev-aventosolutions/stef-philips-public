<template>
  <div>
    <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
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
          <router-link to="/about-us">About us</router-link>
        </div>
        <i class="pi pi-angle-right text-white"></i>
        <div
          exact-active-class="exact-active"
          class="text-white font-semibold text-sm font-bold-custom text-[14px]"
        >
          <router-link to="/about-us/meet-the-team">Meet the team</router-link>
        </div>
      </nav>
    </div>

    <div v-if="Object.keys(store.about_us_meet_teams).length">
      <!-- -->
      <BannerText :bannerContent="store.about_us_meet_teams" />

      <div
        class="bg-second min-h-[600px] text-white w-full pb-[50px] md:pb-[0]"
      >
        <div class="container lg:py-20">
          <div
            class="flex justify-between flex-wrap items-center py-8 mx-[0.6rem]"
          >
            <h2 class="text-white font-light-custom text-[36px]">
              Our senior team
            </h2>
            <!-- <Button value="Meet the full team" link="/about-us/meet-the-team" addClass="bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 ring-2 ring-white text-white md:px-[35px]"></Button> -->
          </div>
          <div class="card generic-slider">
            <Carousel
              :value="store.about_us_meet_teams?.our_senior_team"
              :numVisible="3"
              :numScroll="3"
              :responsiveOptions="responsiveOptions"
            >
              <template #item="card">
                <div class="m-[0.6rem]">
                  <img
                    v-if="card.data?.image?.data"
                    class="w-full mb-[20px]"
                    :src="card?.data?.image?.data?.attributes?.url"
                    alt
                  />
                  <div
                    v-else
                    class="border-1surface-border border border-round text-center text-black py-20 px-10 lg:h-[300px] mb-[20px] bg-slate-200"
                  ></div>
                  <h3 class="font-black-custom text-[18px]">
                    {{ card?.data?.name }}
                  </h3>
                  <p class="font-regular-custom text-[16px]">
                    {{ card?.data?.designation }}
                  </p>
                </div>
                <!-- <div class="m-2 px-[30px] pt-[40px] pb-3 lg:h-[380px] bg-white">
                <div class="text-[#20407C]">
                  <img class="w-[55px] pb-5" :src="card?.data?.image?.data?.attributes?.url" alt />
                  <h4 class="mb-3 font-black-custom text-[18px]">
                    {{ card?.data?.name }}
                  </h4>
                  <p class="mt-0 mb-3 text-[16px]">
                    {{ card?.data?.designation }}
                  </p>
                </div>
              </div> -->
              </template>
            </Carousel>
          </div>
        </div>
      </div>

      <!-- -->
      <div class="w-full flex justify-around align-center">
        <div class="container my-10">
          <div
            class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between"
          >
            <MeetTheTeamCard
              v-for="card in store.about_us_meet_teams.team?.slice(0, 3)"
              :key="card"
              :Card="card"
            />
          </div>
        </div>
      </div>

      <div class="py-20 container mwd:px-[15px] px-0">
        <Testimonial :Card="store.about_us_meet_teams.ceo_card" />
      </div>

      <div class="w-full flex justify-around align-center">
        <div class="container my-10">
          <div
            class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between"
          >
            <MeetTheTeamCard
              v-for="card in store.about_us_meet_teams.team?.slice(3)"
              :key="card"
              :Card="card"
            />
          </div>
        </div>
      </div>
      <div
        class="w-full h-auto bg-[#20407c] flex items-center relative md:mt-[200px] mt-[70px]"
      >
        <div
          class="container min-h-[315px] mx-auto p-3 md:translate-y-[0px] -translate-y-[100px]"
        >
          <div class="grid md:grid-cols-2">
            <div class="md:-translate-y-[131px] md:order-last">
              <div class="contentImg"></div>
            </div>
            <div class="">
              <h2 class="text-[36px] text-white font-light-custom mt-16">
                <strong class="font-black-custom">Community</strong> is what we
                all <br />
                have in common
              </h2>
              <div class="flex flex-wrap gap-4 my-3">
                <Button
                  link="/careers"
                  value="Careers"
                  addClass="bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 text-white border border-white font-bold-custom px-[30px]"
                ></Button>
                <!-- <Button link="/about-us/meet-the-team" value="Meet the team" addClass="bg-[#000000]/10 hover:bg-[#000000]/30 focus:bg-[#000000]/50 text-white border border-white font-bold-custom"></Button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--
   <div class="py-20 container md:px-[15px] px-0" v-if="store.about_us_meet_teams.about_us_meet_team_message_2s?.data.length > 0">      
      <Testimonial :Card="store.about_us_meet_teams.about_us_meet_team_message_2s?.data" />
    </div>
    
    <div class="w-full flex justify-around align-center">
      <div class="container my-10">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
          <MeetTheTeamCard v-for="card in store.about_us_meet_teams.about_us_meet_team_team_3s?.data" :key="card" :Card="card" />
        </div>
      </div>
    </div>
    
    <div class="py-20 container md:px-[15px] px-0" v-if="store.about_us_meet_teams.about_us_meet_team_message_3s?.data.length > 0">
      <Testimonial :Card="store.about_us_meet_teams.about_us_meet_team_message_3s?.data" />
    </div>
  
    <div class="w-full flex justify-around align-center">
      <div class="container my-10">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-[24px] justify-between">
          <MeetTheTeamCard v-for="card in store.about_us_meet_teams.about_us_meet_team_team_4s.data" :key="card" :Card="card" />
        </div>
      </div>
    </div>
  -->
    </div>
  </div>
</template>

<script setup>
import MeetTheTeamCard from "@/components/MeetTheTeamCardMeetTheTeam.vue";
import BannerText from "@/components/BannerText.vue";
// import { Icon } from "@iconify/vue";
// import HorizontalCardVue from "@/components/HorizontalCard.vue";
import Testimonial from "@/components/TestimonialMeetTheTeam.vue";
import Button from "@/components/Button.vue";
import { useAppStore } from "@/store/index";
import { onMounted, ref } from "vue";
import loader from "@/components/loader.vue";

const store = useAppStore();
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

await useAsyncData("MainPageContent", async () => {
  return await store.aboutUsMeetTeams();
});
useHead({
  title: store.about_us_meet_teams?.seo?.pageTitle ?? "Stef & Philips",
  meta: [
    {
      name: "description",
      content: store.about_us_meet_teams?.seo?.metaDescription,
    },
    { name: "title", content: store.about_us_meet_teams?.seo?.metaTitle },
    {
      name: "image",
      content: store.about_us_meet_teams?.seo?.metaImage?.data?.attributes?.url,
    },
  ],
});
const card2 = {
  header: "Meet the",
  boldheader: " team",
  img: "@/assets/coffee.png",
  paragraph: `Find out how to report a repair, how long it will`,
  paragraph2: "take and whether its your resposibility or ours",
};
</script>
<style scoped>
.mt {
  margin-top: 10%;
}

.mb {
  margin-bottom: 20%;
}

.relative {
  position: relative;
}

.ml {
  margin-left: 14%;
}

.contentImg {
  background-image: url("@/assets/footimage.png");
  /* background-image: url(@/assets/footimage.png); */
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-position: right;
  width: 100%;
  height: 434.7px;
  /* margin-left: 40%; */
  /* margin-top: 5%; */
  opacity: 90%;
}
</style>
