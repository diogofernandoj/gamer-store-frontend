import ProductList from "../components/product/product-list";

export default function HomePage() {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center items-center gap-8 py-5">
        <ProductList />
      </div>
    </div>
  );
}
