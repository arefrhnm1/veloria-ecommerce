import Header from "../components/home/header/Header";
import ProductList from "../components/home/productList/ProductList";
import axios from "axios";

export default async function Home() {

 let products = [];

  try {
    const res = await axios.get("https://69255c4982b59600d7234e6a.mockapi.io/api/v1/products");
    products = res.data;
  } catch (err) {
    console.error("Failed to fetch products:", err);
  }

  return (
    <div className="bg-white mb-50 grid gap-20">
      {/* <Header/> */}
      
      {/* <ProductList products={products}/> */}
    </div>
  );
}
