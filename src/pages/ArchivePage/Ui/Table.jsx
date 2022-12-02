import { useSelector } from 'react-redux';
import styles from './Table.module.css';

function Table() {
  const { list } = useSelector((store) => store.archiveRequests);

  return (
    <div className={styles.table}>
      <div className={styles.tableHead}>
        <h4 style={{ marginLeft: 16 }}>Side</h4>
        <h4 style={{ marginLeft: 37 }}>Price</h4>
        <h4 style={{ marginLeft: 54 }}>Instrument</h4>
        <h4 style={{ marginLeft: 64 }}>Volume</h4>
        <h4 style={{ marginLeft: 95 }}>Timestamp</h4>
      </div>
      <div>
        {list.map((req) => (
          <div className={styles.tableBody} key={req.timestamp}>
            <p style={{
              width: 60,
              textAlign: 'center',
              color: req.side === 'BUY' ? 'rgb(68, 255, 47)' : 'rgb(255, 64, 47)'
            }}
            >
              {req.side === 'BUY' ? 'Buy' : 'Sell'}
            </p>
            <p style={{
              width: 80,
              textAlign: 'center',
            }}
            >{req.price}
            </p>
            <p style={{
              width: 140,
              textAlign: 'center',
            }}
            >{req.instrument}
            </p>
            <p style={{
              width: 120,
              textAlign: 'center',
            }}
            >{req.volume}
            </p>
            <p style={{
              width: 200,
              textAlign: 'center',
            }}
            >{req.timestamp}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;
