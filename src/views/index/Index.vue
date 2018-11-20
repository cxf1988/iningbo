<template>
  <div class="index-page">
    <!-- 头部 -->
    <HeadNav></HeadNav>
    <div class="content-container">
      <el-row :gutter="20">

        <!-- 高新区综合管理大脑 -->
        <el-col :md="8" :lg="8" :xl="8" class="content-left">
          <el-card class="box-card">
            <div class="head">高新区综合管理大脑</div>
            <div>
              <el-carousel indicator-position="outside">
                <el-carousel-item v-for="item in carouselList" :key="item.key">
                  <img :src="item.src">
                </el-carousel-item>
              </el-carousel>
            </div>
            <div class="foot">公共服务</div>
          </el-card>
        </el-col>

        <!-- 公共安全／公共服务／公共管理 -->
        <el-col :md="16" :lg="16" :xl="16" class="content-right">
          <el-row :gutter="20" class="top">
            <el-col :span="8">
              <el-card class="box-card safe-container" body-style="padding: 0;">
                <div class="head">
                  <router-link to="/safe">
                    <div class="title-link"><i class="el-icon-warning"></i>&nbsp;公共安全</div>
                  </router-link>
                  <div>
                    <Pie :pieData="pieData[0]"></Pie>
                  </div>
                  <div>	&bull;&nbsp;公共安全指数&nbsp;&nbsp;<span class="label">良好</span></div>
                </div>
                <div class="good">
                  <h6 class="title">安全区域前三名</h6>
                  <ul class="items" v-for="(item, index) in safeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.safetyRate}}</span></li>
                  </ul>
                </div>
                <hr>
                <div class="bad">
                  <h6 class="title">隐患区域前三名</h6>
                  <ul class="items" v-for="(item, index) in unsafeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.unsafetyRate}}</span></li>
                  </ul>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card service-container" body-style="padding: 0;">
                <div class="head">
                  <router-link to="/service">
                    <div class="title-link"><i class="el-icon-service"></i>&nbsp;公共服务</div>
                  </router-link>
                  <div>
                    <Pie :pieData="pieData[1]"></Pie>
                  </div>
                  <div>	&bull;&nbsp;公共服务指数&nbsp;&nbsp;<span class="label">良好</span></div>
                </div>
                <div class="good">
                  <h6 class="title">服务较好区域前三名</h6>
                  <ul class="items" v-for="(item, index) in safeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.safetyRate}}</span></li>
                  </ul>
                </div>
                <hr>
                <div class="bad">
                  <h6 class="title">服务较差区域前三名</h6>
                  <ul class="items" v-for="(item, index) in unsafeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.unsafetyRate}}</span></li>
                  </ul>
                </div>
              </el-card>
            </el-col>
            <el-col :span="8">
              <el-card class="box-card manage-container" body-style="padding: 0;">
                <div class="head">
                  <router-link to="/manage">
                    <div class="title-link"><i class="el-icon-share"></i>&nbsp;公共管理</div>
                  </router-link>
                  <div>
                    <Pie :pieData="pieData[2]"></Pie>
                  </div>
                  <div>	&bull;&nbsp;公共管理指数&nbsp;&nbsp;<span class="label">良好</span></div>
                </div>
                <div class="good">
                  <h6 class="title">管理较好区域前三名</h6>
                  <ul class="items" v-for="(item, index) in safeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.safetyRate}}</span></li>
                  </ul>
                </div>
                <hr>
                <div class="bad">
                  <h6 class="title">管理较差区域前三名</h6>
                  <ul class="items" v-for="(item, index) in unsafeCommunity" :key="index">
                    <li class="item">NO.{{index + 1}} {{item.name}}<span class="label">{{item.unsafetyRate}}</span></li>
                  </ul>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col>
              <!-- background:linear-gradient(to right,rgb(132,148,243),rgb(187,141,240),rgb(137,197,249)); -->
              <el-card class="box-card" body-style="padding: 0;">
                <div id="trend" class="trend" :style="{width: '100%', height: '200px'}"></div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </div>

    <!-- 底部 -->
    <footer class="foot-container">
      您好，欢迎登录高新区综合管理大脑，让我来协助您管理高新区
    </footer>
  </div>
