"use client";

import useProducts from "@/src/data/hooks/useProducts";
import ProductItem from "./product-item";
import ProductNotFound from "./product-not-found";

export default function ProductList() {
  const { products } = useProducts();

  return products.length ? (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </div>
  ) : (
    <ProductNotFound />
  );
}
