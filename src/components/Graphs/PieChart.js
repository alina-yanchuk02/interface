import React, { useState,} from 'react'
import ReactEcharts from 'echarts-for-react'

class PieChart extends React.Component {
  
  constructor(props) {
    super(props)
  }

  updateAxisInfo = (event) => {
    const xAxisInfo = event.axesInfo[0];
    if (xAxisInfo) {
      const dimension = xAxisInfo.value + 1;
      let echarts_instance = this.refs.echarts_react.getEchartsInstance();
      echarts_instance.setOption({
        series: {
          id: 'pie',
          label: {
            formatter: '{b}: {@[' + dimension + ']} artigos  ({d}%)'
          },
          encode: {
            value: dimension,
            tooltip: dimension
          }
        }
      });
    }
}

  EventsDict = {
    'updateAxisPointer': this.updateAxisInfo
}

    getOption = () => ({
        legend: {textStyle: {
          fontSize: 16,
          fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        
        },},
        tooltip: {
          trigger: 'axis',
          showContent: false
        },
        dataset: {
          source: [
            ['product', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
            ['Público', 3, 26, 21, 24, 19, 6, 0, 1, 0, 0, 9, 17, 3, 3, 0, 3, 2, 2, 3, 4, 1],
            ['Observador', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6, 11, 18, 30, 31, 18],
            ['Diário de Notícias',  2, 1, 1, 2, 1, 5, 13, 10, 6, 0, 5, 1, 0, 0, 0, 0, 2, 1, 1, 0, 0],
            ['Expresso', 2, 4, 0, 0, 0, 0, 0, 0, 0, 2, 13, 12, 9, 4, 1, 14, 6, 13, 9, 14, 15],
            ['Correio da Manhã', 0, 1, 0, 0, 1, 0, 0, 6, 1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 1 ],
            ['Jornal de Notícias', 2, 6, 2, 1, 2, 1, 1, 4, 3, 0, 2, 2, 0, 0, 1, 0, 1, 0, 1, 0, 1],
            ['Visão', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 0, 3, 1, 2, 1, 3],
            ['Sábado', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 1, 0, 1, 2, 0],
            ['A Bola', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 1, 0, 0, 3, 1, 0, 3]
          ]
        },
        xAxis: { type: 'category', name:"Ano"},
        yAxis: { gridIndex: 0, name:'Quantidade' },
        grid: { top: '55%' },
        series: [
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'line',
            smooth: true,
            seriesLayoutBy: 'row',
            emphasis: { focus: 'series' }
          },
          {
            type: 'pie',
            id: 'pie',
            radius: '30%',
            center: ['50%', '25%'],
            emphasis: {
              focus: 'self'
            },
            itemStyle: {
              borderRadius: 10,
              borderColor: 'black',
              borderWidth: 2
            },
            label: {
              formatter: '{b}: {@2020} artigos ({d}%)',
              textStyle: {
                fontSize: 14,
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
              },
            },
            encode: {
              itemName: 'product',
              value: '2020',
              tooltip: '2020'
            }
          }
        ]
      });

     

      render(){
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "800px", width: "100%", marginTop: "70px" }}
                onEvents={this.EventsDict}
                ref='echarts_react'
                />
        );
      }
        
            
 
    
}

export default PieChart