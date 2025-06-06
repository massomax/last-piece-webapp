// src/App.tsx
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import ProductGrid from "./components/ProductGrid";
import Footer from "./components/Footer";
import { type TelegramUser, type Product } from "./types";
import { mockProducts } from "./mocks";
import styles from "./App.module.css";

const App: React.FC = () => {
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.hideMenuButton();
      const unsafe = window.Telegram.WebApp.initDataUnsafe;
      if (unsafe && unsafe.user) {
        setTgUser({
          id: unsafe.user.id,
          first_name: unsafe.user.first_name,
          last_name: unsafe.user.last_name,
          username: unsafe.user.username,
          language_code: unsafe.user.language_code,
        });
      }
    }
    setProducts(mockProducts);
  }, []);

  return (
    <div className={styles.appContainer}>
      <Header user={tgUser} />
      <ProductGrid products={products} />
      <Footer />
    </div>
  );
};

export default App;
