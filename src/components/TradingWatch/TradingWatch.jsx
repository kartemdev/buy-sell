import React from 'react';
import styles from './Watch.module.css';

function TradingWatch() {
  const [actualDate, setActualDate] = React.useState(`
    ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}
  `);

  setInterval(() => {
    const date = new Date();

    setActualDate(`
      ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}
    `);
  }, 1000);

  return (
    <div className={styles.watchContainer}>
      {actualDate}
    </div>
  );
}

export default TradingWatch;
