<template>
  <div class="home">
    <!-- 路由 -->
    <router-view />
    <!-- navbar -->
    <van-tabbar route>
      <van-tabbar-item to='/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to='/my-loan' icon="home-o">我的贷款</van-tabbar-item>
      <van-tabbar-item to='personal' icon="search">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
// 好像不能使用箭头函数的形式引入了，坑，这样需要封装一层才好使
// const Button = defineAsyncComponent(() => import('../components/Button.vue'));

export default defineComponent({
  // components: {  },
  setup() {
    const active = ref(0);
    // 必须有返回值，否则会报错
    return {
      active
    };
  }
});
</script>