</template>

<script>
  import HeadNav from '../../components/HeadNav.vue'
  import Pie from '../../components/Pie.vue'
  export default {
    name: 'index',
    data () {
      return {
        carouselList: [
          {key: '1', src: '../../static/images/demo1.png', desc: 'demo1'},
          {key: '2', src: '../../static/images/demo3.png', desc: 'demo2'},
          {key: '3', src: '../../static/images/demo1.png', desc: 'demo4'},
          {key: '4', src: '../../static/images/demo3.png', desc: 'demo5'}
        ],
        pieData: [
          {
            id: 'pieId1',
            value: '75%',
            text: '',
            color: '#046BBF',
            title: '',
            width: '60px',
            height: '60px',
            radius: [25, 30]
          },
          {
            id: 'pieId2',
            value: '60%',
            text: '',
            color: '#7846C6',
            title: '',
            width: '60px',
            height: '60px',
            radius: [25, 30]
          },
          {
            id: 'pieId3',
            value: '82%',
            text: '',
            color: '#2F7DB2',
            title: '',
            width: '60px',
            height: '60px',
            radius: [25, 30]
          }
        ],
        safeCommunity: [
          {
            name: '南塘二村107弄小区',
            safetyRate: 22
          },
          {
            name: '南塘西村小区',
            safetyRate: 19
          },
          {
            name: '金子名邸',
            safetyRate: 12
          }
        ],
        unsafeCommunity: [
          {
            name: '延吉中路320弄小区',
            unsafetyRate: 78
          },
          {
            name: '东方名邸',
            unsafetyRate: 56
          },
          {
            name: '胜丰小区',
            unsafetyRate: 33
          }
        ]
      }
    },
    components: {
      HeadNav,
      Pie
    },
    mounted(){
      this.drawTrend();
    },
    methods: {
      drawTrend() {
        let trend = document.getElementById('trend')
        let myChart = this.$echarts.init(trend)

        //自适应宽高
        let myChartContainer = function () {

          trend.style.width = '100%'
        }
        myChartContainer()

        myChart.setOption({
          title: {
            text: '公共安全／公共服务／公共管理 指数总向',
            left: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: '#eee',
              fontSize: 14
            }
          },
          backgroundColor: "#3A3B6A",// "#3A3B6A",
          tooltip: {
          },
          grid: {
            top: '25%',
            left: '1%',
            right: '2%',
            bottom: '8%',
            containLabel: true,
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#ccc'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#ccc',
                margin: 15,
              },
            },
            axisTick: { show: false,},
            data: ['6.1', '6.2', '6.3', '6.4', '6.5', '6.6', '6.7'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            max:100,
            splitNumber: 5,
            splitLine: {
              show: false,
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: '#ccc'
              }
            },
            axisLabel: {
              margin:20,
              textStyle: {
                color: '#ccc',

              },
            },
            axisTick: { show: false,},
          }],
          series: [
              {
              name: '公共安全',
              type: 'line',
              smooth: true, //是否平滑曲线显示
              symbolSize:0,

              lineStyle: {
                normal: {
                  color: "#046BBF"   // 线条颜色
                }
              },
              areaStyle: { //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0,  color: 'rgba(131,148,242, 0.9)'},
                    { offset: 0.7,  color: 'rgba(131,148,242, 0)'}
                  ], false),

                  shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
              },
              data: [90, 78, 84, 36, 50, 92, 98]
            },
            {
              name: '公共服务',
              type: 'line',
              smooth: true, //是否平滑曲线显示
              symbolSize:0,

              lineStyle: {
                normal: {
                  color: "#7846C6"   // 线条颜色
                }
              },
              areaStyle: { //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0,  color: 'rgba(187,141,241, 0.9)'},
                    { offset: 0.7,  color: 'rgba(187,141,241, 0)'}
                  ], false),

                  shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
              },
              data: [80, 78, 90, 64, 72, 92, 85]
            },
            {
              name: '公共管理',
              type: 'line',
              smooth: true, //是否平滑曲线显示
              symbolSize:0,

              lineStyle: {
                normal: {
                  color: "#2F7DB2"   // 线条颜色
                }
              },
              areaStyle: { //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0,  color: 'rgba(135,195,245, 0.9)'},
                    { offset: 0.7,  color: 'rgba(135,195,245, 0)'}
                  ], false),

                  shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                  shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
                }
              },
              data: [20, 68, 54, 72, 49, 35, 60]
            }
          ]
        });

        //浏览器大小改变时重置大小
        window.onresize = function () {
          myChartContainer();
          myChart.resize();
        };
      }
    }
  }
