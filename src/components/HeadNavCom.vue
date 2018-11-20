<template>
  <header class="head-nav">
    <el-row class="head-container">
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="10">
        <div class="logo-container">
          <router-link to="/">
            <span class="title">LOGO</span>
          </router-link>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="2">
        <div class="headline-container">
          <h1><font-awesome-icon class="userImg" icon="user-circle" />{{headNavComData.headline}}</h1>
        </div>
      </el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="10">
        <div class="info-container">
          <i class="el-icon-search icon-item"></i>
          <i class="el-icon-question icon-item"></i>
          <i class="el-icon-setting icon-item"></i>
          <!--<img class="userImg" src="" alt="">-->
          <font-awesome-icon class="userImg" icon="user-circle" size="3x" />
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'head-nav-com',
    props: ['headNavComData'],
    data () {
      return {

      }
    }
  }
</script>


<style>
  .head-nav .head-container {
    width: 100%;
    background: #3A3B6A;
    padding: 0 20px;
  }
  .head-nav .head-container .logo-container .title {
    color: white;
    line-height: 60px;
    font-size: 22px;
  }
  .head-nav .head-container .headline-container {
    line-height: 60px;
    color: #fff;
    font-size: 18px;
    text-align: center;
  }
  .head-nav .head-container .info-container {
    float: right;
  }
  .head-nav .head-container .info-container .userImg {
    width: 32px;
    height: 32px;
    border-radius: 16px;
    color: #fff;
    margin: 0 10px;
  }
  .head-nav .head-container .icon-item {
    font-size: 24px;
    color: white;
    line-height: 60px;
    cursor: pointer;
  }


  @media (max-width: 820px) {
    .head-nav .head-container .headline-container {
      font-size: 14px;
    }
  }
</style>
