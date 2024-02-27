"use client"
import React from 'react';
import styles from '../page.module.css';


const MoviePicker = ({ peliculas, selectedMovie, setSelectedMovie, agregarCompra }) => {
  return (
    <div id="picker">
      <select className={styles.cajas} value={selectedMovie} onChange={(e) => setSelectedMovie(e.target.value)}>
        <option value="">Selecciona una película</option>
        {peliculas.map((pelicula, index) => (
          <option key={index} value={pelicula.nombre}>{pelicula.nombre}</option>
        ))}
      </select>
      <button className={styles.agregarbtn} onClick={agregarCompra}>Agregar</button>
    </div>
  );
};

export default MoviePicker;
