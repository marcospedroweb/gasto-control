import React from 'react';
import styles from './DivStatement.module.css';
import MonthTimer from './MonthTimer';
import MonthlyInvoice from './MonthlyInvoice';

const DivStatement = () => {
  return (
    <div className={`${styles.divMain} bg-secondary rounded p-4`}>
      <MonthTimer />
      <MonthlyInvoice />
    </div>
  );
};

export default DivStatement;
