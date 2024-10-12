"use client";

import { ProductArray } from "@/api/products";

import { useState, useEffect } from "react";
import styles from "./ProductFilter.module.scss";

export default function ProductFilter({ products }: ProductArray) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    if (selectedCategory === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.category === selectedCategory)
      );
    }
  }, [selectedCategory, products]);

  return (
    <>
      <aside className={styles.filters}>
        <h2>Categories</h2>
        <ul>
          <li>
            <button onClick={() => setSelectedCategory("all")}>
              All Products
            </button>
          </li>
          {/* Add more category buttons here */}
        </ul>
      </aside>

      <section className={styles.products}>
        {filteredProducts.map((product) => (
          <article key={product.id} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <h3>{product.title}</h3>
            <p>${product.price}</p>
            <button className={styles.addToCart}>Add to Cart</button>
          </article>
        ))}
      </section>
    </>
  );
}
