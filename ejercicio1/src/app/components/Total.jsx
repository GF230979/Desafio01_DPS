
import React from 'react';
import styles from '../page.module.css';

const Total = ({ calcularTotal }) => {
  return (
    <p className={styles.total}>Total: ${calcularTotal()}</p>
  );
};

export default Total;
