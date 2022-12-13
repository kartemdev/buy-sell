/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../widgets/Modal/Modal';
import { addRequest } from '../../../redux/slices/archiveRequestsSlice';
import { onClose } from '../../../redux/slices/uiSlices/modalSlice';
import styles from './ModalVolume.module.scss';

function ModalVolume() {
  const { modal } = useSelector((store) => store);

  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);

  const [valueInput, setValueInput] = useState('');

  const dispatch = useDispatch();

  const changeHandler = (e) => setValueInput(e.target.value);

  const submitHandler = () => {
    dispatch(addRequest({
      side: modal.side,
      price: modal.side === 'Buy' ? chosenPair.sidePriceBuy : chosenPair.sidePriceSell,
      instrument: chosenPair.name,
      volume: valueInput,
    }));
    dispatch(onClose());
    setValueInput('');
  };

  return (
    <Modal nameModal="Make order" setValue={setValueInput}>
      <div className={styles.modalContentTextContainer}>
        <p value={modal.side === 'BUY'}>{modal.side}</p>
        <p>
          {modal.side === 'BUY' ? chosenPair.sidePriceBuy : chosenPair.sidePriceSell}{' '}
          {chosenPair.name}
        </p>
      </div>
      <div className={styles.modalContentInputContainer}>
        <label htmlFor="modalInput">
          Volume
        </label>
        <input
          onChange={changeHandler}
          type="number"
          id="modalInput"
          value={valueInput}
        />
      </div>
      <div className={styles.modalContentBtnContainer}>
        <button
          type="button"
          onClick={() => { dispatch(onClose()); setValueInput(''); }}
        >Cancel
        </button>
        <button
          type="button"
          onClick={submitHandler}
        >Ok
        </button>
      </div>
    </Modal>
  );
}

export default ModalVolume;
