import { createRouter, createWebHistory } from "@ionic/vue-router";
import { RouteRecordRaw } from "vue-router";
// import TabsPage from "../views/TabsPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/ligues",
  },
  {
    path: "/ligues",
    component: () => import("@/views/Ligues.vue"),
  },
  {
    path: "/ligues/:id/classement",
    component: () => import("@/views/Classement.vue"),
  },
  {
    path: "/ligues/:id/equipes",
    component: () => import("@/views/Equipes.vue"),
  },
  {
    path: "/equipes/:id",
    component: () => import("@/views/EquipeDetail.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
