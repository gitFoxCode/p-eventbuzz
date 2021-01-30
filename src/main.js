import { createApp } from "vue";
import App from "./App.vue";
import SvgIcon from '@/components/SvgIcon.vue';
import SvgSprite from '@/components/SvgSprite.vue';
import VueCountdown from '@chenfengyuan/vue-countdown';


createApp(App)
  .component('svg-sprite', SvgSprite)
  .component('svg-icon', SvgIcon)
  .component(VueCountdown.name, VueCountdown)
  .mount("#app");