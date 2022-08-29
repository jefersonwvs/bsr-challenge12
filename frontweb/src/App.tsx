import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesSummary from './components/SalesSummary';
import { FilterData } from './types';

function App() {
  //
  const [filterData, setFilterData] = useState<FilterData>();
  const onFilterChange = function (filter: FilterData) {
    setFilterData(filter);
    console.log(filterData, filter);
  };

  return (
    <>
      <Header />
      <main className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <div className="main-card">
          <SalesSummary />
          <div>GRAPH</div>
        </div>
      </main>
    </>
  );
}

export default App;
