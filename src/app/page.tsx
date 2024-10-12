import { getProducts, IProduct } from "../api/products";
import ProductFilter from "./Components/ProductFilter/page";
import ProductListing from "./Components/ProductListing/page";

export default async function Home() {
  let products: IProduct[] = [];
  let error: string | null = null;

  try {
    products = await getProducts();
  } catch (e) {
    console.error("Error fetching products:", e);
    error = "Failed to fetch products. Please try again later.";
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <ProductFilter products={products} />
      <ProductListing products={products} />
    </div>
  );
}
