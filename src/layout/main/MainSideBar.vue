<template>
  <nav>
    <div class="tab-menu">
      <router-link
        class="tablink"
        :class="[menu.class]"
        v-for="menu in menus"
        :key="menu.name"
        :to="`${menu.link}`"
        exact
        >{{ menu.name }}</router-link
      >
    </div>
  </nav>
</template>
<script>
export default {
  data: () => ({
    menus: [
      {
        name: "전체메뉴",
        link: "/pms/all",
        class: "tab-allmenu",
      },
      {
        name: "홈",
        link: "/pms/dashboard",
        class: "tab-home",
      },
      {
        name: "백로그",
        link: "/pms/backlog",
        class: "tab-meet",
      },
      {
        name: "보드",
        link: "/pms/board",
        class: "tab-meet",
      },
      {
        name: "캘린더",
        link: "/pms/calendar",
        class: "tab-meet",
      },
      {
        name: "이슈",
        link: "/pms/issues",
        class: "tab-meet",
      },
      {
        name: "릴리즈",
        link: "/pms/release",
        class: "tab-meet",
      },
    ],
  }),
};
</script>
<style scoped>

</style>