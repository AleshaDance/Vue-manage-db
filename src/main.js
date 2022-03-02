// import { createApp } from 'vue'
// import App from './App.vue'
// import router from './router'
// import PrimeVue from 'primevue/config'
// // import TabMenu from 'primevue/tabmenu'
// import "primevue/resources/themes/saga-blue/theme.css"
// import "primevue/resources/primevue.min.css"
// import "primeicons/primeicons.css"

// const app = createApp(App);
// app.use(PrimeVue);

// // app.component('TabMenu', TabMenu)
// createApp(App).use(router).mount('#app')

import "primevue/resources/themes/saga-blue/theme.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import {createApp} from 'vue';
import App from './App.vue';
import PrimeVue from 'primevue/config';
import router from './router'
const app = createApp(App);

app.use(PrimeVue)
.use(router);
app.mount('#app');