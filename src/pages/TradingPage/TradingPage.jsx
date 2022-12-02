import CurrencyPairSelector from './Ui/CurrencyPairSelector/CurrencyPairSelector';
import ModalVolume from './Ui/ModalVolume/ModalVolume';
import SideButtons from './Ui/SideButtons/SideButtons';
import Watch from './Ui/Watch/Watch';
import styles from './TradingPage.module.css';

function TradingPage() {
  return (
    <>
      <div className={styles.mainContainer}>
        <Watch />
        <CurrencyPairSelector />
        <SideButtons />
      </div>
      <ModalVolume />
    </>
  );
}

export default TradingPage;
