import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import CurrencyPairSelector from './Ui/CurrencyPairSelector/CurrencyPairSelector';
import ModalVolume from './Ui/ModalVolume/ModalVolume';
import SideButtons from './Ui/SideButtons/SideButtons';
import Watch from './Ui/Watch/Watch';
import styles from './TradingPage.module.css';
import { setNavbarState } from '../../redux/slices/uiSlices/navbarStateSlice';

function TradingPage() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setNavbarState(1));
  }, []);

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
