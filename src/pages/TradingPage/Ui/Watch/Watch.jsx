import { useState } from 'react';
import styles from './Watch.module.css';

function Watch() {
  const [actualDate, setActualDate] = useState(`
    ${new Date().toLocaleTimeString()}
  `);

  setInterval(() => {
    const date = new Date();

    setActualDate(`
      ${date.toLocaleTimeString()}
    `);
  }, 1000);

  return (
    <div className={styles.watchContainer}>
      {actualDate}
    </div>
  );
}

export default Watch;
