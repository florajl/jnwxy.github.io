<template>
  <div class="home">
    <div class="top_bar">
      <img class="logo" src="@/assets/imgs/logo.png" />
      <span class="title">学生中心</span>
    </div>
    <el-input v-model="input1" style="width: 100%; height: 42px" placeholder="请输入学生编号" class="input-with-select" clearable>
      <template #append>
        <el-button :icon="Search" @click="handleSearch" />
      </template>
    </el-input>
    <el-carousel height="121px" indicator-position="none" arrow="always" motion-blur>
      <el-carousel-item v-for="item in imgList" :key="item">
        <img style="width: 100%; height: 100%" :src="item" alt="" />
      </el-carousel-item>
    </el-carousel>
    <div class="s1-left">
      <div class="xw-pic">
        <div class="swiper-container swiper2 swiper-container-fade swiper-container-initialized swiper-container-horizontal swiper-container-ios">
          <div class="swiper-wrapper" style="transition-duration: 0ms">
            <div class="swiper-slide swiper-slide-duplicate-active" data-swiper-slide-index="0" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-364px, 0px, 0px)">
              <div class="pic">
                <a title="青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演" id="a2"></a>
              </div>
              <div class="txt">
                <a href="http://wen.ujn.edu.cn/info/1108/17314.htm" target="_self" title="青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演">青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演</a>
              </div>
              <div class="shijian">
                <b>15</b>
                <p>2024-10</p>
              </div>
            </div>

            <div class="swiper-slide" data-swiper-slide-index="1" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-728px, 0px, 0px)">
              <div class="pic">
                <a title="济南大学文学院赴济南广播电视台进行调研交流活动" id="a3"></a>
              </div>
              <div class="txt"><a href="http://wen.ujn.edu.cn/info/1108/17214.htm" target="_self" title="济南大学文学院赴济南广播电视台进行调研交流活动">济南大学文学院赴济南广播电视台进行调研交流活动</a></div>
              <div class="shijian">
                <b>10</b>
                <p>2024-10</p>
              </div>
            </div>

            <div class="swiper-slide" data-swiper-slide-index="2" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1092px, 0px, 0px)">
              <div class="pic">
                <a title="文学院举行2024级新生见面会暨开学第一课" id="a4"></a>
              </div>
              <div class="txt"><a href="http://wen.ujn.edu.cn/info/1108/17144.htm" target="_self" title="文学院举行2024级新生见面会暨开学第一课">文学院举行2024级新生见面会暨开学第一课</a></div>
              <div class="shijian">
                <b>29</b>
                <p>2024-09</p>
              </div>
            </div>

            <div class="swiper-slide" data-swiper-slide-index="3" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1456px, 0px, 0px)">
              <div class="pic">
                <a title="文学院召开新学期班主任工作会暨心理健康教育培训会" id="a5"></a>
              </div>
              <div class="txt"><a href="http://wen.ujn.edu.cn/info/1108/17104.htm" target="_self" title="文学院召开新学期班主任工作会暨心理健康教育培训会">文学院召开新学期班主任工作会暨心理健康教育培训会</a></div>
              <div class="shijian">
                <b>20</b>
                <p>2024-09</p>
              </div>
            </div>

            <div class="swiper-slide" data-swiper-slide-index="4" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-1820px, 0px, 0px)">
              <div class="pic">
                <a title="弘扬教育家精神，勇担新时代使命—文学院举行庆祝第40个教师节座谈会暨圣儒教育奖教金颁发仪式" id="a6"></a>
              </div>
              <div class="txt"><a href="http://wen.ujn.edu.cn/info/1108/17074.htm" target="_self" title="弘扬教育家精神，勇担新时代使命—文学院举行庆祝第40个教师节座谈会暨圣儒教育奖教金颁发仪式">弘扬教育家精神，勇担新时代使命—文学院举行庆祝第40个教师节座谈会暨圣儒教育奖教金颁发仪式</a></div>
              <div class="shijian">
                <b>11</b>
                <p>2024-09</p>
              </div>
            </div>

            <div class="swiper-slide swiper-slide-prev swiper-slide-duplicate-next" data-swiper-slide-index="5" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-2184px, 0px, 0px)">
              <div class="pic">
                <a title="学校领导走访慰问我院教师代表" id="a7"></a>
              </div>
              <div class="txt"><a href="http://wen.ujn.edu.cn/info/1108/17054.htm" target="_self" title="学校领导走访慰问我院教师代表">学校领导走访慰问我院教师代表</a></div>
              <div class="shijian">
                <b>10</b>
                <p>2024-09</p>
              </div>
            </div>

            <!-- <div class="swiper-slide swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style="width: 364px; transition-duration: 0ms; opacity: 1; transform: translate3d(-2548px, 0px, 0px)">
              <div class="pic">
                <a title="青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演" id="a8"></a>
              </div>
              <div class="txt"><div title="青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演">青春是最美的“桃花源”——文学院青笋剧团2024年度话剧《暗恋桃花源》成功上演</div></div>
              <div class="shijian">
                <b>15</b>
                <p>2024-10</p>
              </div>
            </div> -->
          </div>

          <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
        </div>
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
        <div class="footer-right">
          <a href="https://www.ujn.edu.cn/">济大首页</a>
          <a href="0C066284-6FD9-498E-B30A-F5447BF31175.gif">济大文苑</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search } from '@element-plus/icons-vue'
