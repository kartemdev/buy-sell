import TradingWatch from '../TradingWatch/TradingWatch';
import styles from './TradingPage.module.css';

function TradingPage() {
  return (
    <div className={styles.mainContainer}>
      <TradingWatch />
      <div>
        <select>
          <option>usd/rub</option>
        </select>
      </div>
      <div>
        <button type="button">BUY</button>
        <button type="button">SELL</button>
      </div>
    </div>
  );
}

export default TradingPage;
