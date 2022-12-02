import { useDispatch, useSelector } from 'react-redux';
import { onOpen } from '../../../../redux/slices/modalSlice';
import styles from './SideButtons.module.css';

function SideButtons() {
  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);

  const dispatch = useDispatch();

  return (
    <div className={styles.btnContainer}>
      <button type="button" className={chosenPair.name ? styles.btnBuy : `${styles.btnBuy } ${ styles.disabled}`} onClick={() => dispatch(onOpen('BUY'))}>
        BUY<br />
        {chosenPair.sidePriceBuy}
      </button>
      <button type="button" className={chosenPair.name ? styles.btnSell : `${styles.btnSell } ${ styles.disabled}`} onClick={() => dispatch(onOpen('SELL'))}>
        SELL<br />
        {chosenPair.sidePriceSell}
      </button>
    </div>
  );
}

export default SideButtons;
