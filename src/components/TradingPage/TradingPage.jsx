import { useState } from 'react';
import CurrencyPairSelector from '../CurrencyPairSelector/CurrencyPairSelector';
import TradingModalVolume from '../TradingModalVolume/TradingModalVolume';
import TradingSideButtons from '../TradingSideButtons/TradingSideButtons';
import TradingWatch from '../TradingWatch/TradingWatch';
import styles from './TradingPage.module.css';

function TradingPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <TradingWatch />
        <CurrencyPairSelector />
        <TradingSideButtons />
      </div>
      <TradingModalVolume />
    </>
  );
}

export default TradingPage;
