import './styles.css';

import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard(props: Props) {
  const { labels = [], name, series = [] } = props;

  return (
    <div className="pie-chart-card">
      <ReactApexChart
        options={buildPieChartConfig(labels, name)}
        type="donut"
        width="340"
        height="340"
        series={series}
      />
    </div>
  );
}

export default PieChartCard;
