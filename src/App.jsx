import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import TradingPage from './components/TradingPage/TradingPage';

function App() {
  return (
    <div className="MainDiv">
      <div className="AppDiv">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<TradingPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
