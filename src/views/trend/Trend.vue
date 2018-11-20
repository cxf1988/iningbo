<template>
  <div class="trend-page">
    <HeadNavCom :headNavComData="headNavComData"></HeadNavCom>
    <div class="content-container">
      <div class="bg-content">
        <div class="bg"></div>
        <div class="patrol-police-force">
          <el-card class="box-card" body-style="padding: 0;">
            <div class="head">
              巡逻警力分布
            </div>
            <div class="content">
              <div class="table-head">
                <ul class="items">
                  <li class="item1"></li>
                  <li class="item2">小区名称</li>
                  <li class="item3">巡逻数量</li>
                  <li class="item4">巡逻次数</li>
                </ul>
              </div>
              <div class="table-body">
                <ul class="items" v-for="(item, index) in patrolPoliceForceData" :key="index">
                  <li class="item1">{{index + 1}}</li>
                  <li class="item2">{{item.communityName}}</li>
                  <li class="item3">{{item.quantity}}</li>
                  <li class="item4">{{item.frequency}}</li>
                </ul>
              </div>
            </div>
          </el-card>
        </div>
      </div>
      <el-row :gutter="20">
        <el-col :lg="12">
          <el-row :gutter="20">
            <el-col :md="12">
              <div class="situation">
                <el-card class="box-card" body-style="padding: 0;">
                  <div class="head">
                    检查小区及概况
                  </div>
                  <div class="content">
                    <div class="table-head">
                      <ul class="items">
                        <li class="item1"></li>
                        <li class="item2">小区名称</li>
                        <li class="item3">人口数量</li>
                        <li class="item4">犯罪起数</li>
                        <li class="item5">犯罪行为</li>
                      </ul>
                    </div>
                    <div class="table-body">
                      <ul class="items" v-for="(item, index) in situationData" :key="index">
                        <li class="item1">{{index + 1}}</li>
                        <li class="item2">{{item.communityName}}</li>
                        <li class="item3">{{item.population}}</li>
                        <li class="item4">{{item.numberOfCrimes}}</li>
                        <li class="item5">{{item.typeOfCrimes}}</li>
                      </ul>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
            <el-col :md="12">
              <div class="stranger">
                <el-card class="box-card" body-style="padding: 0;">
                  <div class="head">
                    陌生人活动区域
                  </div>
                  <div class="content">
                    <div class="top">
                      <span>区域内人数23425人</span>
                      <span>陌生访客<span class="stranger-font-color">3425</span>人</span>
                    </div>
                    <div class="bottom">
                      <div class="left">
                        <div class="pie">
                          <Pie :pieData="pieData"></Pie>
                        </div>
                        <p class="title">陌生访客占比</p>
                      </div>
                      <div class="right">
                        <h3>陌生访客密集</h3>
                        <ul class="items">
                          <li class="item"
                              v-for="(item, index) in strangerCommunityData"
                              :key="index">
                            NO.{{index + 1}} {{item.communityName}}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </el-card>
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :lg="12">
          <div class="warning-crime">
            <el-card class="box-card" body-style="padding: 0;">
              <div class="head">
                预警分析及历史犯罪区域
              </div>
              <div class="content">
                <div class="left">
                  <h3>预警隐患小区(前五)</h3>
                  <div class="left-content">
                    <div id="warningPie" class="warning-pie" :style="{width: '240px', height: '200px'}"></div>
                  </div>
                </div>
                <div class="right">
                  <h3>历史犯罪区域统计(前五)</h3>
                  <div class="right-content">
                    <div
                      class="items-container"
                      v-for="(item, index) in historicalCrimeData" :key="index">
                      <h3>{{item.time}}月</h3>
                      <ul>
                        <li
                          v-for="(i, index) in item.data"
                          :key="index">
                          {{i.communityName}}
                          <span><i class="el-icon-minus icon"></i>{{i.numberOfCrimes}}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="foot-container">
      <div class="title">
        <h3>安全预警分布图:</h3>
      </div>
      <div class="content">
        <el-row>
          <el-col :span="6"><span>高风险火灾预警图</span></el-col>
          <el-col :span="6"><span>交通阻塞预测图</span></el-col>
          <el-col :span="6"><span>电梯故障预警图</span></el-col>
          <el-col :span="6"><span>水质预警图</span></el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
  import HeadNavCom from '../../components/HeadNavCom.vue'
  import Pie from '../../components/Pie.vue'
  export default {
    name: 'trend',
    components: {
      HeadNavCom,
      Pie
    },
    data () {
      return {
        pieData: {
          id: 'pieId1',
          value: '75%',
          text: '',
          color: '#216DDB',
          title: '',
          width: '60px',
          height: '60px',
          radius: [25, 30]
        },
        headNavComData: {
          headline: '高新区综合管理大脑 未来趋势'
        },
        patrolPoliceForceData: [{
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        }, {
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        }, {
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        },{
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        }, {
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        }, {
          communityName: '南塘一村小区',
          quantity: 43,
          frequency: 5
        }],
        situationData: [
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          },
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          },
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          },
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          },
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          },
          {
            communityName: '南塘一村',
            population: 4980,
            numberOfCrimes: 3,
            typeOfCrimes: '入室盗窃',
          }
        ],
        strangerCommunityData: [
          {communityName: '南塘一村'},
          {communityName: '南塘一村'},
          {communityName: '南塘一村'},
          {communityName: '南塘一村'},
          {communityName: '南塘一村'}
        ],
        historicalCrimeData: [
          {
            time: 10,
            data: [
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              }
            ]
          },
          {
            time: 9,
            data: [
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              }
            ]
          },
          {
            time: 8,
            data: [
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              },
              {
                communityName: '金字名邸小区',
                numberOfCrimes: 43
              }
            ]
          }
        ]
      }
    },
    mounted() {
      this.drawWarningPie()
    },
    methods: {
      drawWarningPie() {
        let warningPie = document.getElementById('warningPie')
        let myChart = this.$echarts.init(warningPie)
        myChart.setOption({
          visualMap: {
            show: false,
            min: 80,
            max: 600,
            inRange: {
              colorLightness: [0, 1]
            }
          },
          series : [
            {
              name:'预警隐患小区(前五)',
              type:'pie',
              radius : '50%',
              center: ['50%', '50%'],
              data:[
                {value:335, name:'城市名苑'},
                {value:310, name:'南塘四村小区'},
                {value:274, name:'金字名邸小区'},
                {value:235, name:'南塘二村小区'},
                {value:400, name:'延吉中路320弄'}
              ].sort(function (a, b) { return a.value - b.value; }),
              roseType: 'radius',
              label: {
                normal: {
                  textStyle: {
                    color: '#545454',
                    fontSize: 10
                  }
                }
              },
              labelLine: {
                normal: {
                  lineStyle: {
                    color: '#545454'
                  },
                  smooth: 0.2,
                  length: 1,
                  length2: 2
                }
              },
              itemStyle: {
                normal: {
                  color: '#4EB0C8',
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              },

              animationType: 'scale',
              animationEasing: 'elasticOut'
            }
          ]
        })
      }
    }
  }
