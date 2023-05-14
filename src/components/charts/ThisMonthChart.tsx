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

const ThisMonthChart = (props) => {
    console.log(props.records);
	const thisMonthRecords = props.records.filter((record: RecordsInterface) => {
        console.log(Number(record.createdAt));
        console.log(moment().startOf('month'));
        Number(record.createdAt) > new Date(moment().startOf('month'))
    });
console.log(thisMonthRecords);
  const daysCount = moment(moment().format('YYYY-MM')).daysInMonth();

const getDates = () => {
  const data = {};
  let counter = 1;
  do {
    data[moment().date(counter).format('MMM Do YY')] = 0;
    counter++;
  } while (counter <= daysCount);
  return data;
}
const dates = getDates();

  const chartInfoHandler = (data) => {
    const result = data.reduce((accum, curent) => {
        const date = moment(curent.createdAt).format('MMM Do YY');
        if(!accum[date]) {
          accum[date] = curent.money;
        } else {
          accum[date] += curent.money;
        }
        return accum;
      }, dates);
    
      const labels = [];
      const spents = [];
      Object.entries(result).map(([ date, money ]) => {
        labels.push(date);
        spents.push(money);
      });

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