<template>
  <div class="login">
    <div class="title">
      欢迎您的登录
    </div>
    <van-form @submit="onSubmit">
        <!-- name是values中的值 -->
      <van-field
        v-model="state.username"
        label="手机号"
        placeholder="手机号"
        :maxlength="11"
        :rules="[{ required: true, message: '请输入手机号' }]"
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
import { loginReq } from '@/api/login'
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const state = reactive({
      username: '',
      password: ''
    });

    const router = useRouter();

    const onSubmit = async (values) => {
       const res = await loginReq({ ...values });
       console.log(res)
       router.push(`/`)
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
