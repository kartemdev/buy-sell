import { Route, Routes } from 'react-router-dom';
import './App.css';
import TradingPage from '../pages/TradingPage/TradingPage';
import ArchivePage from '../pages/ArchivePage/ArchivePage';
import NavBar from '../components/NavBar/NavBar';

function App() {
  return (
    <div className="MainDiv">
      <div className="AppDiv">
        <NavBar />
        <div className="container">
          <Routes>
            <Route path="/" element={<TradingPage />} />
            <Route path="/archive" element={<ArchivePage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
