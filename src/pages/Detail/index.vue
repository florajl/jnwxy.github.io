<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const arr = [
  {
    name: '王昊哲',
    age: 24,
    mz: '汉族',
    zzmm: '中共党员',
    jg: '山东省潍坊市坊子区凤凰街道四中家园',
    ssxy: ' 历史与旅游学院',
    zy: '历史系近代史研究方向',
    xsbm: '10124931106',
    pic: ''
  }
]

const info = ref({})
onMounted(() => {
  const value = arr.find(el => el.xsbm == route.query.id)
  if (value) {
    info.value = value
  } else {
    ElMessage.error('非本人操作!')
    info.value = {}
  }
})
</script>

<template>
  <div class="detail">
    <div class="top_bar">
      <img class="logo" src="@/assets/imgs/logo.png" />
      <span class="title">学生中心</span>
    </div>
    <div class="info">
      <div class="item">
        <span class="label">姓名：</span>
        <span class="value">{{ info.name }}</span>
      </div>
      <div class="item">
        <span class="label">民族：</span>
        <span class="value">{{ info.mz }}</span>
      </div>
      <div class="item">
        <span class="label">政治面貌：</span>
        <span class="value">{{ info.zzmm }}</span>
      </div>
      <div class="item">
        <span class="label">年龄：</span>
        <span class="value">{{ info.age }}</span>
      </div>
      <div class="item">
        <span class="label">家庭住址：</span>
        <span class="value">{{ info.jg }}</span>
      </div>
      <div class="item">
        <span class="label">所属学院：</span>
        <span class="value">{{ info.ssxy }}</span>
      </div>
      <div class="item">
        <span class="label">专业：</span>
        <span class="value">{{ info.zy }}</span>
      </div>
      <div class="item">
        <span class="label">学生编码：</span>
        <span class="value">{{ info.xsbm }}</span>
      </div>
      <div class="item pic" v-if="info.xsbm">
        <img src="@/assets/imgs/stu/1.jpg" class="stu_img" />
      </div>
    </div>
    <div class="footer">
      <div class="block">
        <div class="footer-left">
          <div class="foot-logo"><img src="@/assets/imgs/logo.png" /></div>
          <div class="contact">
            <p><span style="font-family: 微软雅黑, Microsoft YaHei; font-size: 14px">地址：山东省济南市南辛庄西路336号 文学院</span></p>
            <p><span style="font-family: 微软雅黑, Microsoft YaHei; font-size: 14px">电话：0531-82769210&nbsp; 邮编：250022</span></p>
            <p><span style="font-family: 微软雅黑, Microsoft YaHei; font-size: 14px">Copyright 济南大学文学院 All rights reserved.2024</span></p>
            <p><span style="font-family: 微软雅黑, Microsoft YaHei; font-size: 14px"></span></p>
          </div>
        </div>
        <!-- <div class="footer-right">
          <a href="https://www.ujn.edu.cn/" target="_blank">济大首页</a>
          <a href="0C066284-6FD9-498E-B30A-F5447BF31175.gif" target="_blank">济大文苑</a>
        </div> -->
      </div>
    </div>
  </div>
</template>

<style scoped lang="less">
.detail {
  overflow-x: hidden;
}
.info {
  padding: 20px;
  box-sizing: border-box;
  position: relative;
  margin-bottom: 80px;
  .item {
    line-height: 50px;
    font-size: 22px;
    color: #333;
    &.pic {
      position: absolute;
      right: 20px;
      top: 24px;
      .stu_img {
        width: 100px;
        height: 130px;
      }
    }
  }
}
.top_bar {
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  line-height: 60px;
  background: url('@/assets/imgs/topbg.jpg') no-repeat center;
  background-size: 100% 100%;
  .logo {
    width: 200px;
    height: 38px;
    margin-left: 10px;
  }
  .title {
    color: #d8acae;
    font-size: 26px;
    margin-left: 10%;
    font-style: italic;
    font-weight: bold;
    color: transparent;
    background-image: linear-gradient(180deg, #fff, #8d090b);
    background-clip: text;
    transform: skewX(-20deg);
    letter-spacing: 4px;
  }
}
/*底部版权*/
.footer {
  width: 100%;
  margin: 0 auto;
  background: url(@/assets/imgs/footbg.jpg) no-repeat 50% 0%;
  background-size: cover;
  // height: 230px;
  padding-left: 20px;
  box-sizing: border-box;
}
.footer .footer-left {
  float: left;
}
.footer .foot-logo {
  padding-top: 50px;
}
.footer .foot-logo img {
  width: 280px;
}
.footer .contact {
  margin-top: 10px;
}
.footer .contact p {
  font-size: 14px;
  line-height: 2;
  color: #ffffff;
}
.footer .footer-right {
  float: right;
  padding-top: 50px;
}
.footer .footer-right a {
  display: block;
  color: #ffffff;
  line-height: 2;
  font-size: 16px;
}
@media screen and (max-width: 540px) {
  .footer {
    height: 300px;
    margin-top: 0;
  }
  .footer .footer-left {
    float: left;
    width: 100%;
  }
  .footer .foot-logo {
    padding-top: 20px;
    text-align: center;
  }
  .footer .foot-logo img {
    width: 200px;
  }
  .footer .contact {
    margin-top: 10px;
    padding: 0 0;
  }
  .footer .contact p {
    font-size: 14px;
  }

  .footer .footer-right {
    float: right;
    width: 100%;
    padding-top: 10px;
    margin-top: 10px;
    font-size: 14px;
    border-top: 1px solid #ad4e53;
  }
  .footer .footer-right a {
    display: block;
    color: #ffffff;
    line-height: 2;
    font-size: 14px;
  }
}
</style>
