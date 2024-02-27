"use client"

// App.js

import React, { useState } from 'react';
import styles from './page.module.css';
import MoviePicker from './components/MoviePicker';
import ShoppingList from './components/ShoppingList';
import Total from './components/Total';

// Define la información sobre las películas
import {peliculas} from "./data/data";


function App() {
  const [selectedMovie, setSelectedMovie] = useState('');
  const [compras, setCompras] = useState([]);

  const agregarCompra = () => {
    const peliculaSeleccionada = peliculas.find(pelicula => pelicula.nombre === selectedMovie);
    if (peliculaSeleccionada) {
      const nuevaCompra = { nombre: peliculaSeleccionada.nombre, precio: peliculaSeleccionada.precio, cantidad: 1 };
      setCompras([...compras, nuevaCompra]);
    }
    alert("¿Esta seguro que quiere agregar esta pelicula a la lista?");
  };

  const eliminarCompra = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras.splice(index, 1);
    setCompras(nuevasCompras);
    alert("¿Esta seguro que quiere eliminar esta pelicula a la lista?");
  };

  const aumentarCantidad = (index) => {
    const nuevasCompras = [...compras];
    nuevasCompras[index].cantidad++;
    setCompras(nuevasCompras);
  };

  const disminuirCantidad = (index) => {
    const nuevasCompras = [...compras];
    if (nuevasCompras[index].cantidad > 1) {
      nuevasCompras[index].cantidad--;
      setCompras(nuevasCompras);
    }
  };

  const calcularTotal = () => {
    return compras.reduce((total, compra) => total + (compra.precio * compra.cantidad), 0).toFixed(2);
  };

  return (
    <div className={styles.container}>
      <div className={styles.cajitag}>
        <h1 className={styles.h1}>Lista de Compra de Películas</h1>
        <MoviePicker
          peliculas={peliculas}
          selectedMovie={selectedMovie}
          setSelectedMovie={setSelectedMovie}
          agregarCompra={agregarCompra}
        />
        <ShoppingList
          compras={compras}
          eliminarCompra={eliminarCompra}
          disminuirCantidad={disminuirCantidad}
          aumentarCantidad={aumentarCantidad}
        />
        <Total calcularTotal={calcularTotal} />
      </div>
    </div>
  );
}

export default App;
