// src/components/Header.tsx
import React from "react";
import styles from "./Header.module.css";
import { type TelegramUser } from "../types";

interface HeaderProps {
  user: TelegramUser | null;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className={styles.headerContainer}>
      {/* Левый блок: приветствие или логотип */}
      <div className={styles.titleSection}>
        <h1 className={styles.logo}>🛍 Последняя Штучка</h1>
        {user && (
          <p className={styles.greeting}>
            Привет, {user.first_name || user.username}!
          </p>
        )}
      </div>

      {/* Правый блок: кнопки «Категории» и «Фильтры» */}
      <div className={styles.buttonsSection}>
        <button className={styles.navButton}>Категории</button>
        <button className={styles.navButton}>Фильтры</button>
      </div>
    </header>
  );
};

export default Header;
