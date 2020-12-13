<template>
  <header>
    <h1 :to="'/pms/dashboard'"><router-link :to="'/pms/dashboard'" class="logo">BNK PROJECT MANAGE</router-link></h1>
    <div class="header-menu ico-menu">
      <router-link :to="'/login'" class="btn-login w3-right">로그인</router-link>
      <a href="#" class="btn-logout w3-right w3-hide">로그아웃</a>
      <a href="#" class="btn-config w3-right w3-text-light-grey-blue"
        >환경설정</a
      >
    </div>
  </header>
</template>
<script>
</script>