import React from 'react';
import { Line } from 'react-chartjs-2';

import { Chart, LineElement,CategoryScale,LinearScale ,PointElement, } from 'chart.js';

Chart.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    
)



const ChartContainer = () => {

    const data = {
        labels: [ '','Week 1', 'Week 2' , 'Week 3', 'Week 4'],
        datasets:[ 
            {
                labels:'Sales of Week1',
                data:[100,400,200,300,250],
                borderColor: '#E9A0A0',
                backgroundColor:'transparent',
                tension: 0.4,
                pointBorderWidth:2,
            },
            {
                labels:'Sales of week2',
                data:[200,450,150,450,250],
                borderColor:'#9BDD7C',
                tension:0.4,
            }
        ]
    }

    const options = {
        plugins : {
            legend:true,
            subtitle:{
                display: true,
                text: 'Chart Nodu'
            }
        },
        scales:{
            y: {
                min:0,
                max:500,
                ticks:{
                    stepSize:100,
                    tickLength:500,
                }
            },
            x:{
                grid:{
                    display: false,
                    width:100,
                    
                }
                ,
                length:100
            },

        },
        elements:{
            point:{
                pointStyle:false,
            }
        },
        layout:{
            padding:{
                left:0
            }
        }

    }


  return (
    <div className=''>
            <Line
                data={data}
                options={options}
            >    
            </Line>

    </div>
  )
}

export default ChartContainer;