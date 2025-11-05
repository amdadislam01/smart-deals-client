import React from "react";
import { Link } from "react-router";

const ProductCard = ({ product }) => {
  const { _id, title, price_max, price_min, image, category } = product;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 group cursor-pointer">
      <div className="w-full h-56 overflow-hidden">
        <img
          src={image}
          alt="ProductImage"
          className="w-full h-full object-cover rounded-t-lg transform group-hover:scale-110 transition duration-500 ease-in-out"
        />
      </div>

      <div className="p-4">
        <span className="bg-sky-100 p-1.5 text-xs rounded-md font-semibold text-gray-600">
          {category}
        </span>
        <h2 className="text-gray-900 font-semibold text-lg line-clamp-2 mt-3">
          {title}
        </h2>

        <p className="text-[#34699A] font-bold mt-2">
          ${price_min}.00 - ${price_max}.00
        </p>

        <div className="mt-4 w-full border border-sky-700 text-[#34699A] rounded-md py-2 text-sm text-center font-bold hover:bg-sky-100 transition cursor-pointer">
          <Link to={`/productDetail/${_id}`}>View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
