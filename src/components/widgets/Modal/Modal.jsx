import { useDispatch, useSelector } from 'react-redux';
import { onClose } from '../../../redux/slices/uiSlices/modalSlice';
import styles from './Modal.module.scss';

function Modal({ children, nameModal, setValue }) {
  const { modal } = useSelector((store) => store);

  const dispatch = useDispatch();

  return (
    <div
      className={modal.active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => { dispatch(onClose()); setValue(''); }}
    >
      <div
        className={modal.active ? `${styles.modalBody} ${styles.active}` : `${styles.modalBody}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles.modalHeader}>
          <p>{nameModal}</p>
          <button
            type="button"
            onClick={() => { dispatch(onClose()); setValue(''); }}
          >&#215;
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
