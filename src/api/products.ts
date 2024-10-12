export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductArray {
  products: IProduct[];
}

export async function getProducts(): Promise<IProduct[]> {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}
