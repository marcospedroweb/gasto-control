import React from 'react';
import styles from './Header.module.css';
import { BsFillGearFill, BsFillPlusCircleFill } from 'react-icons/bs';
import BtnHide from './BtnHide';

const Header = () => {
  return (
    <header>
      <nav>
        <ul
          className={`${styles.divBtns} list-unstyled d-flex justify-content-center align-items-center`}
        >
          <BtnHide type="li" icon={<BsFillPlusCircleFill />} text="Adicionar" />
          <BtnHide type="li" icon={<BsFillGearFill />} text="Configurações" />
        </ul>
      </nav>
    </header>
  );
};

export default Header;
