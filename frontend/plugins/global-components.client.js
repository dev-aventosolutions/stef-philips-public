import VimeoPlayer from 'vue-vimeo-player';
import VueSocialSharing from 'vue-social-sharing';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.vueApp.use(VimeoPlayer);
    nuxtApp.vueApp.use(VueSocialSharing);
})