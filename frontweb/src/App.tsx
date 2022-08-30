import './App.css';

import axios from 'axios';
import { useEffect, useState } from 'react';

import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/PieChartCard';
import SalesSummary from './components/SalesSummary';
import { buildSalesByGenderChart } from './helpers';
import {
  FilterData,
  PieChartData,
  SalesByGender,
  SalesSummaryData,
} from './types';

function App() {
  //
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesSummaryData, setSalesSummaryData] = useState<SalesSummaryData>({
    sum: 0,
  });
  const [pieChartData, setPieChartData] = useState<PieChartData>();

  const onFilterChange = function (filter: FilterData) {
    setFilterData(filter);
  };

  useEffect(() => {
    if (filterData?.store) {
      axios
        .get(
          `http://localhost:8080/sales/summary?storeId=${filterData?.store?.id}`
        )
        .then((response) => {
          setSalesSummaryData(response.data as SalesSummaryData);
        });

      axios
        .get(
          `http://localhost:8080/sales/by-gender?storeId=${filterData?.store?.id}`
        )
        .then((response) => {
          const salesByGender = response.data as SalesByGender[];
          const pieChartData = buildSalesByGenderChart(salesByGender);
          setPieChartData(pieChartData);
        });
    }
  }, [filterData]);

  return (
    <>
      <Header />
      <main className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="main-card">
          <SalesSummary salesSummaryData={salesSummaryData} />
          <PieChartCard
            labels={pieChartData?.labels}
            name=""
            series={pieChartData?.series}
          />
        </div>
      </main>
    </>
  );
}

export default App;
