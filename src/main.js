import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

// import the fontawesome core
import { library } from "@fortawesome/fontawesome-svg-core";

// import fontawesome icon component
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// import config so we can set a default style
import { config } from "@fortawesome/fontawesome-svg-core";

import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

library.add(faBars, faX);


// add FontAwesomeIcon to the Vue component
createApp(App)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");

