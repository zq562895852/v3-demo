<template>
  <div class="home">
    <!-- 路由 -->
    <router-view />
    <!-- navbar -->
  </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    // 必须有返回值，否则会报错
     return {};
  }
})
</script>
