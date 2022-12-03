import { useDispatch, useSelector } from 'react-redux';
import { onClose } from '../../redux/slices/uiSlices/modalSlice';
import styles from './Modal.module.css';

function Modal({ children, nameModal }) {
  const { modal } = useSelector((store) => store);

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
          <p className={styles.modalHeaderText}>{nameModal}</p>
          <button
            className={styles.modalCloseBtn}
            type="button"
            onClick={() => dispatch(onClose())}
          >x
          </button>
        </div>
        <div className={styles.modalContent}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
