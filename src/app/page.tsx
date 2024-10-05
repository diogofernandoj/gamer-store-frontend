import InputSearch from "../components/product/input-search";
import ProductList from "../components/product/product-list";

export default function HomePage() {
  return (
    <div className="container">
      <div className="flex flex-wrap justify-center items-center gap-8 py-5">
        <div className="w-full my-8">
          <InputSearch />
        </div>
        <ProductList />
      </div>
    </div>
  );
}
