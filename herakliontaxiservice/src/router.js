import { createRouter, createWebHistory } from "vue-router";
import ContactPage from "./components/ContactPage.vue";
import RatePage from "./components/RatePage.vue";
import NotFound from "./components/NotFound.vue";
import HomePage from "./components/HomePage.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomePage},
    { path: "/contact", component: ContactPage },
    { path: "/rates", component: RatePage },
    { path: "/:notFound(.*)", component: NotFound },
  ],
});

export default router;
