import React from 'react'
import ReactEcharts from 'echarts-for-react'

class BarChart extends React.Component {
    
    getOption = () => ({
        tooltip: {
            trigger: 'axis',
            axisPointer: {
              // Use axis to trigger tooltip
              type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
            },
            formatter: (params) => {
              return `
                        Sentido dos artigos em ${params[0].name}: <br />
                        ${params[1].marker}  ${params[1].seriesName}: <strong>${params[1].value}</strong> <br />
                        ${params[0].marker}  ${params[0].seriesName}: <strong>${params[0].value}</strong>
                        `;
            },
          },
         
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            name: 'Ano',
            type: 'category',
            data: ["2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020", "2021" ]
          },
          yAxis: {
            name: 'Quantidade',
            type: 'value'
          },
          series: [
            {
              color: "#f4d35e",
              name: 'Estigmatizante',
              type: 'bar',
              stack: 'total',
              label: {
                show: false
              },
              itemStyle: {
                borderColor: 'black',
                borderWidth: 2
              },
              emphasis: {
                focus: 'series'
              },
              data: [9, 38, 24, 27, 23, 12, 14, 21, 10, 2, 34, 40, 13, 9, 5, 23, 26, 38, 48, 52, 42]
            },
            {
              color: "#4361ee",
              name: 'Literal',
              type: 'bar',
              stack: 'total',
              label: {
                show: false,
              },
              itemStyle: {
                borderColor: 'black',
                borderWidth: 2
              },
              emphasis: {
                focus: 'series'
              },
              data: [4, 39, 20, 9, 13, 14, 2, 8, 9, 2, 32, 42, 15, 3, 7, 46, 29, 38, 33, 55, 48]
            },
          ]
      });

      render(){
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "500px", width: "930px", marginLeft:"10px", marginTop:"30px"}}
            />
        );
      }
        
            
 
    
}

export default BarChart