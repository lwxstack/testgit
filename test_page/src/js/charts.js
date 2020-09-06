var curve_chart = echarts.init(document.getElementById('curve_chart'));
var pie_chart = echarts.init(document.getElementById('pie_chart'));
var bar_chart = echarts.init(document.getElementById('bar_chart'));

fetch('https://edu.telking.com/api/?type=month')
  .then(function (response) {
    response.json().then((res) => {
      curve_chart.setOption({
        title: {
          text: '曲线图数据展示',
          x: 'center',
          y: 30,
          textStyle: {
            fontSize: 20,
            color: '#262b2e'
          }
        },
        backgroundColor: '#fff',
        xAxis: {
          type: 'category',
          data: res.data.xAxis,
          axisTick: {
            show: false,
          },
          boundaryGap: false,
          axisTick: {
            show: false, //不显示刻度线
          },
          axisLabel: {
            color: 'black', //x轴上的字体颜色
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'rgba(12, 102, 173, .5)', //x轴的轴线宽度和颜色
            }
          },
        },
        yAxis: {
          type: 'value',
          name: '人',
          axisTick: {
            show: false,
          },
          axisLabel: {
            color: 'black',
          },
          axisLine: {
            lineStyle: {
              width: 2,
              color: 'rgba(12, 102, 173, .5)',
            }
          },
          splitLine: {
            show: false
          }
        },
        series: [    
          {
            type: 'line',
            data: res.data.series,
            symbol: 'none',
            smooth: true,
            itemStyle: {
              normal: {
                color: 'blue'
              }
            },
            areaStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: 'skyblue'
                },{
                  offset: 1,
                  color: '#fff'
                }])
              }
            },
          }
        ]
      });
    })
  })

fetch('https://edu.telking.com/api/?type=week')
  .then(function (response) {
    response.json().then((res) => {
      pie_chart.setOption({
        title: {
          text: '饼状图数据展示',
          x: 'center',
          y: 40,
          textStyle: {
            fontSize: 20,
            color: '#262b2e'
          }
        },
        backgroundColor: '#fff',
        series: [
          {
            type: 'pie',
            radius: '50%',
            center: ['50%', '60%'],
            data: (function() {
              var rs = [];
              for(var item in res.data.xAxis) {
                rs.push({
                  name: res.data.xAxis[item],
                  value: res.data.series[item]
                });
              }
              return rs;
            })()
          }
        ]
      })
    },true)
  })

fetch('https://edu.telking.com/api/?type=week')
  .then(function (response) {
    response.json().then((res) => {
      bar_chart.setOption({
        title: {
          text: '柱状图数据展示',
          x: 'center',
          y: 40,
          textStyle: {
            fontSize: 20,
            color: '#262b2e'
          }
        },
        xAxis: {
          type: 'category',
          data: res.data.xAxis
        },
        yAxis: {
          name: '商品数'
        },
        backgroundColor: '#fff',
        series: [{
          type: 'bar',
          color: 'skyblue',
          barWidth: '35%',
          data: res.data.series
        }
        ]
      })
    },true)
  })
