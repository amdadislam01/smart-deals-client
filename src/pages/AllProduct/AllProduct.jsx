import React, { useContext, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import Loading from "../../components/Loading/Loading";
import { AuthContext } from "../../context/AuthContext";

const AllProduct = () => {
  const { loading: authLoading } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://smart-deals-server-five.vercel.app/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (authLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-[1550px] mx-auto px-6 py-12">
      <div className="pb-10 text-center">
        <h2 className="text-4xl font-bold">
          All <span className="text-[#34699A]">Products</span>
        </h2>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 italic py-10">
          No products available.
        </p>
      )}
    </div>
  );
};

export default AllProduct;
