import React from "react";
import { Link } from "react-router";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const CreatedProduct = () => {
  const { user } = useAuth();

  const handleCreateProduct = (e) => {
    e.preventDefault();
    const formData = {
      title: e.target.title.value,
      category: e.target.category.value,
      price_min: e.target.minPrice.value,
      price_max: e.target.maxPrice.value,
      condition: e.target.condition.value,
      usage: e.target.usageTime.value,
      image: e.target.productImageUrl.value,
      seller_name: e.target.name.value,
      sellerEmail: e.target.email.value,
      seller_contact: e.target.sellerContact.value,
      seller_image: e.target.sellerImageUrl.value,
      location: e.target.location.value,
      description: e.target.description.value,
      email: e.target.email.value,
      created_at: e.target.createdAt.value,
      status: "pending",
    };
    axios.post("http://localhost:3000/products", formData).then((data) => {
      console.log(data.data);
      if (data.data.insertedId) {
        Swal.fire({
          title: "Product Added",
          icon: "success",
          draggable: true,
        });
      }
    });
    e.target.reset();
  };
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link to="/allproduct">
          <button className="flex items-center gap-2 text-gray-700 hover:text-[#34699A] transition mb-6 cursor-pointer">
            <FaArrowLeft className="w-5 h-5" />
            Back To Products
          </button>
        </Link>

        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#34699A] mb-8">
          Create A Product
        </h1>

        {/* Form Card */}
        <form
          onSubmit={handleCreateProduct}
          className="bg-white rounded-2xl shadow-xl p-8 space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                placeholder="Product Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Category */}
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Category
              </label>
              <select
                id="category"
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              >
                <option value="">Select a Category</option>
                <option>Art and Hobbies</option>
                <option>Electronics</option>
                <option>Fashion</option>
                <option>Home & Living</option>
                <option>Automotive</option>
                <option>Books & Magazines</option>
                <option>Health & Beauty</option>
                <option>Sports & Outdoors</option>
                <option>Toys & Games</option>
                <option>Pet Supplies</option>
                <option>Food & Beverages</option>
                <option>Office Supplies</option>
                <option>Music Instruments</option>
                <option>Collectibles</option>
              </select>
            </div>

            {/* Min Price */}
            <div>
              <label
                htmlFor="minPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Min Price You want to Sale ($)
              </label>
              <input
                type="text"
                id="minPrice"
                name="minPrice"
                placeholder="e.g. 18.5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Max Price */}
            <div>
              <label
                htmlFor="maxPrice"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Max Price You want to Sale ($)
              </label>
              <input
                type="text"
                id="maxPrice"
                name="maxPrice"
                placeholder="Optional (default = Min Price)"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Product Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Product Condition
            </label>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  value="Brand New"
                  className="w-5 h-5 text-primary focus:ring-[#34699A]"
                  required
                />
                <span className="text-gray-700">Brand New</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="condition"
                  value="Used"
                  className="w-5 h-5 text-primary focus:ring-[#34699A]"
                />
                <span className="text-gray-700">Used</span>
              </label>
            </div>
          </div>

          {/* Product Usage Time */}
          <div>
            <label
              htmlFor="usageTime"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Product Usage time
            </label>
            <input
              type="text"
              id="usageTime"
              name="usageTime"
              placeholder="Usage Time"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
            />
          </div>

          {/* Product Image URL */}
          <div>
            <label
              htmlFor="productImageUrl"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your Product Image URL
            </label>
            <input
              type="url"
              id="productImageUrl"
              name="productImageUrl"
              placeholder="https://..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Seller Name */}
            <div>
              <label
                htmlFor="sellerName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seller Name
              </label>
              <input
                type="text"
                id="sellerName"
                name="name"
                value={user?.displayName}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Seller Email */}
            <div>
              <label
                htmlFor="sellerEmail"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seller Email
              </label>
              <input
                type="email"
                id="sellerEmail"
                name="email"
                value={user?.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Seller Contact */}
            <div>
              <label
                htmlFor="sellerContact"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seller Contact
              </label>
              <input
                type="tel"
                id="sellerContact"
                name="contact"
                placeholder="Your Contact Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
                required
              />
            </div>

            {/* Seller Image URL */}
            <div>
              <label
                htmlFor="sellerImageUrl"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Seller Image URL
              </label>
              <input
                type="url"
                id="sellerImageUrl"
                name="sellerImageUrl"
                value={user?.photoURL}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City, Country"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Simple Description about your Product
            </label>
            <textarea
              id="description"
              name="description"
              rows={4}
              placeholder="Write Your Products Details for More Attention"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#34699A] focus:border-transparent outline-none transition resize-none"
              required
            ></textarea>
          </div>

          {/* creation time  */}
          <input
            type="hidden"
            name="createdAt"
            id="createdAt"
            value={new Date().toISOString()}
          />

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="bg-[#34699A] text-white font-medium w-full py-2 rounded-lg shadow hover:border hover:border-[#34699A] hover:bg-transparent hover:text-[#34699A] transition cursor-pointer"
            >
              Create A Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatedProduct;
