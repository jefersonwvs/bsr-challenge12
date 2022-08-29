import { SalesSummaryData } from '../../types';
import './styles.css';

type Props = {
  salesSummaryData: SalesSummaryData;
};

function SalesSummary(props: Props) {
  //
  const { salesSummaryData } = props;
  const sum = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(salesSummaryData.sum);

  return (
    <div className="sales-summary-container">
      <p className="sales-summary-value">{sum}</p>
      <p className="sales-summary-description">Total de vendas</p>
    </div>
  );
}

export default SalesSummary;
