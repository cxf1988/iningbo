<template>
  <div class="safe-page">
    <HeadNavCom :headNavComData="headNavComData"></HeadNavCom>
    <div class="content-container">
      <el-row :gutter="20" class="first">
        <el-col :lg="12" class="content-left">
          <el-card class="box-card">
            <div class="head">
              <h3>公共安全摄像头智能监控</h3>
              <div class="">
                <Pie :pieData="pieData[0]"></Pie>
              </div>
            </div>
            <div class="content">
              <ul class="video-container">
                <li class="video">
                  <video-player  class="video-player-box"
                                 ref="videoPlayer"
                                 :options="playerOptions"
                                 :playsinline="true"
                                 customEventName="customstatechangedeventname"

                                 @play="onPlayerPlay($event)"
                                 @pause="onPlayerPause($event)"
                                 @ended="onPlayerEnded($event)"
                                 @waiting="onPlayerWaiting($event)"

                                 @statechanged="playerStateChanged($event)"
                                 @ready="playerReadied">
                  </video-player>
                  <div class="tip">公共执法</div>
                </li>
                <li class="video">
                  <div class="tip">城管执法</div>
                </li>
                <li class="video">
                  <div class="tip">涉黄场所</div>
                </li>
                <li class="video">
                  <div class="tip">学校周边</div>
                </li>
                <li class="video">
                  <div class="tip">河道监控</div>
                </li>
                <li class="video">
                  <div class="tip">升降梯口</div>
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="12" class="content-right">
          <el-card class="box-card">
            <div class="head">
              <h3>110报警信息</h3>
              <div>
                <Pie :pieData="pieData[1]"></Pie>
              </div>
            </div>
            <div class="content">
              <div class="info-pie-container">
                <div id="myChart" class="info-pie"></div>
              </div>
              <div class="info-list">
                <h3><font-awesome-icon class="listIcon" icon="th-list" />&nbsp;偷窃</h3>
                <ul v-for="(item, index) in infoList" :key="index">
                  <li class="item"><span class="label">{{item.eventTime}}</span>&nbsp;{{item.eventCon}}</li>
                </ul>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :lg="16" class="content-left">
            <ul class="types">
              <li v-for="(item, index) in typesOfMoniData" :key="index">
                <TypesOfMonitoring :typesOfMoniData="item"></TypesOfMonitoring>
              </li>
            </ul>
        </el-col>
        <el-col :lg="8" class="content-right">
          <div class="map">
            <el-card class="box-card" body-style="padding: 0;">
              <div class="head">
                <h3>传感器态势分布图</h3>
              </div>
              <div class="map-container">
                <div id="map-location"></div>
                <div class="tips"><span class="tip-circle">&bull;</span>&nbsp;<span>追踪器</span></div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  import HeadNavCom from '../../components/HeadNavCom.vue'
  import Pie from '../../components/Pie.vue'
  import TypesOfMonitoring from '../../components/TypesOfMonitoring.vue'
  export default {
    name: 'safe',
    components: {
      HeadNavCom,
      Pie,
      TypesOfMonitoring
    },
    data () {
      return {
        playerOptions: {
          // videojs options
          muted: true,
          language: 'en',
          playbackRates: [0.7, 1.0, 1.5, 2.0],
          sources: [{
            type: "video/mp4",
            src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
          }],
          poster: "/static/images/author.jpg",
        },
        headNavComData: {
          headline: '高新区综合管理大脑 公共安全'
        },
        pieData: [
          {
            id: 'pieId3',
            value: 27,
            text: '',
            color: '#216DDB',
            title: '',
            width: '40px',
            height: '40px',
            radius: [15,18]
          },
          {
            id: 'pieId4',
            value: 93,
            text: '',
            color: '#216DDB',
            title: '',
            width: '40px',
            height: '40px',
            radius: [15,18]
          }
        ],
        infoList: [
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-02'
          },
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-05'
          },
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-08'
          },
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-16'
          },
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-27'
          },
          {
            eventCon: '延吉中路肯德电瓶车被盗',
            eventTime: '2017-11-30'
          }
        ],
        typesOfMoniData: [
          {
            title: '火灾监测',
            icon: '01',
            pieData: {
              id: 'pieId5',
              value: 10,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              smoke: '2/3.3',
              temperature: 26,
              humidity: 25
            }
          },
          {
            title: '可疑人士监测',
            icon: '02',
            pieData: {
              id: 'pieId6',
              value: 70,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              doorMagnet: '10/998',
              camera: '2/60',
              trackingDevice: '0/3'
            }
          },
          {
            title: '燃气泄漏监控',
            icon: '03',
            pieData: {
              id: 'pieId7',
              value: 37,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              gas: '0/9',
              temperature: 26
            }
          },
          {
            title: '升降梯故障监测',
            icon: '04',
            pieData: {
              id: 'pieId8',
              value: 50,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              sensor: '4/8'
            }
          },
          {
            title: '巡更管理',
            icon: '05',
            pieData: {
              id: 'pieId9',
              value: 90,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              camera: '2/60',
              trackingDevice: '0/3'
            }
          },
          {
            title: '洪水泄漏',
            icon: '06',
            pieData: {
              id: 'pieId10',
              value: 80,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              Detector: '4/809'
            }
          }
        ]
      }
    },
    computed: {
      player() {
        return this.$refs.videoPlayer.player
      }
    },
    mounted() {
      this.drawPie()
      this.drawMap()
    },
    methods: {
      drawMap() {
        let mapObj = new AMap.Map('map-location', {//'map-location'是对应页面盒子的id
          resizeEnable: true, //自适应大小
          zoom: 10//初始视窗
        });

        let marker1 = new AMap.Marker({
          position: new AMap.LngLat(121.55, 29.87),
          title: ''
        });
        let marker2 = new AMap.Marker({
          position: new AMap.LngLat(121.66, 29.87),
          title: ''
        });
        let marker3 = new AMap.Marker({
          position: new AMap.LngLat(121.55, 29.95),
          title: ''
        });

        let markerList = [marker1, marker2, marker3];

        mapObj.add(markerList);

      },
      drawPie() {
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        //自适应宽高
        let myChartContainer = function () {

          document.getElementById('myChart').style.width = '100%'
        }

        myChartContainer()
        myChart.setOption(this.getOption())

        //浏览器大小改变时重置大小
        window.onresize = function () {
          myChartContainer();
          myChart.resize();
        };

      },
      getOption() {
        const radius = {
          pie: '55%',
          doughnut: ['40%', '55%'],
          rose: ['20%', '55%']
        };

        let data = [{
          value: 12,
          name: '抢劫'
        },
          {
            value: 80,
            name: '偷窃'
          },
          {
            value: 30,
            name: '诈骗'
          },
          {
            value: 50,
            name: '车祸'
          }
        ];

        let type = 'rose'; // pie doughnut

        return {
          color: ['#b34020', '#d95132', '#ff6347', '#ff8170'],
          grid: {
            top: 46,
            left: 16,
            right: 16,
            bottom: 16,
            containLabel: true
          },
          tooltip: {
            trigger: 'item',
            formatter: '{b} : {c} ({d}%)',
            backgroundColor: '#000'
          },
          legend: {
            data: data.map(item => item.name)
          },
          series: [{
            type: 'pie',
            radius: radius[type],
            center: ['50%', '60%'],
            data: data,
            roseType: type === 'rose' ? 'radius' : void 0,

            animationType: 'scale',
            animationEasing: 'elasticOut'
          }]
          };
      },
      // listen event
      onPlayerPlay(player) {
        // console.log('player play!', player)
      },
      onPlayerPause(player) {
        // console.log('player pause!', player)
      },
      // ...player event

      // or listen state event
      playerStateChanged(playerCurrentState) {
        // console.log('player current update state', playerCurrentState)
      },

      // player is ready
      playerReadied(player) {
        console.log('the player is readied', player)
        // you can use it to do something...
        // player.[methods]
      }
    }
  }
