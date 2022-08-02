import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// common.css (several defined CSS variables)
import './css/common.css'
// media queries
import './css/media.css'

// vue-tippy
import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'

// driver.js
import 'driver.js/dist/driver.min.css'

// ElementPlus ElSwitch
import { ElSwitch } from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

// import { ElNotification } from "element-plus"
// app.config.globalProperties.$ElNotification = ElNotification
// use like this in component A.vue
// import { getCurrentInstance } from "vue";
// const { proxy } = getCurrentInstance();
// const ElNotification = proxy.$ElNotification;

// ElNotification: https://element-plus.org/zh-CN/component/notification.html
// global properties https://vuejs.org/api/application.html#app-config-globalproperties
// getCurrentInstance: https://v3.cn.vuejs.org/api/composition-api.html#getcurrentinstance

// Global Registration: https://vuejs.org/guide/components/registration.html#global-registration
// common components registration
import BottomRightNav from "@/components/common/BottomRightNav.vue";
import Controls from "@/components/common/Controls.vue";
import Heading from "@/components/common/Heading.vue";
import Note from "@/components/common/Note.vue";
import Prism from "@/components/common/Prism.vue";
import TOC from "@/components/common/TOC.vue";
app.component('BottomRightNav', BottomRightNav).component('Controls', Controls).component('Heading', Heading).component('Note', Note).component('Prism', Prism).component('TOC', TOC).component('ElSwitch', ElSwitch);
// now that component above can be use anywhere



// VueTippy, ElementPlus
app.use(store).use(router).use(VueTippy).mount('#app')