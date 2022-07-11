import { createApp } from 'vue'

import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab,  } from '@fortawesome/free-brands-svg-icons'
import App from './App.vue'
import {MotionPlugin} from '@vueuse/motion'




library.add(fas, fab);
const app = createApp(App)
.component('fa',FontAwesomeIcon)
.use(store)
.use(router)
app.use(MotionPlugin)
.mount('#app');

