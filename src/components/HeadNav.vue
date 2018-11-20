<template>
  <header class="head-nav">
    <el-row class="head-container">
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="2">
        <div class="logo-container">
          <router-link to="/">
            <span class="title">LOGO</span>
          </router-link>
        </div>
      </el-col>
      <el-col :xs="0" :sm="4" :md="4" :lg="4" :xl="2">
        <div class="welcome-container">
          <span>欢迎回来，</span>
          <span>访客！</span>
        </div>
      </el-col>
      <el-col :xs="10" :sm="8" :md="8" :lg="8" :xl="10">
        <div class="search-container">
          <el-input placeholder="关键字:智能监控、盗窃..." class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
      </el-col>
      <el-col :xs="10" :sm="8" :md="8" :lg="8" :xl="10">
        <div class="info-container">
          <i class="el-icon-question icon-item"></i>
          <i class="el-icon-setting icon-item"></i>
          <!--<img class="userImg" src="" alt="">-->
          <font-awesome-icon class="userImg" icon="user-circle" size="3x" />
          <div class="time">
            <div class="current-date">{{currentdate}}</div>
            <div class="current-time">{{currenttime}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </header>
</template>

<script>
  export default {
    name: 'head-nav',
    data () {
      return {
        currentdate: '',
        currenttime: '',
      }
    },
    beforeMount() {
      this.currentDate()
      this.currentTime()
      setInterval(this.currentDate, 1000)
      setInterval(this.currentTime, 1000)
    },
    methods: {
      currentDate() {
        let currentD = new Date()
        let y = currentD.getFullYear()
        let m = currentD.getMonth() + 1
        let d = currentD.getDate()
        if (m >= 1 && m <= 9) {
          m = "0" + m;
        }
        if (d >= 1 && d <= 9) {
          d = "0" + d;
        }
        this.currentdate = `${y}-${m}-${d}`

      },
      currentTime() {
        let currentD = new Date()
        let h = currentD.getHours()
        let m = currentD.getMinutes()
        let s = currentD.getSeconds()
        if (h >= 0 && h <= 9) {
          h = "0" + h;
        }
        if (m >= 0 && m <= 9) {
          m = "0" + m;
        }
        if (s >= 0 && s <= 9) {
          s = "0" + s;
        }
        this.currenttime = `${h}:${m}:${s}`
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
  .head-nav .head-container .welcome-container {
    color: #eee;
    line-height: 60px;
    font-size: 14px;
  }
  .head-nav .head-container .search-container {
    margin-top: 10px;
  }
  .head-nav .head-container .input-with-select {
    background: #fff;
    border-radius: 5px;
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
  .head-nav .head-container .time {
    float: right;
    color: white;
    font-size: 14px;
    padding: 16px 0;
  }
  .head-nav .el-input__inner {
    border: 1px solid #dcdfe6;
  }
  .head-nav .el-input__inner:focus {
    border: 1px solid #C2D6F2;
  }
</style>
