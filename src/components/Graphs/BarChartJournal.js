import React from 'react'
import ReactEcharts from 'echarts-for-react'

class BarChartJournal extends React.Component {
    xAxisData = [];

    getOption = () => ({
        legend: {
            data: ['Estigmatizante', 'Literal'],
            left: '50%',
            textStyle: {
                fontSize: 16,
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
              },
          },
          
          toolbox: {
            feature: {
              magicType: {
                type: ['stack']
              },
          
            }
          },
          tooltip: {},
          xAxis: {name: 'Quantidade'},
          yAxis: {
            data: ['A Bola', 'Sábado', 'Visão', 'Jornal de Notícias', 'Correio da Manhã', 'Expresso', 'Diário de Notícias', 'Observador', 'Público'],
            name: 'Jornais',
            axisLine: { onZero: true },
            splitLine: { show: false },
            splitArea: { show: false },
          
          },
          grid: {
            bottom: 100
          },
          series: [
            {
              name: 'Estigmatizante',
              type: 'bar',
              stack: 'one',
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.3)',
                borderColor: 'black',
                borderWidth: 2
              },
              data: [12, 8, 15, 30, 15, 118, 51, 114, 147],
              color: "#f4d35e",
            },
            {
              color: "#4361ee",
              name: 'Literal',
              type: 'bar',
              stack: 'one',
              itemStyle: {
                shadowBlur: 10,
                shadowColor: 'rgba(0,0,0,0.3)',
                borderColor: 'black',
                borderWidth: 2
              },
              data: [5, 1, 24, 31, 31, 98, 38, 113, 127]
            },
        
          ]
      });

      render(){
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "600px", width: "1200px", marginLeft:"100px", marginTop:"30px"}}
            />
        );
      }
        
            
 
    
}

export default BarChartJournal