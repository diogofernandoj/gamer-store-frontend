import ProductInfo from "@/src/components/product/product-info";
import ProductNotFound from "@/src/components/product/product-not-found";
import ProductTitle from "@/src/components/product/product-title";
import PurchaseBanner from "@/src/components/product/purchase-banner";
import { products } from "@gstore/core";

export default function ProductDetailsPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const product = products.find((product) => product.id === +id);

  return product ? (
    <div className="flex flex-col gap-20 container py-10">
      <div className="flex flex-col gap-10">
        <ProductTitle product={product} />
        <ProductInfo product={product} />
        <PurchaseBanner product={product} />
      </div>
    </div>
  ) : (
    <ProductNotFound />
  );
}
