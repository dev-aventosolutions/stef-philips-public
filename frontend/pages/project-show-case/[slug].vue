<template>
    <div>
        <!--****** breadCum ******-->
        <div class="h-[40px] w-full bl flex justify-center nav-bar-tranparent">
            <nav class="container h-full mx-auto flex items-center justify-start gap-3 inner lg:pl-[15px]">
                <div exact-active-class="exact-active" class="text-white font-bold text-sm font-bold-custom text-[14px]">
                    <router-link to="/">Home</router-link>
                </div>
                <i class="pi pi-angle-right font-bold text-white"></i>
                <div exact-active-class="exact-active" class="text-white font-bold text-sm font-bold-custom text-[14px]">
                    <router-link to="/housing-partners">Housing partners</router-link>
                </div>
                <i class="pi pi-angle-right font-bold text-white"></i>
                <div exact-active-class="exact-active" class="text-white font-bold text-sm font-bold-custom text-[14px]">
                    <router-link to="/our-projects">Our projects</router-link>
                </div>
                <i class="pi pi-angle-right font-bold text-white"></i>

                <div exact-active-class="exact-active" class="text-white font-bold text-sm font-bold-custom text-[14px]">
                    <router-link to="/">Project template</router-link>
                </div>
            </nav>
        </div>
        <div class="container mx-auto" v-if="Object.keys(store?.project_detail).length">
            <div class="py-10 flex justify-start">
                <!--*******Header******-->
                <div class="flex flex-col !gap-2">
                    <span class=" font-bold md:text-[38px] text-[24px] text-[#20407c]">
                        Project
                        <span v-html="store?.project_detail?.title" class="font-light">
                        </span>
                    </span>
                    <span class=" font-light text-xl   text-[#20407c]">{{ store.project_detail?.location }}&nbsp;|<span
                            v-html="store.project_detail?.units" class="font-light">
                        </span></span>
                </div>

            </div>
            <!--*******Hero Img******-->
            <div class="min-h-full w-full">
                <img :src="store.project_detail?.image?.data?.attributes?.url" />
            </div>



            <!--*****Textual Section*****-->
            <div class="grid grid-cols-12 md:gap-10 gap-5 justify-between py-5" v-if="store?.project_detail?.paragraph">
                <div v-for="(para, index) in store?.project_detail?.paragraph"
                    class="md:col-span-12 col-span-12 text-justify">
                    {{ para?.description }}
                </div>
            </div>



            <!--*****Key Stats*****-->
            <div class="py-10" v-if="store?.project_detail?.key_stat_listing.length">
                <div class="flex flex-col gap-3 px-0">
                    <span class="font-bold md:text-[38px] text-[24px] text-[#20407c]">Key stats <span class="font-light">
                            for
                            this
                            project</span></span>
                    <div class="!py-1">
                        <!--stat 1-->
                        <div class="card generic-slider">
                            <Carousel :value="store?.project_detail?.key_stat_listing" :numVisible="4" :numScroll="4"
                                :responsiveOptions="keyStatsResponsiveOptions">
                                <template #item="keyStat">
                                    <div class="">
                                        <img :src="keyStat.data?.image?.data?.attributes?.url" width="70.931"
                                            height="79.021" />
                                        <h3 class="text-[#20407c] font-bold text-base">{{ keyStat?.data?.title }}</h3>
                                        <h3
                                            class="font-bold text-lg whitespace-nowrap text-ellipsis overflow-hidden md:w-auto w-16">
                                            {{
                                                keyStat?.data?.description }}</h3>
                                    </div>
                                </template>
                            </Carousel>
                        </div>
                    </div>
                </div>

            </div>
            <!--*****Carousel*****-->
            <div class="py-10">
                <div class="card generic-slider" v-if="store.project_detail?.carousel?.length">
                    <Carousel :value="store.project_detail?.carousel" :numVisible="3" :numScroll="3"
                        :responsiveOptions="responsiveOptions">
                        <template #item="card">


                            <div class="m-[0.6rem]">
                                <img v-if="card.data?.image?.data" class="w-full lg:h-[300px] mb-[20px]"
                                    :src="card?.data?.image?.data?.attributes?.url" alt />
                                <div v-else
                                    class="border-1surface-border border border-round text-center text-black py-20 px-10 lg:h-[300px] mb-[20px] bg-slate-200">
                                </div>
                                <h3 class="font-black-custom text-[18px]">
                                    {{ card?.data?.title }}
                                </h3>
                                <p class="font-regular-custom text-[16px]">
                                    {{ card?.data?.description }}
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



            <!--Video Player-->
            <!-- <div class="pb-10" >
        <div class="w-full flex justify-center flex-col">
          <div class="video-player" >
            <vimeo-player></vimeo-player>
          </div>
          <img src="../assets/Svg/BlueVedio.svg" alt="video" />
        </div>
      </div> -->
            <div class="container  mt-[50px] pb-[30px]" v-if="store?.project_detail?.video_url">
                <div class="w-full  flex justify-center flex-col">
                    <div class="video-player">
                        <ClientOnly>
                            <vimeo-player :video-id='store?.project_detail?.video_url'></vimeo-player>
                        </ClientOnly>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

import { useRoute } from "vue-router";
import { useAppStore } from "../store";
import { onBeforeMount, onMounted, ref } from "vue";
import Loader from "../components/loader.vue";
const route = useRoute() // Import the App component
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

const keyStatsResponsiveOptions = ref([
    {
        breakpoint: "1199px",
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: "991px",
        numVisible: 3,
        numScroll: 3,
    },
    {
        breakpoint: "767px",
        numVisible: 3,
        numScroll: 3,
    },
]);

await useAsyncData('ProjectDetailContent', async () => {
    return await store.ourProjectDetail(route.params.slug)
})


</script>
<style>
.p-carousel .p-carousel-indicators .p-carousel-indicator {
    background-color: #20407C;
    color: #20407C
}

.generic-slider .p-carousel .p-carousel-container .p-link {

    background-color: #00000033 !important;
    color: #20407C
}

.generic-slider .p-carousel .p-carousel-container .p-link.p-disabled {
    background-color: #00000033 !important;
    color: #20407C
}

.generic-slider .p-carousel .p-carousel-container .p-link {
    background: #00000033 !important;
    color: #20407C
}

.generic-slider .p-carousel .p-carousel-container .p-link:hover {
    background: #00000033 !important;
    color: #20407C
}
</style>