</script>


<style>
  .index-page .index {
    width: 100%;
  }


  /* 高新区综合大脑样式开始 */
  .index-page .content-container {
    padding: 20px;
  }

  .index-page .content-container .content-left .box-card {
    width: 100%;
    height: 624px;
    background: #68C460;
  }
  .index-page .content-container .content-left .el-carousel__container {
    min-height: 300px;
  }
  .index-page .content-container .content-left img {
    width: 100%;
    height: auto;
  }
  .index-page .content-container .content-left .box-card .head {
    color: white;
    text-align: center;
    line-height: 60px;
    font-size: 18px;
  }
  .index-page .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    margin: 0;
  }
  .index-page .content-container .content-left .box-card .foot {
    color: white;
    text-align: center;
    line-height: 80px;
    font-size: 22px;
  }
  /* 高新区综合大脑样式结束 */

  /* 右侧内容样式开始 */
  .index-page .top {
    margin-bottom: 20px;
  }
  .index-page .content-container .content-right .head {
    color: #eee;
    font-size: 14px;
    text-align: center;
    line-height: 42px;
  }
  .index-page .content-container .content-right .index-pie{
    margin: auto;
  }
  .index-page .content-container .content-right .head .title-link {
    font-size: 16px;
    color: #eee;
    cursor: pointer;
  }
  .index-page .content-container .content-right .head .title-link:hover {
    color: #fff;
  }
  .index-page .content-container .content-right .head .label {
    display: inline-block;
    font-size: 12px;
    line-height: 16px;
    color: #fff;
    width: 48px;
    height: 16px;
    text-align: center;
    border-radius: 3px;
  }
  .index-page .content-container .content-right .safe-container .head .label {
    background-color: #046BBF;
  }
  .index-page .content-container .content-right .service-container .head .label {
    background-color: #7846C6;
  }
  .index-page .content-container .content-right .manage-container .head .label {
    background-color: #2F7DB2;
  }
  .index-page .content-container .content-right .good, .index-page .content-container .content-right .bad {
    padding: 0 10px;
  }
  .index-page .safe-container .head {
    background-color: #8394F2;
  }
  .index-page .service-container .head {
    background-color: #BB8DF1;
  }
  .index-page .manage-container .head {
    background-color: #87C3F5;
  }
  .index-page .content-container .content-right .title {
    font-size: 14px;
    line-height: 32px;
    color: #333;
  }
  .index-page .content-container .content-right .item {
    font-size: 12px;
    color: #545454;
    line-height: 28px;
    border-bottom: 1px dashed #eee;
  }
  .index-page .service-container .good item:last-child {
    border-bottom: none;
  }
  .index-page .content-container .content-right .item .label{
    float: right;
    font-size: 10px;
    line-height: 14px;
    color: #fff;
    width: 32px;
    height: 14px;
    text-align: center;
    border-radius: 3px;
    margin-top: 9px;
  }
  .index-page .content-container .content-right .good .item .label{
    background-color: #76A9E2;
  }
  .index-page .content-container .content-right .bad .item .label{
    background: linear-gradient(to right, #F39800 , #76A9E2);
  }
  /* 右侧内容样式结束 */

  /* 公共安全、公共服务、公共管理趋势样式开始 */

  /* 公共安全、公共服务、公共管理趋势样式结束 */



  /* 底部样式开始 */
  .index-page .foot-container {
    background-color: #3A3B6A;
    color: white;
    font-size: 14px;
    font-weight: normal;
    line-height: 80px;
    text-align: center;
  }
  /* 底部样式结束 */


  @media (max-width:992px) {
    .index-page .top {
      margin-top: 20px;
    }
  }


</style>
