export type Store = {
  id: number;
  name: string;
};

export type FilterData = {
  store?: Store;
};

export type SalesSummaryData = {
  sum: number;
};

type Gender = 'FEMALE' | 'MALE' | 'OTHER';

export type SalesByGender = {
  gender: Gender;
  sum: number;
};

export type PieChartData = {
  labels: string[];
  series: number[];
};
