import './App.css';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {
  return (
    <>
      <Header />
      <main className="app-container">
        <Filter />
      </main>
    </>
  );
}

export default App;
