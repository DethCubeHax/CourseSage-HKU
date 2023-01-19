import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

//1-0.8-loved the course
//0.8-0.6-enjoyed the course
//0.6-0.4-didnt mind the course
//0.4-0.2-didn't enjoy the course
//0.0-0.2- hated the course

export function DoughnutGraph() {
    const data = {
    labels: ['1.0<x<0.8-Loved the course!', '0.8<x<0.6-Didnt mind the course!', '0.6<x<0.4-Bearable course!', '0.4<x<0.2-Unbearable course!', '0.2<x<0.0-Hated the course!'],
        datasets: [
            {
            label: '# of Reviews',
            data: [12, 19, 3, 5, 2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',

            ],
            borderColor: [
                'rgba(255, 99, 132, 1.2)',
                'rgba(54, 162, 235, 1.2)',
                'rgba(255, 206, 86, 1.2)',
                'rgba(75, 192, 192, 1.2)',
                'rgba(153, 102, 255, 1.2)',
            ],
            borderWidth: 1,
            
            },
            
        ],
    };
    const options = {
        plugins: {
            legend: {
                display: false,
                position: "right"
            },
            title: {
                display: true,
                text: 'Reviews by positivity level',
                color: "black",
                font: {
                    size: 15
                }
            },
     
        },

    }
  return <Doughnut options={options} data={data} />;
}