</script>


<style>
  .safe-page .content-container {
    padding: 20px;
  }
  .safe-page .content-container .first .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .safe-page .content-container .first .head h3{
    line-height: 40px;
    font-size: 16px;
    color: #545454;
    font-weight: bold;
  }
  .safe-page .content-container .types{
    display: flex;
    justify-content: space-between;
  }

  /* 公共安全摄像头智能监控开始 */
  .safe-page .video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .safe-page .video-container .video {
    width: 256px;
    height: 144px;
    background: #ccc;
    margin-bottom: 11px;
    border-radius: 3px;
    position: relative;
    overflow: hidden;
  }
  .safe-page .video-container .tip {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 32px;
    background: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    line-height: 32px;
    font-size: 14px;
    border-radius: 3px 3px 0 0 ;
  }
  .safe-page .video-container .vjs_video_3-dimensions {
    width: 256px;
    height: 144px;
  }
  .safe-page .video-container .video-js .vjs-big-play-button {
    left: calc(50% - 1.5em);
    top: calc(50% - 0.75em);
  }
  /* 公共安全摄像头智能监控结束 */

  /* 110报警信息开始 */
  .safe-page .content-container .content-right .content {
    height: 465px;
    overflow: hidden;
  }
  .safe-page .content .info-pie-container {
    width: 50%;
    float: left;

  }
  .safe-page .content .info-pie {
    width: 100%;
    height: 320px;
  }
  .safe-page .content .info-list {
    float: right;
  }
  .safe-page .content .info-list .listIcon {
    color: #046BBF;
  }
  .safe-page .content .info-list h3{
    line-height: 42px;
  }
  .safe-page .content .info-list {
     float: left;
     margin-left: 10px;
   }
  .safe-page .content .info-list .item{
    font-size: 14px;
    color: #545454;
    line-height: 40px;
    border-bottom: 1px dashed #eee;
  }
  .safe-page .content .info-list .item .label{
    background: #8593F2;
    padding: 0 5px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  /* 110报警信息结束 */

  /* 各类监测开始 */
  .safe-page .content-container .types {
    display: flex;
    flex-wrap: wrap;
  }
  .safe-page .content-container .types>li {
    width: 32%;
    margin-top: 20px;
  }
  /* 各类监测结束 */

  /* 地图开始 */
  .safe-page .content-container .map {
    margin-top: 20px;
    width: 100%;
    height: 304px;
  }
  .safe-page .content-container .map .head {
    background: #8593F2;
    height: 60px;
    padding: 0 15px;
  }
  .safe-page .content-container .map .head h3 {
    color: #fff;
    line-height: 60px;
  }
  .safe-page .content-container .map-container {
    width: 100%;
    position: relative;
  }
  .safe-page .content-container .map-container #map-location {
    width: 100%;
    height: 226px;
  }
  .safe-page .content-container .map-container .tips {
    position: absolute;
    width: 100%;
    height: 32px;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    font-size: 14px;
    color: #fff;
    font-weight: normal;
    line-height: 32px;
    text-align: right;
    padding: 0 15px;
    box-sizing: border-box;
  }
  .safe-page .content-container .map-container .tip-circle {
    color: #8AC3F9;
  }
  /* 地图结束 */

  @media (min-width: 1680px) {
    .safe-page .content-container .content-right .content {
      height: 310px;
    }
    .safe-page .content .info-pie {
      width: 100%;
      height: 310px;
    }
  }
  @media (min-width: 1600px) {
    .safe-page .content-container .map {
      margin-top: 20px;
      width: 100%;
      height: 336px;
    }
    .safe-page .content-container .map-container #map-location {
      width: 100%;
      height: 274px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1679px) {
    .safe-page .content-container .content-right .content {
      height: 465px!important;
    }
    .safe-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .safe-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .safe-page .content-container .types>li {
      width: 33%;
      margin-top: 20px;
    }
    .safe-page .content .info-list .item{
      line-height: 60px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1365px) {
    .safe-page .content-container .content-right .content {
      height: 465px;
    }
    .safe-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .safe-page .content-container .types>li {
      width: 48%;
    }
    .safe-page .content-container .map-container #map-location {
      width: 100%;
      height: 380px;
    }
  }

  @media (max-width: 1200px) {
    .safe-page .content-container .content-right .content {
      height: 320px;
    }
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    .safe-page .video-container .video {
      width: 288px;
      height: 162px;
    }
    .safe-page .video-container .vjs_video_3-dimensions {
      width: 288px;
      height: 162px;
    }
    .safe-page .content-container .content-right {
      margin-top: 20px;
    }
    .safe-page .content .info-pie-container {
      width: 50%;
    }
    .safe-page .content-container .types>li {
      width: 32%;
    }
  }

  @media (max-width: 900px) {

    .safe-page .content-container .types>li {
      width: 48%;
    }
  }

  @media (max-width: 660px) {
    .safe-page .content .info-list .item .label{
      display: none;
    }
  }

</style>
