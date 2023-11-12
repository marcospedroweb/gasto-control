import React from 'react';
import styles from './MonthlyInvoice.module.css';
import InvoiceRecord from './InvoiceRecord';

const MonthlyInvoice = () => {
  return (
    <div>
      <table className={`${styles.divMain} table bg-white p-2 table-striped`}>
        <thead className="w-100 rounded">
          <tr>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
          </tr>
        </thead>
        <tbody>
          <InvoiceRecord />
          <InvoiceRecord />
          <InvoiceRecord />
          <InvoiceRecord />
        </tbody>
      </table>
    </div>
  );
};

export default MonthlyInvoice;
