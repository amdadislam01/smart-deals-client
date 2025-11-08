import React from "react";
import ProductCard from "../ProductCard/ProductCard";

const RecenProduct = ({ latestProducts }) => {
  return (
    <div className="max-w-[1550px] mx-auto px-6">
      <div className="py-16">
        <h2 className="text-4xl font-extrabold text-center">
          Recent <span className="text-[#34699A]">Products</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {latestProducts && latestProducts.length > 0 ? (
          latestProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="text-center text-gray-500 col-span-3 py-10">
            No recent products found.
          </p>
        )}
      </div>
    </div>
  );
};

export default RecenProduct;
