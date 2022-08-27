import { useState } from 'react';
import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';
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
      </main>
    </>
  );
}

export default App;
