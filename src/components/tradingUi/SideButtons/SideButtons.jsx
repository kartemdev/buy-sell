import { useDispatch, useSelector } from 'react-redux';
// import { setPrices } from '../../../redux/slices/chosenCurrencyPairSlice';
import { onOpen } from '../../../redux/slices/uiSlices/modalSlice';
import styles from './SideButtons.module.scss';

function SideButtons() {
  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);

  // const { list } = useSelector((store) => store.currenciesPairs);

  const dispatch = useDispatch();

  // Код который меняет рандомно цену, приложение не сломает, но работает плохо
  // Для теста раскоментируйте строчку импорта setPrices и хука useSelector выше

  // if (chosenPair.name) {
  //   const staticPair = list.filter((pair) => pair.name === chosenPair.name);

  //   const result = {
  //     sidePriceBuy: +(Math.random() * ((staticPair[0].sidePriceBuy + 0.02)
  //        - (staticPair[0].sidePriceBuy - 0.02))
  //         + staticPair[0].sidePriceBuy - 0.02)
  //       .toFixed(staticPair[0].sidePriceBuy.toString().split('.')[1].length),
  //     sidePriceSell: +(Math.random() * ((staticPair[0].sidePriceSell + 0.02)
  //     - (staticPair[0].sidePriceSell - 0.02))
  //      + staticPair[0].sidePriceSell - 0.02)
  //       .toFixed(staticPair[0].sidePriceSell.toString().split('.')[1].length),
  //   };
  //   const idTimeout = setTimeout(() => {
  //     dispatch(setPrices(result));
  //   }, 1000 * 3);
  // }

  return (
    <div className={styles.btnContainer}>
      <button
        type="button"
        className={chosenPair.name ? null : `${ styles.disabled}`}
        onClick={() => dispatch(onOpen('BUY'))}
      >
        BUY<br />
        {chosenPair.sidePriceBuy}
      </button>
      <button
        type="button"
        className={chosenPair.name ? null : `${ styles.disabled}`}
        onClick={() => dispatch(onOpen('SELL'))}
      >
        SELL<br />
        {chosenPair.sidePriceSell}
      </button>
    </div>
  );
}

export default SideButtons;
