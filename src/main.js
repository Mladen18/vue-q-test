import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// GLOBAL COMPONENTS
import BaseLink from "./components/ui/BaseLink.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import TheFooter from "./components/layout/TheFooter.vue";

const app = createApp(App);

// USE COMPONENTS
app.component("BaseLink", BaseLink);
app.component("TheHeader", TheHeader);
app.component("TheFooter", TheFooter);

app.use(router);

app.mount("#app");
