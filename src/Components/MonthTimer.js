import React from 'react';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from 'react-icons/bs';
import styles from './MonthTime.module.css';

const MonthTimer = () => {
  return (
    <div className={`d-flex justify-content-between align-items-center mb-3`}>
      <BsFillCaretLeftFill fontSize={32} />
      <div className={`${styles.divMain} text-center`}>
        <h2>2023</h2>
        <h3>Novembro</h3>
      </div>
      <BsFillCaretRightFill fontSize={32} />
    </div>
  );
};

export default MonthTimer;
