// src/components/Footer.tsx
import React from "react";
import styles from "./Footer.module.css";
import HomeIcon from "../assets/home.svg"; // Предположим, что вы положили иконки в src/assets
import FavoritesIcon from "../assets/heart.svg";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footerContainer}>
      <button className={styles.iconButton}>
        <img src={HomeIcon} alt="Главная" className={styles.icon} />
      </button>
      <button className={styles.iconButton}>
        <img src={FavoritesIcon} alt="Избранное" className={styles.icon} />
      </button>
    </footer>
  );
};

export default Footer;
