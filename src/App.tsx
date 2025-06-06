// src/App.tsx

import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { type Product, type TelegramUser } from "./types";
import { mockProducts } from "./mocks";

/**
 * Корневой компонент WebApp-витрины «Последняя Штучка».
 * Здесь мы инициализируем Telegram.WebApp и рендерим список продуктов.
 */
const App: React.FC = () => {
  // ┌─ Локальный стейт: будет хранить массив товаров
  const [products, setProducts] = useState<Product[]>([]);
  // └─ Можно добавить состояние загрузки/ошибки, но пока не требуется

  // ┌─ Локальный стейт: данные о Telegram-пользователе
  const [tgUser, setTgUser] = useState<TelegramUser | null>(null);

  /**
   * useEffect с пустым массивом зависимостей (монтирование компонента).
   * Здесь мы получаем данные из window.Telegram.WebApp, инициализируем WebApp,
   * а также «подтягиваем» (моково) список товаров.
   */
  useEffect(() => {
    // 1) Инициализируем WebApp (убираем спиннер Telegram)
    if (window.Telegram && window.Telegram.WebApp) {
      // сообщаем Telegram, что WebApp загрузился
      window.Telegram.WebApp.ready();

      // можно скрыть ненужные кнопки Telegram (если они есть):
      window.Telegram.WebApp.hideMenuButton();

      // 2) Читаем данные о юзере: Telegram.WebApp.initDataUnsafe.user
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

    // 3) Получаем список товаров (пока из мока)
    // В будущем здесь сделаем fetch("/api/products") к нашему бэкенду
    setProducts(mockProducts);
  }, []); // пустой массив — эффект сработает один раз при первой отрисовке

  return (
    <div
      style={{
        maxWidth: 600,
        margin: "0 auto",
        padding: "12px",
        fontFamily: "Arial, sans-serif",
      }}>
      {/* Заголовок: можно вывести имя пользователя, если он есть */}
      <header style={{ marginBottom: 20, textAlign: "center" }}>
        <h1 style={{ fontSize: 24 }}>🛍 Последняя Штучка</h1>
        {tgUser && (
          <p style={{ fontSize: 14, color: "#555" }}>
            Привет, {tgUser.first_name || tgUser.username}!
          </p>
        )}
      </header>

      {/* Поисковая строка (пока нерабочая) */}
      <div style={{ marginBottom: 16 }}>
        <input
          type="text"
          placeholder="🔍 Поиск по названию..."
          style={{
            width: "100%",
            padding: "8px 12px",
            borderRadius: 6,
            border: "1px solid #CCC",
            fontSize: 14,
          }}
        />
      </div>

      {/* Сетка товаров */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {products.map((prod) => (
          <ProductCard key={prod._id} product={prod} />
        ))}
      </section>

      {/* Подвал: можно указать версию, копирайт и пр. */}
      <footer
        style={{
          marginTop: 24,
          textAlign: "center",
          fontSize: 12,
          color: "#999",
        }}>
        Версия WebApp 1.0.0
      </footer>
    </div>
  );
};

export default App;