const router = useRouter()
const input1 = ref('')

const imgList = [new URL('@/assets/imgs/banner1.jpg', import.meta.url).href, new URL('@/assets/imgs/banner2.jpg', import.meta.url).href, new URL('@/assets/imgs/banner3.jpg', import.meta.url).href, new URL('@/assets/imgs/banner4.jpg', import.meta.url).href, new URL('@/assets/imgs/banner5.jpg', import.meta.url).href, new URL('@/assets/imgs/banner6.jpg', import.meta.url).href, new URL('@/assets/imgs/banner7.jpg', import.meta.url).href]

const info = ref({})

// function handleDynamic(index) {
//   router.push(`/dynamic?index=${index}`)
// }
const handleSearch = () => {
  if (input1.value) {
    router.push(`/detail?id=${input1.value}`)
  } else {
    ElMessage.wraning('请输入学生编号!')
  }
}
const initSwiper = () => {
  const mySwiper = new Swiper('.swiper2', {
    autoplay: true,
    loop: true, //循环必要
    speed: 300, //过场动画时间，越大越慢，如2000=2秒切换完，默认300
    effect: 'fade' //切换特效
  })
  mySwiper.el.onmouseover = function () {
    //必要 鼠标放上暂停轮播
    mySwiper.autoplay.stop()
  }
  mySwiper.el.onmouseleave = function () {
    mySwiper.autoplay.start()
  }
}
onMounted(() => {
  initSwiper()
})
</script>

<style scoped lang="less">
.home {
  position: relative;
  overflow-x: hidden;
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
}

//   /*底部版权*/
.footer {
  overflow: hidden;
  width: 100%;
  margin: 0 auto;
  background: url(@/assets/imgs/footbg.jpg) no-repeat 50% 0%;
  height: 230px;
  padding-left: 20px;
  box-sizing: border-box;
  overflow: hidden;
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
/*section1左侧  学院动态左侧图片-----------------------------*/
.s1-left {
  margin: 50px 0;
}
.xw-pic {
  width: 100%;
}
.swiper2.swiper-container {
  height: 400px;
  padding: 5px;
}
.swiper2 .swiper-slide {
  position: relative;
  height: 100%;
}
.swiper2 .pic {
  height: 315px;
  position: relative;
  overflow: hidden;
  border-right: 3px solid #8c050b;
}
.swiper2 .pic a {
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100%;
  display: block;
  -webkit-transition: all 0.4s;
  -o-transition: all 0.4s;
  transition: all 0.4s;
}
.swiper2 .txt {
  height: 80px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  border-right: 3px solid #8c050b;
}
.swiper2 .txt a {
  display: block;
  // height: 30px;
  line-height: 30px;
  padding: 0 30px;
  box-sizing: border-box;
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding-top: 35px;
}
.swiper2 .txt:hover a {
  color: #8c050b;
}
.swiper2 .shijian {
  position: absolute;
  left: 30px;
  bottom: 60px;
  width: 60px;
  height: 46px;
  padding: 10px 5px;
  // box-sizing: border-box;
  background-color: #8c050b;
  color: #ffffff;
  text-align: center;
}
.swiper2 .shijian b {
  display: block;
  width: 100%;
  font-size: 20px;
  height: 25px;
  margin-bottom: 5px;
  font-family: Arial, Helvetica, sans-serif;
  position: relative;
}
.swiper2 .shijian b:after {
  content: '';
  width: 50px;
  height: 1px;
  background-color: #ffffff;
  position: absolute;
  bottom: 0;
  left: 5px;
}
.swiper2 .shijian p {
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

@media screen and (max-width: 1000px) {
  .s1-left {
    width: 44%;
    // float: left;
    margin-right: 2%;
  }
}
@media screen and (max-width: 800px) {
  .s1-left {
    width: 100%;
    // float: left;
    margin-right: 0;
  }
}
@media screen and (max-width: 500px) {
  .swiper2.swiper-container {
    height: 365px;
    padding: 5px;
  }
  .swiper2 .pic {
    height: 280px;
  }
}

#a1 {
  background: url('../../assets/imgs/1.jpg') no-repeat center;
  background-size: cover;
}
#a2 {
  background: url('@/assets/imgs/1.jpg') no-repeat center;
  background-size: cover;
}
#a3 {
  background: url('@/assets/imgs/2.png') no-repeat center;
  background-size: cover;
}
#a4 {
  background: url('@/assets/imgs/3.jpg') no-repeat center;
  background-size: cover;
}
#a5 {
  background: url('@/assets/imgs/4.jpg') no-repeat center;
  background-size: cover;
}
#a6 {
  background: url('@/assets/imgs/5.jpg') no-repeat center;
  background-size: cover;
}
#a7 {
  background: url('@/assets/imgs/6.jpg') no-repeat center;
  background-size: cover;
}
a {
  text-decoration: none;
  color: #000;
}
</style>
