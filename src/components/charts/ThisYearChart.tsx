import moment from 'moment';

import { RecordsInterface } from 'types';

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
  
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

type ThisYearChartProps = {
    records: RecordsInterface[]
}

type ChartData = {
    [index: string]: number
}
  

const ThisYearChart = ({ records }: ThisYearChartProps) => {
	const thisYearRecords = records.filter(record =>
        Number(record.createdAt) >= moment().utc().startOf('year').valueOf()
    );

    const getMonths = () => {
        const data: ChartData = {};
        moment.months().reverse().map(month => data[month] = 0);
        return data;
    }
    
    const months = getMonths();

    const chartInfoHandler = (data: RecordsInterface[]) => {
        const result = data.reduce((accum, curent) => {
            const date = moment(+curent.createdAt).format('MMMM');
            if(!accum[date]) {
                accum[date] = +curent.money;
            } else {
                accum[date] += +curent.money;
            }

            return accum;
        }, months );

        const labels: string[] = [];
        const spents: number[] = [];

        Object.entries(result).map(([ date, money ]) => {
            labels.unshift(date);
            spents.unshift(money);
        });

        return { labels: labels, spents: spents };
    }
    const finalInfo = chartInfoHandler(thisYearRecords);
    
    const options = {
      plugins: {
          title: {
          display: true,
          text: 'This Year Spents'
          },
          legend: {
            display: false
          }
      },
      responsive: true,
      interaction: {
          intersect: false
      }
    };
    
    const data = {
      labels: finalInfo.labels,
      datasets: [
          {
          data: finalInfo.spents,
          backgroundColor: 'rgb(234, 162, 26)',
          borderColor: 'rgb(234, 162, 26)'
          }
      ]
    };

    return (
      <div className="d-flex justify-content-center mx-auto" style={{maxWidth: '800px'}}>
        <Bar options={options} data={data} />
      </div>
    );
}

export default ThisYearChart;