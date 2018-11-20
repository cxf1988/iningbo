<template>
  <div class="service-page">
    <HeadNavCom :headNavComData="headNavComData"></HeadNavCom>
    <div class="content-container">
      <el-row :gutter="20" class="first">
        <el-col :lg="12" class="content-left">
          <el-card class="box-card">
            <div class="head">
              <h3>公共服务摄像头智能监控</h3>
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
                </li>
                <li class="video">
                </li>
                <li class="video">
                </li>
                <li class="video">
                </li>
                <li class="video">
                </li>
              </ul>
            </div>
          </el-card>
        </el-col>
        <el-col :lg="12" class="content-right">
          <el-card class="box-card">
            <div class="head">
              <h3>12345重要事项</h3>
              <router-link to="/trend">
                <div class="trend">
                  未来趋势预测
                </div>
              </router-link>
            </div>
            <div class="content">
              <div class="info-pie-container">
                <div id="myChart" class="info-pie"></div>
              </div>
              <div class="info-list">
                <h3><font-awesome-icon class="listIcon" icon="th-list" />&nbsp;市容绿化所</h3>
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
          headline: '高新区综合管理大脑 公共服务'
        },
        pieData: [
          {
            id: 'pieId3',
            value: 72,
            text: '',
            color: '#216DDB',
            title: '',
            width: '40px',
            height: '40px',
            radius: [15,18]
          },
          {
            id: 'pieId4',
            value: 9,
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
            eventCon: '无证设摊(大排档)',
            eventTime: '2017-11-02'
          },
          {
            eventCon: '跨门经营',
            eventTime: '2017-11-05'
          },
          {
            eventCon: '破坏承重墙',
            eventTime: '2017-11-08'
          },
          {
            eventCon: '贩夫活食',
            eventTime: '2017-11-16'
          },
          {
            eventCon: '无证设摊(大排档)',
            eventTime: '2017-11-27'
          },
          {
            eventCon: '违章建筑',
            eventTime: '2017-11-30'
          }
        ],
        typesOfMoniData: [
          {
            title: '校园能源监测',
            icon: '01',
            pieData: {
              id: 'pieId1',
              value: 89,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              smartMeter: '2/30'
            }
          },
          {
            title: '残疾人照护',
            icon: '02',
            pieData: {
              id: 'pieId2',
              value: 20,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              trackingDevice: '10/98'
            }
          },
          {
            title: '未成年照护',
            icon: '03',
            pieData: {
              id: 'pieId8',
              value: 97,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              trackingDevice: '10/98'
            }
          },
          {
            title: '老旧房屋监测',
            icon: '04',
            pieData: {
              id: 'pieId7',
              value: 10,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              displacement: '2/60',
              settlement: '0/3'
            }
          },
          {
            title: '老年人照护',
            icon: '05',
            pieData: {
              id: 'pieId5',
              value: 19,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              bedMat: '2/60'
            }
          },
          {
            title: '社区睦邻中心',
            icon: '06',
            pieData: {
              id: 'pieId6',
              value: 50,
              text: '',
              color: '#216DDB',
              title: '',
              width: '40px',
              height: '40px',
              radius: [15,18]
            },
            minoData: {
              infrared: '4/809'
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
          position: new AMap.LngLat(121.57, 29.87),
          title: ''
        });
        let marker3 = new AMap.Marker({
          position: new AMap.LngLat(121.55, 29.88),
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
        return {
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series : [
            {
              type: 'pie',
              radius : '50%',
              center: ['50%', '50%'],
              selectedMode: 'single',
              data:[
                {value:1548, name: '社综办'},
                {value:535, name: '民办'},
                {value:510, name: '城管'},
                {value:634, name: '平安办'},
                {value:735, name: '家政办'}
              ],
              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
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
  .service-page .content-container {
    padding: 20px;
  }
  .service-page .content-container .first .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }
  .service-page .content-container .first .head h3{
    line-height: 40px;
    font-size: 16px;
    color: #545454;
    font-weight: bold;
  }
  .service-page .content-container .first .head .trend{
    line-height: 40px;
    font-size: 16px;
    color: #545454;
    text-decoration: underline;
    cursor: pointer;
  }
  .service-page .content-container .first .head .trend:hover{
    color: #8AC3F9;
  }
  .service-page .content-container .types{
    display: flex;
    justify-content: space-between;
  }

  /* 公共服务摄像头智能监控开始 */
  .service-page .video-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .service-page .video-container .video {
    width: 256px;
    height: 144px;
    background: #ccc;
    margin-bottom: 11px;
    border-radius: 3px;
    position: relative;
  }
  .service-page .video-container .tip {
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
  .service-page .video-container .vjs_video_3-dimensions {
    width: 256px;
    height: 144px;
  }
  .service-page .video-container .video-js .vjs-big-play-button {
    left: calc(50% - 1.5em);
    top: calc(50% - 0.75em);
  }
  /* 公共服务摄像头智能监控结束 */

  /* 12345重要事项开始 */
  .service-page .content {
    overflow: hidden;
  }
  .service-page .content .info-pie-container {
    width: 50%;
    float: left;

  }
  .service-page .content .info-pie {
    width: 100%;
    height: 320px;
  }
  .service-page .content .info-list {
    float: right;
  }
  .service-page .content .info-list .listIcon {
    color: #7846C6;
  }
  .service-page .content .info-list h3{
    line-height: 42px;
  }
  .service-page .content .info-list {
    float: left;
    margin-left: 10px;
  }
  .service-page .content .info-list .item{
    font-size: 14px;
    color: #545454;
    line-height: 40px;
    border-bottom: 1px dashed #eee;
  }
  .service-page .content .info-list .item .label{
    background: #8593F2;
    padding: 0 5px;
    border-radius: 3px;
    color: #fff;
    font-size: 12px;
  }
  /* 12345重要事项结束 */

  /* 各类监测开始 */
  .service-page .content-container .types {
    display: flex;
    flex-wrap: wrap;
  }
  .service-page .content-container .types>li {
    width: 32%;
    margin-top: 20px;
  }
  /* 各类监测结束 */

  /* 地图开始 */
  .service-page .content-container .map {
    margin-top: 20px;
    width: 100%;
    height: 304px;
  }
  .service-page .content-container .map .head {
    background: #8593F2;
    height: 60px;
    padding: 0 15px;
  }
  .service-page .content-container .map .head h3 {
    color: #fff;
    line-height: 60px;
  }
  .service-page .content-container .map-container {
    width: 100%;
    position: relative;
  }
  .service-page .content-container .map-container #map-location {
    width: 100%;
    height: 226px;
  }
  .service-page .content-container .map-container .tips {
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
  .service-page .content-container .map-container .tip-circle {
    color: #8AC3F9;
  }
  /* 地图结束 */

  @media (min-width: 1680px) {
    .service-page .content-container .content-right .content {
      height: 310px;
    }
    .service-page .content .info-pie {
      width: 100%;
      height: 310px;
    }
  }
  @media (min-width: 1600px) {
    .service-page .content-container .map {
      margin-top: 20px;
      width: 100%;
      height: 336px;
    }
    .service-page .content-container .map-container #map-location {
      width: 100%;
      height: 274px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1679px) {
    .service-page .content-container .content-right .content {
      height: 465px!important;
    }
    .service-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .service-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .service-page .content-container .types>li {
      width: 33%;
      margin-top: 20px;
    }
    .service-page .content .info-list .item{
      line-height: 60px;
    }
  }

  @media (min-width: 1200px) and (max-width: 1365px) {
    .service-page .content-container .content-right .content {
      height: 465px;
    }
    .service-page .content .info-pie {
      width: 100%;
      height: 465px;
    }
    .service-page .content-container .types>li {
      width: 48%;
    }
    .service-page .content-container .map-container #map-location {
      width: 100%;
      height: 380px;
    }
  }

  @media (max-width: 1200px) {
    .service-page .content-container .content-right .content {
      height: 320px;
    }
  }

  @media (min-width: 900px) and (max-width: 1200px) {
    .service-page .video-container .video {
      width: 288px;
      height: 162px;
    }
    .service-page .video-container .vjs_video_3-dimensions {
      width: 288px;
      height: 162px;
    }
    .service-page .content-container .content-right {
      margin-top: 20px;
    }
    .service-page .content .info-pie-container {
      width: 50%;
    }
    .service-page .content-container .types>li {
      width: 32%;
    }
  }

  @media (max-width: 900px) {

    .service-page .content-container .types>li {
      width: 48%;
    }
  }

  @media (max-width: 660px) {
    .service-page .content .info-list .item .label{
      display: none;
    }
  }

</style>
