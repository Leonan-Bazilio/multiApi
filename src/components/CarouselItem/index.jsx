import React from "react";
import styles from "./styles.module.css";

const CarouselItem = ({ title, handleClick }) => (
  <div className={styles.carouselItem}>
    <h2>{title}</h2>
    <button onClick={handleClick}>Acessar</button>
  </div>
);

export default CarouselItem;
