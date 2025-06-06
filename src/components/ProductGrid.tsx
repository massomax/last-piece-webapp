// src/components/ProductGrid.tsx
import React from "react";
import styles from "./ProductGrid.module.css";
import { type Product } from "../types";
import ProductCard from "./ProductCard";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <main className={styles.gridContainer}>
      {products.map((prod) => (
        <ProductCard key={prod._id} product={prod} />
      ))}
    </main>
  );
};

export default ProductGrid;
