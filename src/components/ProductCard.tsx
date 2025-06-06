// src/components/ProductCard.tsx

import React from "react";
import { type Product } from "../types";

/**
 * Компонент, который получает один объект Product и рендерит карточку.
 */
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div
      style={{
        border: "1px solid #DDD",
        borderRadius: 8,
        padding: 12,
        maxWidth: 200,
        margin: 8,
      }}>
      {/* Изображение товара */}
      <img
        src={product.imageUrl}
        alt={product.title}
        style={{
          width: "100%",
          borderRadius: 4,
          objectFit: "cover",
        }}
      />

      {/* Название */}
      <h3
        style={{
          fontSize: 16,
          margin: "8px 0 4px",
          height: 40,
          overflow: "hidden",
        }}>
        {product.title}
      </h3>

      {/* Цена */}
      <p
        style={{
          fontWeight: "bold",
          margin: "0 0 4px",
        }}>
        ₽{product.price.toLocaleString()}
      </p>

      {/* Юзернейм продавца */}
      <p style={{ margin: "0 0 8px", fontSize: 12, color: "#555" }}>
        @{product.sellerUsername}
      </p>

      {/* Кнопка «Перейти к чату» */}
      <a
        href={`https://t.me/${product.sellerUsername}`}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-block",
          background: "#0088cc",
          color: "#FFF",
          textDecoration: "none",
          borderRadius: 4,
          padding: "6px 12px",
          fontSize: 14,
        }}>
        Написать
      </a>
    </div>
  );
};

export default ProductCard;
