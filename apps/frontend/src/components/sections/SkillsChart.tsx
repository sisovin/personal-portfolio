import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';

const SkillsChart: React.FC = () => {
  const data = {
    labels: ['JavaScript', 'TypeScript', 'React', 'Node.js', 'CSS', 'HTML'],
    datasets: [
      {
        label: 'Skills',
        data: [20, 15, 25, 10, 15, 15],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <div className="w-full max-w-md mx-auto">
          <Pie data={data} />
        </div>
      </div>
    </section>
  );
};

export default SkillsChart;
