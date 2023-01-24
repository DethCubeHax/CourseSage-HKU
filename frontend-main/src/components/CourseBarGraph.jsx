

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);



export function CourseBarGraph(props) {
    console.log(props.props.gradeListDetailed)   //because we wrapped the object into another object
    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },

    },
    };

    const labels = ['A+', 'A', 'A-', 'B+', 'B', 'B-', 'C+', 'C', 'C-', 'D', 'Fail'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Grades',
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: props.props.gradeListDetailed,
        backgroundColor: ['rgba(255, 99, 132, 0.65)',
                          'rgba(54, 162, 235, 0.65)',
                          'rgba(255, 206, 86, 0.65)',
                          'rgba(75, 192, 192, 0.65)',
                          'rgba(153, 102, 255, 0.65)',
                          'rgba(255, 159, 64, 0.65)',
                          'rgba(50, 114, 243, 0.65)',
                          'rgba(69, 66, 78, 0.65)',
                          'rgba(69, 195, 78, 0.65)',
                          'rgba(198, 195, 78, 0.65)',
                          'rgba(89, 51, 89, 0.65)'
    ]},
        // {
        // label: 'Dataset 2',
        // //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        // data: [10,20,30,40,50],
        // backgroundColor: 'rgba(53, 162, 235, 0.5)',
        // },
    ],
    };
    return <Bar options={options} data={data} />;
}


