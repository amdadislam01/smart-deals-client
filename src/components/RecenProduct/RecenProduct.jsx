import React from "react";
import { use } from "react";
import ProductCard from "../ProductCard/ProductCard";

const RecenProduct = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);

  return (
    <div className="max-w-[1550px] mx-auto px-6">
      <div className="py-16">
        <h2 className="text-4xl font-extrabold text-center">
          Recent <span className="text-[#34699A]">Products</span>
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default RecenProduct;
