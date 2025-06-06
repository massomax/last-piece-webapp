// src/components/ProductCard.tsx
import React from "react";
import styles from "./ProductCard.module.css";
import { type Product } from "../types";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className={styles.card}>
      {/* Блок с изображением */}
      <div className={styles.imageWrapper}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className={styles.image}
        />
      </div>

      {/* Информация о товаре */}
      <div className={styles.info}>
        <h3 className={styles.title}>{product.title}</h3>
        <p className={styles.price}>₽{product.price.toLocaleString()}</p>
        <p className={styles.description}>{product.description}</p>
      </div>

      {/* Кнопка «Написать продавцу» */}
      <a
        href={`https://t.me/${product.sellerUsername}`}
        target="_blank"
        rel="noreferrer"
        className={styles.button}>
        Написать продавцу
      </a>
    </div>
  );
};

export default ProductCard;
