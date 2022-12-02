import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onClose } from '../../../../redux/slices/modalSlice';
import styles from './ModalVolume.module.css';

function ModalVolume() {
  const { modal } = useSelector((store) => store);

  const { chosenPair } = useSelector((store) => store.chosenCurrencyPair);

  const [valueInput, setValueInput] = useState('');

  const changeHandler = (e) => setValueInput(e.target.value);

  const submitHandler = (e) => {};

  const dispatch = useDispatch();
  return (
    <div
      className={modal.active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => dispatch(onClose())}
    >
      <div
        className={modal.active ? `${styles.modalBody} ${styles.active}` : `${styles.modalBody}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <p className={styles.modalHeaderText}>Make order</p>
          <button
            className={styles.modalCloseBtn}
            type="button"
            onClick={() => dispatch(onClose())}
          >x
          </button>
        </div>
        <div className={styles.modalContent}>
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
              type="text"
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
        </div>
      </div>
    </div>
  );
}

export default ModalVolume;