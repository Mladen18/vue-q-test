import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// COMPONENTS
import BaseLink from "./components/ui/BaseLink.vue";

const app = createApp(App);

app.component("BaseLink", BaseLink);
app.use(router);

app.mount("#app");
