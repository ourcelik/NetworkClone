import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import 'animate.css';
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
library.add(fab);
library.add(fas);
import  './assets/style.css';






import { dom } from "@fortawesome/fontawesome-svg-core";
import router from './router';
dom.watch();
const app =  createApp(App)
app.use(router);
app.mount('#app')
