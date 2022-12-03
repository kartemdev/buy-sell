/* eslint-disable no-unused-expressions */
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../../Widgets/Modal/Modal';
import { addRequest } from '../../../redux/slices/archiveRequestsSlice';
import { onClose } from '../../../redux/slices/uiSlices/modalSlice';
import styles from './ModalVolume.module.css';

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
  };

  return (
    <Modal nameModal="Make order">
      <div className={styles.modalContentTextContainer}>
        <p
          style={{ color: modal.side === 'BUY' ? 'rgb(68, 255, 47)' : 'rgb(255, 64, 47)' }}
        >{modal.side}
        </p>
        <p className={styles.modalContentText}>
          {modal.side === 'BUY' ? chosenPair.sidePriceBuy : chosenPair.sidePriceSell}{' '}
          {chosenPair.name}
        </p>
      </div>
      <div>
        <label className={styles.modalContentInputLabel} htmlFor="modalInput">
          Volume
        </label>
        <input
          onChange={changeHandler}
          type="number"
          id="modalInput"
          value={valueInput}
          className={styles.modalContentInput}
        />
      </div>
      <div className={styles.modalBtnContainer}>
        <button
          type="button"
          onClick={() => dispatch(onClose())}
          className={styles.modalCancelBtn}
        >Cancel
        </button>
        <button
          type="button"
          onClick={submitHandler}
          className={styles.modalSubmitBtn}
        >Ok
        </button>
      </div>
    </Modal>
  );
}

export default ModalVolume;
