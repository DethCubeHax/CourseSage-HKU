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



export function Chart(props) {
  // console.log(props.gradeList)
  // const grades = []
  // props.gradeList.map((grade) => {
  //   return (
  //     grades=[...grades,grade]
  //   )
  // })
    const options = {
    responsive: true,
    plugins: {
        legend: {
        position: 'top',
        },
        // title: {
        // display: true,
        // text: 'Chart.js Bar Chart',
        // },
    },
    };

    const labels = ['A', 'B', 'C', 'D', 'Pass', 'Fail'];

    const data = {
    labels,
    datasets: [
        {
        label: 'Grades',
        //   data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
        data: props.props.gradeList,
        backgroundColor: ['rgba(255, 99, 132, 0.65)',
                          'rgba(54, 162, 235, 0.65)',
                          'rgba(255, 206, 86, 0.65)',
                          'rgba(75, 192, 192, 0.65)',
                          'rgba(153, 102, 255, 0.65)',
                          'rgba(255, 159, 64, 0.65)',
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


