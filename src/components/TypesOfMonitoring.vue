<template>
  <div class="types-of-monitoring">
    <el-card class="box-card" body-style="padding: 0;">
      <div class="head">
        <h3><img height="16" :src="require('../views' + this.$route.path + '/images' + this.$route.path + '-icon' + typesOfMoniData.icon + '.png')">&nbsp;{{typesOfMoniData.title}}</h3>
        <div>
          <i class="el-icon-more icon-item"></i>
        </div>
      </div>
      <div class="content">
        <div class="left">
          <Pie :pieData="typesOfMoniData.pieData"></Pie>
        </div>
        <div class="right">
          <ul v-if="typesOfMoniData.title == '火灾监测'">
            <li>
              <p>烟感</p>
              <p>{{typesOfMoniData.minoData.smoke}}</p>
            </li>
            <li>
              <p>温度</p>
              <p>{{typesOfMoniData.minoData.temperature}}°</p>
            </li>
            <li>
              <p>湿度</p>
              <p>{{typesOfMoniData.minoData.humidity}}%</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '可疑人士监测'">
            <li>
              <p>门磁</p>
              <p>{{typesOfMoniData.minoData.doorMagnet}}</p>
            </li>
            <li>
              <p>摄像头</p>
              <p>{{typesOfMoniData.minoData.camera}}</p>
            </li>
            <li>
              <p>追踪器</p>
              <p>{{typesOfMoniData.minoData.trackingDevice}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '燃气泄漏监控'">
            <li>
              <p>燃气监测</p>
              <p>{{typesOfMoniData.minoData.gas}}</p>
            </li>
            <li>
              <p>温度</p>
              <p>{{typesOfMoniData.minoData.temperature}}°</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '升降梯故障监测'">
            <li>
              <p>升降梯传感器</p>
              <p>{{typesOfMoniData.minoData.sensor}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '巡更管理'">
            <li>
              <p>摄像头</p>
              <p>{{typesOfMoniData.minoData.camera}}</p>
            </li>
            <li>
              <p>追踪器</p>
              <p>{{typesOfMoniData.minoData.trackingDevice}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '洪水泄漏'">
            <li>
              <p>漏水侦测器</p>
              <p>{{typesOfMoniData.minoData.Detector}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '校园能源监测'">
            <li>
              <p>智能电表</p>
              <p>{{typesOfMoniData.minoData.smartMeter}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '残疾人照护'">
            <li>
              <p>追踪器</p>
              <p>{{typesOfMoniData.minoData.trackingDevice}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '未成年照护'">
            <li>
              <p>追踪器</p>
              <p>{{typesOfMoniData.minoData.trackingDevice}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '老旧房屋监测'">
            <li>
              <p>位移传观器</p>
              <p>{{typesOfMoniData.minoData.displacement}}</p>
            </li>
            <li>
              <p>沉降传观器</p>
              <p>{{typesOfMoniData.minoData.settlement}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '老年人照护'">
            <li>
              <p>床脚垫传感器</p>
              <p>{{typesOfMoniData.minoData.bedMat}}</p>
            </li>
          </ul>
          <ul v-if="typesOfMoniData.title == '社区睦邻中心'">
            <li>
              <p>红外传感器</p>
              <p>{{typesOfMoniData.minoData.infrared}}</p>
            </li>
          </ul>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Pie from '../components/Pie.vue'
  export default {
    name: 'types-of-monitoring',
    components:{
      Pie
    },
    props:['typesOfMoniData'],
    data() {
      return {

      }
    }
  }
</script>

<style scoped>

  /* 各类监测开始 */
  .types-of-monitoring .head {
    background: #8792F2;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 15px;
  }
  .types-of-monitoring .head h3{
    color: #fff;
  }
  .types-of-monitoring .head .icon-item{
    transform: rotate(90deg);
  }
  .types-of-monitoring .content {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    color: #545454;
    font-size: 14px;
    line-height: 20px;
  }
  .types-of-monitoring .content .left {
    padding-right: 20px;
  }
  .types-of-monitoring .content .right ul {
    display: flex;
    justify-content: flex-end;
  }
  .types-of-monitoring .content .right ul li {
    padding: 0 5px;
    border-left: 1px solid #ddd;
  }
  .types-of-monitoring .content .right ul li:first-child {
    border: none;
  }
  .types-of-monitoring .content .right ul li p {
    text-align: right;
  }
  /* 各类监测结束 */


  @media (min-width: 1600px) {
    .types-of-monitoring .content {
      font-size: 18px;
      line-height: 32px;
    }
  }

</style>
