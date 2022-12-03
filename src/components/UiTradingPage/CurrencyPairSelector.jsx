import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { setCurrencyPair } from '../../redux/slices/chosenCurrencyPairSlice';

const Select = styled.select`
  height: 55px;
  width: 300px;
  font-size: 30px;
  border-radius: 5px 5px 5px 5px;
  color: rgb(81, 81, 81);
  border: 1px solid rgba(138, 138, 138, 0.5);
`;

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
    <Select onChange={changePairHandler} defaultValue="selectPair">
      <option
        value="selectPair"
        disabled
        style={{ textAlign: 'center' }}
      >SELECT PAIR
      </option>
      {optionsList.map((pair) => (
        <option
          key={pair.name}
          value={[pair.name, pair.sidePriceBuy, pair.sidePriceSell]}
          style={{ textAlign: 'center' }}
        >{`${pair.name.split('_')[0] } ${ pair.name.split('_')[1]}`}
        </option>
      ))}
    </Select>
  );
}

export default CurrencyPairSelector;
