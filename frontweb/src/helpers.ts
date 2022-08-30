import { SalesByGender, PieChartData } from './types';

export const buildSalesByGenderChart = (
  sales: SalesByGender[]
): PieChartData => {
  const labels = sales.map((sale) =>
    sale.gender === 'FEMALE'
      ? 'Feminino'
      : sale.gender === 'MALE'
      ? 'Masculino'
      : 'Outro'
  );
  const series = sales.map((sale) => sale.sum);

  return { labels, series };
};
