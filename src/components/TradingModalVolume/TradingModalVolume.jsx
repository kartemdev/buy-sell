import { useDispatch, useSelector } from 'react-redux';
import { onClose } from '../../redux/slices/modalSlice';
import styles from './TradingModalVolume.module.css';

function TradingModalVolume() {
  const modal = useSelector((store) => store.modal);

  const dispatch = useDispatch();

  console.log(modal.side);
  return (
    <div
      className={modal.active ? `${styles.modal} ${styles.active}` : `${styles.modal}`}
      onClick={() => dispatch(onClose())}
    >
      <div
        className={modal.active ? `${styles.modalBody} ${styles.active}` : `${styles.modalBody}`}
        onClick={(e) => e.stopPropagation}
      >
        <div className={styles.modalHeader} />
        <div className={styles.modalContent} />
      </div>
    </div>
  );
}

export default TradingModalVolume;
