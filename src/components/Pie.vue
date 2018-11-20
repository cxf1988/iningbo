<template>
    <div :id="pieData.id" class="index-pie" :style="{width: pieData.width, height: pieData.height}"></div>
</template>

<script>
  export default {
    name: 'pie',
    props:['pieData'],
    data () {
      return {

      }
    },
    mounted(){
      this.drawPie();
    },
    methods: {
      drawPie(){
        let data = this.pieData
        let myChart = this.$echarts.init(document.getElementById(data.id));


        let value = data.value || 0

        let dataStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          }
        };
        let placeHolderStyle = {
          normal: {
            color: '#e8e8e8',//未完成的圆环的颜色
            label: {
              show: false
            },
            labelLine: {
              show: false
            }
          },
          emphasis: {
            color: '#e8e8e8'//未完成的圆环的颜色
          }
        };

        myChart.setOption({
          title: {
            text: value,
            x: 'center',
            y: 'center',
            textStyle: {
              fontWeight: 'normal',
              color: data.color,
              fontSize: 14
            }
          },
          color: [data.color, data.color, '#fff'],
          tooltip: {
            show: false,
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          legend: {
            show: false,
            itemGap: 12,
            data: ['01', '02']
          },
          toolbox: {
            show: false,
            feature: {
              mark: {
                show: true
              },
              dataView: {
                show: true,
                readOnly: false
              },
              restore: {
                show: true
              },
              saveAsImage: {
                show: true
              }
            }
          },
          series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            radius: data.radius,
            itemStyle: dataStyle,
            hoverAnimation: false,

            data: [{
              value: parseInt(value),
              name: '01'
            }, {
              value: 100 - parseInt(value),
              name: 'invisible',
              itemStyle: placeHolderStyle
            }

            ]
          }]
        });
      }
    }
  }
</script>


<style>

</style>
