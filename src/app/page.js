import Header from "@/components/home/header/Header";
import ProductList from "@/components/home/productList/ProductList";

export default function Home() {
  return (
    <div className="bg-white mb-50 grid gap-20">
      <Header/>
      <ProductList/>
    </div>
  );
}
