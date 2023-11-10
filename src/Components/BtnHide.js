import React from 'react';
import styles from './BtnHide.module.css';

const btnHide = ({ type, icon, text }) => {
  if (type === 'li')
    return (
      <li
        className={`${styles.btnHide} btn btn-primary d-flex justify-content-center align-items-center`}
      >
        {icon ? icon : ''}
        <span className="ms-2">{text}</span>
      </li>
    );
  else
    return (
      <li
        className={`${styles.btnHide} btn btn-primary d-flex justify-content-center align-items-center`}
      >
        {icon ? icon : ''}
        <span className="ms-2">{text}</span>
      </li>
    );
};

export default btnHide;
