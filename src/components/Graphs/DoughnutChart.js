import React from 'react'
import ReactEcharts from 'echarts-for-react'

class DoughnutChart extends React.Component {

 

    getOption = () => ({
        tooltip: {
            trigger: 'item'
          },
          legend: {
            top: '5%',
            left: 'center',
            textStyle: {
              fontSize: 16,
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
            },
          
          },
          series: [
            {
              color: ["#f4d35e", "#4361ee"],
              name: 'Total de artigos com sentido',
              type: 'pie',
              radius: ['60%', '40%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: 'black',
                borderWidth: 2
              },
              textStyle: {
                fontSize: 16,
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
              },
              label: {
                show: false,
                position: 'center'
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: '40',
                  fontWeight: 'bold',
                  formatter: function(d) {
                    return d.name+" "+Math.round(((d.value/978)*100), 2)+"%";
                  }
                }
              },
              labelLine: {
                show: false
              },
              data: [
                { value: 510, name: 'Estigmatizante' },
                { value: 468, name: 'Literal' },
              ]
            }
          ]
    });

    render() {
        return (
            <ReactEcharts
                option={this.getOption()}
                style={{ height: "520px", width: "480px", marginLeft:"20px", marginTop:"50px"}}
            
            />
        )};
}

export default DoughnutChart