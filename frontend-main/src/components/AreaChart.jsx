// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend,
// } from 'chart.js';
// import { Line } from 'react-chartjs-2';
// import faker from 'faker';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Filler,
//   Legend
// );



// export function AreaChart() {
//     const options = {
//     responsive: true,
//     plugins: {
//         legend: {
//         position: 'top',
//         },
//         title: {
//         display: true,
//         text: 'Reviews',
//         },
//         labels: false,
//     },
//     };

//     const labels = ['Loved the course!', 'Were okay with the course!', 'Found the course little problematic...', 'Didnt enjoy the course!', 'Hated the course!'];

//     const data = {
//     labels,
//     datasets: [
//         {
//         fill: true,
//         label: 'Dataset 2',
//         data: [10,12,11,15,21],
//         borderColor: 'rgb(53, 162, 235)',
//         backgroundColor: 'rgba(53, 162, 235, 0.5)',
//         },
//     ],
//     };
//   return <Line options={options} data={data} />;
// }
