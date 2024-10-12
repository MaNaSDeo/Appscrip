import { ProductArray } from "@/api/products";
import styles from "./ProductListing.module.scss";

export default async function ProductListing({ products }: ProductArray) {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Discover Our Products</h1>
        <p>Browse our collection of unique and high-quality items.</p>
      </header>

      <main className={styles.main}>
        <aside className={styles.filters}>
          <h2>Categories</h2>
          <ul>
            <li>
              <button>All Products</button>
            </li>
            {/* Add more category buttons here */}
          </ul>
        </aside>

        <section className={styles.products}>
          {products.map((product) => (
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
      </main>

      <footer className={styles.footer}>
        <p>&copy; 2024 Your Online Store. All rights reserved.</p>
      </footer>
    </div>
  );
}
