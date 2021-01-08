<template>
  <div class="login">
    <div class="title">
      欢迎您的登录
    </div>
    <van-form @submit="onSubmit">
        <!-- name是values中的值 -->
      <van-field
        v-model="state.username"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px">
          <van-button type="primary" block native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>
<script>
import { defineComponent, reactive } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const state = reactive({
      username: '',
      password: ''
    });

    const router = useRouter();
    const onSubmit = (values) => {
      router.push('/')
    };
    return {
      state,
      onSubmit
    };
  }
});
</script>
<style lang='less' scoped>
.login{
  padding: 40px 0;
}
</style>
