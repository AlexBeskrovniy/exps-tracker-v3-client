import moment from 'moment';

import { RecordsInterface } from 'types';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

type ThisMonthCategoriesChartProps = {
    records: RecordsInterface[]
}

type ChartData = {
    [index: string]: number
}

const ThisMonthCategoriesChart = ({ records }: ThisMonthCategoriesChartProps) =>{
	const thisMonthRecords = records.filter(record =>
        Number(record.createdAt) >= moment().utc().startOf('month').valueOf()
    );

    const finalInfo = (data: RecordsInterface[]) => {
        const result: ChartData = data.reduce((accum: ChartData, record) => {
            const name = record.categoryName ? record.categoryName : "No category"
            if (!accum[name]) {
                accum[name] = +record.money;
            } else {
                accum[name] += +record.money;
            }
            return accum;
        }, {});
        
        const labels: string[] = [];
        const spents: number[] = [];
        Object.entries(result).map(([ name, money ]) => {
            labels.unshift(name);
            spents.unshift(money);
        });

        return { labels: labels, spents: spents }
    }
    
    const chartInfo = finalInfo(thisMonthRecords);

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'This Month Spents By Categories'
            },
            legend: {
                position: 'bottom',
                labels: {
                    padding: 15,
                    usePointStyle: true
                }
              }
        },
        responsive: true,
        interaction: {
            intersect: false
        }
      } as const;

    const data = {
        labels: chartInfo.labels,
        datasets: [
          {
            data: chartInfo.spents,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(24, 95, 15, 0.2)',
              'rgba(18, 59, 196, 0.2)',
              'rgba(161, 12, 136, 0.2)',
              'rgba(53, 127, 161, 0.2)',
              'rgba(238, 205, 58, 0.2)',
              'rgba(243, 76, 10, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(24, 95, 15, 1)',
              'rgba(18, 59, 196, 1)',
              'rgba(161, 12, 136, 1)',
              'rgba(53, 127, 161, 1)',
              'rgba(238, 205, 58, 1)',
              'rgba(243, 76, 10, 1)'
            ],
            borderWidth: 1,
          },
        ],
      };

    return (
        <div className="d-flex justify-content-center mx-auto" style={{maxWidth: '500px'}}>
            <Doughnut options={options} data={data} />
        </div>
    );
}

export default ThisMonthCategoriesChart;