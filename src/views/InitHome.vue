<template>
  <div class="init-home">
    <!-- 初始首页 -->
    <div class="banner">
      <!-- 背景图片 -->
      <img src="../assets/images/banner.png"  />
    </div>
    <div class="content">
      <!-- 主要内容 -->
      <div class="top">
        <img src="../assets/images/top.png"  />
      </div>
      <div class="middle">
        <div class="middle-content">
          <div class="money">500000</div>
          <div>
            <van-button type="primary" round block @click="handleApply">
              立即申请
            </van-button>
          </div>
        </div>
      </div>
      <div class="bottom">
        <img src="../assets/images/bottom.png"  />
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    const handleApply = () => {
      router.push('/apply-list');
    };
    return { handleApply };
  }
});
</script>

<style lang='less' scoped>
.init-home {
  position: relative;
  min-height: 100vh;
  background-color: #ec2726;
}
.banner {
  img {
    display: block;
    width: 100%;
    height: 400px;
  }
}
.content {
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  bottom: 0;
  .top {
    height: 50px;
    text-align: center;
    img {
      width: 100%;
    }
  }
  .middle {
    //  height: 100px;
    padding: 0 35.5px 0 34.5px;
    .middle-content {
      background-color: #fff;
      height: 100px;
      padding: 10px 20px;
    }
  }
  .bottom {
    height: 50px;
    text-align: center;
    margin-top: -3px;
    img {
      width: 100%;
    }
  }
}
</style>
