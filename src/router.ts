import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/",
    component: () => import("./layouts/index.vue"),
    meta: {
      middleware: "auth",
    },
    children: [],
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("./views/dashboard.vue"),
    meta: {
      pageTitle: "dashboard",
      breadcrumbs: "dashboard",
      roles: ["authenticated"],
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./views/about.vue"),
    meta: {
      pageTitle: "about",
      breadcrumbs: "about",
      roles: ["authenticated"],
    },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },
});

// router.beforeEach((to, from, next) => {
//   if (to.meta.middleware == "auth") {
//     next();
//   } else {
//     next();
//   }
// });

export default router;
