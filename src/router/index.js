import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Create from "../views/CreatePost.vue";
import Details from "@/views/PostSingleDetails.vue";
import RealTime from "@/views/RealTime.vue";
import Tag from "@/views/Tag.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/create",
    name: "Create",
    component: Create,
  },
  {
    path: "/realtime",
    name: "RealTime",
    component: RealTime,
  },
  {
    path: "/posts/:id",
    name: "Details",
    component: Details,
    props: true,
  },
  {
    // there is no props: true becasuse we are using useRoute inside the component
    path: "/tags/:tag",
    name: "Tag",
    component: Tag,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
