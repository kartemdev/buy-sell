import { useDispatch, useSelector } from 'react-redux';
import { onOpen } from '../../redux/slices/modalSlice';
import styles from './TradingSideButtons.module.css';

function TradingSideButtons() {
  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);

  const dispatch = useDispatch();

  return (
    <div className={styles.btnContainer}>
      <button type="button" className={styles.btnBuy} onClick={() => dispatch(onOpen('BUY'))}>
        BUY<br />
        {chosenPair.sidePriceBuy}
      </button>
      <button type="button" className={styles.btnSell} onClick={() => dispatch(onOpen('SELL'))}>
        SELL<br />
        {chosenPair.sidePriceSell}
      </button>
    </div>
  );
}

export default TradingSideButtons;
