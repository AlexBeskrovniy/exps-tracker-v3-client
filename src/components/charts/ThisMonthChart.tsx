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

type ThisMonthChartProps = {
  records: RecordsInterface[]
}

type ChartData = {
  [index: string]: number
}

const ThisMonthChart = ({ records }: ThisMonthChartProps) => {
	const thisMonthRecords = records.filter((record: RecordsInterface) => {
       return Number(record.createdAt) > moment().utc().startOf('month').valueOf();
    });

const daysCount = moment(moment().format('YYYY-MM')).daysInMonth();

const getDates = () => {
  const data: ChartData = {};
  let counter = 1;
  do {
    const dateLabel = moment().date(counter).format('MMM Do YY');
    data[dateLabel] = 0;
    counter++;
  } while (counter <= daysCount);
  return data;
}
const dates = getDates();

const chartInfoHandler = (data: RecordsInterface[]) => {
  const result = data.reduce((accum, curent) => {
      const date = moment(+curent.createdAt).format('MMM Do YY');
      if(!accum[date]) {
        accum[date] = curent.money;
      } else {
        accum[date] += curent.money;
      }
      return accum;
  }, dates);
  
    const labels: string[] = [];
    const spents: number[] = [];
    Object.entries(result).map(([ date, money ]) => {
      labels.push(date);
      spents.push(money);
    }
  );

  return { labels: labels, spents: spents };
}

  const finalInfo = chartInfoHandler(thisMonthRecords);
    
  const options = {
      plugins: {
          title: {
          display: true,
          text: 'This Month Spents'
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
      <div style={{maxWidth: '800px'}}>
        <Bar options={options} data={data} />
      </div>
    );
}

export default ThisMonthChart;