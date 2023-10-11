import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPrices } from '../../../redux/slices/chosenCurrencyPairSlice';
import { onOpen } from '../../../redux/slices/uiSlices/modalSlice';
import styles from './SideButtons.module.scss';

function SideButtons() {
  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);
  const { list } = useSelector((store) => store.currenciesPairs);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!chosenPair.name) {
      return;
    }

    const staticPair = list.find((pair) => pair.name === chosenPair.name);

    const result = {
      sidePriceBuy: +(Math.random() * ((staticPair.sidePriceBuy + 0.02)
         - (staticPair.sidePriceBuy - 0.02))
          + staticPair.sidePriceBuy - 0.02)
        .toFixed(staticPair.sidePriceBuy.toString().split('.')[1].length),
      sidePriceSell: +(Math.random() * ((staticPair.sidePriceSell + 0.02)
      - (staticPair.sidePriceSell - 0.02))
       + staticPair.sidePriceSell - 0.02)
        .toFixed(staticPair.sidePriceSell.toString().split('.')[1].length),
    };

    const id = setTimeout(() => {
      dispatch(setPrices({ ...chosenPair, ...result }));
    }, 1000 * 2);

    // eslint-disable-next-line consistent-return
    return () => {
      clearTimeout(id);
    };
  }, [chosenPair.sidePriceBuy, chosenPair.sidePriceSell]);

  return (
    <div className={styles.btnContainer}>
      <button
        type="button"
        className={chosenPair.name ? null : `${styles.disabled}`}
        onClick={() => dispatch(onOpen('BUY'))}
      >
        BUY<br />
        {chosenPair.sidePriceBuy}
      </button>
      <button
        type="button"
        className={chosenPair.name ? null : `${styles.disabled}`}
        onClick={() => dispatch(onOpen('SELL'))}
      >
        SELL<br />
        {chosenPair.sidePriceSell}
      </button>
    </div>
  );
}

export default SideButtons;
