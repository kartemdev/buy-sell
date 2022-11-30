import { useDispatch, useSelector } from 'react-redux';
import { setCurrencyPair } from '../../redux/slices/chosenCurrencyPairSlice';
import styles from './CurrencyPairSelector.module.css';

function CurrencyPairSelector() {
  const optionsList = useSelector((store) => store.currenciesPairs.list);

  const dispatch = useDispatch();

  const changePairHandler = (e) => {
    const pair = e.target.value.split(',');

    dispatch(setCurrencyPair({
      name: pair[0],
      sidePriceBuy: +pair[1],
      sidePriceSell: +pair[2],
    }));
  };

  return (
    <select onChange={changePairHandler} defaultValue="selectPair" className={styles.select}>
      <option value="selectPair" disabled className={styles.option}>SELECT PAIR</option>
      {optionsList.map((pair) => (
        <option
          key={pair.name}
          value={[pair.name, pair.sidePriceBuy, pair.sidePriceSell]}
          className={styles.option}
        >{pair.name}
        </option>
      ))}
    </select>
  );
}

export default CurrencyPairSelector;
