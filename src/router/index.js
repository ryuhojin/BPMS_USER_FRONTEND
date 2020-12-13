import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    component: () =>
      import(/* webpackChunkName: "common" */ "@/views/common/Login.vue"),
  },
  {
    path: "/pms",
    redirect: "/pms/dashboard",
    component: () =>
      import(/* webpackChunkName: "common" */ "@/layout/MainLayout.vue"),
    children: [
      {
        path: "all",
        component: () =>
          import(/* webpackChunkName: "common" */ "@/views/common/Total.vue"),
      },
      {
        path: "dashboard",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/common/DashBoard.vue"
          ),
      },
      {
        path: "backlog",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/backlog/Backlog.vue"
          ),
      },
      {
        path: "board",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/board/Board.vue"
          ),
      },
      {
        path: "calendar",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/calendar/Calendar.vue"
          ),
      },
      {
        path: "issues",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/issues/Issues.vue"
          ),
      },
      {
        path: "settings",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/settings/Settings.vue"
          ),
      },
      {
        path: "release",
        component: () =>
          import(
            /* webpackChunkName: "common" */ "@/views/pms/release/Release.vue"
          ),
      },
    ],
  },
];

export default new VueRouter({
  mode: "history",
  routes,
  scrollBehavior,
});

function scrollBehavior() {
  return { x: 0, y: 0 };
}