</script>


<style>
  .trend-page .el-table__header th, .el-table__header tr {
    border-bottom: 1px dashed #ddd;
  }
  .trend-page .content-container {
    padding: 20px;
  }
  .trend-page .content-container .content {
    display: block;
    height: 260px;
  }
  .trend-page .content-container .bg-content {
    margin-bottom: 20px;
    overflow: hidden;
  }
  .trend-page .content-container .bg-content .bg {
    float: left;
    height: 320px;
    width: calc(100% - 340px);
    border-radius: 3px;
    background-image: url("images/trend_bg.png");
    background-position: center;
  }

  /* 巡逻警力分布开始 */
  .trend-page .content-container .bg-content .patrol-police-force {
    float: right;
    width: 320px;
    height: 320px;
  }
  .trend-page .content-container .head {
    background: #8792F2;
    height: 60px;
    line-height: 60px;
    color: #fff;
    padding: 0 15px;
    font-size: 16px;
  }
  .trend-page .content-container .patrol-police-force .content .items {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 14px;
    color: #545454;
    line-height: 32px;
  }
  .trend-page .content-container .patrol-police-force .content .table-head .items {
    line-height: 48px;
    border-bottom: 1px dashed #ddd;
  }
  .trend-page .content-container .patrol-police-force .content .items .item1 {
    width: 10%;
  }
  .trend-page .content-container .patrol-police-force .content .items .item2 {
    width: 40%;
  }
  .trend-page .content-container .patrol-police-force .content .items .item3 {
    width: 25%;
  }
  .trend-page .content-container .patrol-police-force .content .items .item4 {
    width: 25%;
  }
  /* 巡逻警力分布结束 */

  /* 检查小区及概况开始 */
  .trend-page .content-container .situation .content .items {
    width: 100%;
    display: flex;
    text-align: center;
    font-size: 14px;
    color: #545454;
    line-height: 32px;
  }
  .trend-page .content-container .situation .content .table-head .items {
    line-height: 48px;
    border-bottom: 1px dashed #ddd;
  }
  .trend-page .content-container .situation .content .items .item1 {
    width: 10%;
  }
  .trend-page .content-container .situation .content .items .item2 {
    width: 30%;
  }
  .trend-page .content-container .situation .content .items .item3 {
    width: 20%;
  }
  .trend-page .content-container .situation .content .items .item4 {
    width: 20%;
  }
  .trend-page .content-container .situation .content .items .item5 {
    width: 20%;
  }

  /* 检查小区及概况结束 */

  /* 陌生人活动区域开始 */
  .trend-page .content-container .stranger .content .top {
    display: flex;
    justify-content: space-around;
    font-size: 14px;
    color: #545454;
    line-height: 48px;
    border-bottom: 1px dashed #ddd;
  }
  .trend-page .content-container .stranger .content .bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
  .trend-page .content-container .stranger .content .bottom .pie {

  }
  .trend-page .content-container .stranger .content .bottom .title {
    font-size: 12px;
    color: #545454;
    line-height: 60px;
  }
  .trend-page .content-container .stranger .content .stranger-font-color {
    color: #E28824;
  }
  .trend-page .content-container .stranger .content .bottom .right h3 {
    font-size: 14px;
    color: #6E80ED;
    line-height: 32px;
  }
  .trend-page .content-container .stranger .content .bottom .right .items .item {
    font-size: 14px;
    color: #545454;
    line-height: 32px;
  }
  /* 陌生人活动区域结束 */

  /* 预警分析及历史犯罪区域开始 */
  .trend-page .content-container .warning-crime .content {
    width: 100%;
    display: flex;
    font-size: 12px;
    color: #545454;
    line-height: 32px;
    padding: 0 10px;
    overflow: hidden;
  }
  .trend-page .content-container .warning-crime .content h3 {
    font-size: 14px;
    line-height: 48px;
    border-bottom: 1px dashed #ddd;
  }
  .trend-page .content-container .warning-crime .content .left {
    width: 240px;
    float: left;
  }
  .trend-page .content-container .warning-crime .content .right {
    width: calc(100% - 240px);
    float: left;
  }
  .trend-page .content-container .warning-crime .content .right .right-content {
    display: flex;
    justify-content: space-around;
  }
  .trend-page .content-container .warning-crime .content .right .right-content .items-container h3 {
    line-height: 32px;
    font-weight: bold;
    border-bottom: none;
  }
  .trend-page .content-container .warning-crime .content .right .right-content .items-container .icon {
    color: #4EB0C8;
    font-weight: bold;
  }
  /* 预警分析及历史犯罪区域结束 */

  /* 底部样式开始 */
  .trend-page .foot-container {
    background: #3A3B6A;
    line-height: 80px;
    color: #fff;
    height: 80px;
    padding: 0 20px;
    overflow: hidden;
  }
  .trend-page .foot-container .title {
    float: left;
    width: 160px;
    font-size: 18px;
    color: #8792F2;
    font-weight: bold;
  }
  .trend-page .foot-container .content {
    float: left;
    width: calc(100% - 160px);
    text-align: center;
  }
  .trend-page .foot-container .content span{
    cursor: pointer;
    font-size: 16px;
    font-weight: normal;
  }
  /* 底部样式结束 */


  @media (max-width: 1200px) {
    .trend-page .warning-crime {
      margin-top: 20px;
    }
  }

  @media (max-width: 992px) {
    .trend-page .foot-container .content span{
      font-size: 14px;
    }
    .trend-page .stranger {
      margin-top: 20px;
    }
  }

</style>
