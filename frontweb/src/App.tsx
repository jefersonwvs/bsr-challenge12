import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesSummary from './components/SalesSummary';
import { FilterData, SalesSummaryData } from './types';

function App() {
  //
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesSummaryData, setSalesSummaryData] = useState<SalesSummaryData>({
    sum: 0,
  });
  const onFilterChange = function (filter: FilterData) {
    setFilterData(filter);
    console.log(filterData, filter);
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
    }
  }, [filterData]);

  return (
    <>
      <Header />
      <main className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="main-card">
          <SalesSummary salesSummaryData={salesSummaryData} />
          <div>GRAPH</div>
        </div>
      </main>
    </>
  );
}

export default App;
