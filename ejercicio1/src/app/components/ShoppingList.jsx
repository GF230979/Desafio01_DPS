
import React from 'react';
import styles from '../page.module.css';


const ShoppingList = ({ compras, eliminarCompra, disminuirCantidad, aumentarCantidad }) => {
  return (
    <div id="lista">
      <h1 className={styles.h1}>Lista de Compra</h1>
      <ul>
        {compras.map((compra, index) => (
          <li key={index} className={styles.lista}>
            <div className={styles.infoPelicula}>
              <span className={styles.nombre}>{compra.nombre}</span>
              <span className={styles.precio}>${compra.precio.toFixed(2)}</span>
            </div>
            <div id="cantidad" className={styles.btn}>
              <button className={styles.btnCantidad} onClick={() => disminuirCantidad(index)}>-</button>
              <input className={styles.inputCantidad} type="text" value={compra.cantidad} readOnly />
              <button className={styles.btnCantidad} onClick={() => aumentarCantidad(index)}>+</button>
            </div>
            <button className={styles.eliminarbtn} onClick={() => eliminarCompra(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShoppingList;
