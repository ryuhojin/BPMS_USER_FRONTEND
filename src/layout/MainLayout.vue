<template>
  <div id="wrap">
    <main-header />
    <main-side-bar />
    <main-body />
  </div>
</template>
<script>
import MainSideBar from "./main/MainSideBar";
import MainHeader from "./main/MainHeader";
import MainBody from "./main/MainBody";
export default {
  name: "MainLayout",
  components: {
    MainSideBar,
    MainHeader,
    MainBody,
  },
};
</script>