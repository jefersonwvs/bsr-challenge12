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
