import React, { useRef, useContext } from "react";
import { Link, useLoaderData } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { toast } from "react-toastify";
import { useEffect } from "react";
import { useState } from "react";
// import axios from 'axios';

const ProductDetails = () => {
  const products = useLoaderData();

  const bidMoadlRef = useRef(null);
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  const {
    _id,
    title,
    price_max,
    price_min,
    image,
    category,
    description,
    condition,
    usage,
    status,
    location,
    created_at,
    seller_image,
    seller_name,
    email,
    seller_contact,
  } = products;

  const handelbidModal = () => {
    if (!user) {
      toast.warning("Please login before placing a bid!");
      return;
    }
    bidMoadlRef.current.showModal();
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photoUrl = e.target.photoUrl.value;
    const bid = e.target.bid.value;
    const contact = e.target.contact.value;

    const newBid = {
      product_id: _id,
      buyer_name: name,
      buyer_email: email,
      buyer_photo: photoUrl,
      bid_price: bid,
      contact: contact,
      product_image: image,
      product_title: title,
      product_price: price_max,
      status: "pending",
    };

    fetch("https://smart-deals-server-five.vercel.app/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidMoadlRef.current.close();
          toast.success("Bid placed successfully!");
          // add to the new bid state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => b.bid_price - a.bid_price);
          setBids(newBids);
        }
      })
      .catch(() => toast.error("Failed to place bid"));
  };

  // useEffect(() => {
  //   axios.get(`https://smart-deals-server-five.vercel.app/products/bids/${_id}`)
  //   .then(data => {
  //     console.log("bids for this data", data);
  //     setBids(data.data);
  //   })
  // }, [_id, user]);

  useEffect(() => {
    fetch(`https://smart-deals-server-five.vercel.app/products/bids/${_id}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for this data", data);
        setBids(data);
      });
  }, [_id, user]);

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="max-w-[1550px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="bg-gray-300 w-full h-90 rounded-lg mb-6">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-white p-5 rounded-lg shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Product Description
            </h2>

            <div className="flex justify-between text-sm mb-2">
              <p>
                <span className="font-semibold text-gray-900">Condition:</span>{" "}
                <span className="text-sky-600">{condition}</span>
              </p>
              <p>
                <span className="font-semibold text-gray-900">Usage Time:</span>{" "}
                <span className="text-sky-600">{usage}</span>
              </p>
            </div>

            <hr className="border-gray-200 mb-3" />

            <p className="text-gray-600 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link
            to={"/allproduct"}
            className="text-sm text-gray-600 hover:underline text-left mb-1"
          >
            ← Back To Products
          </Link>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            {title}
          </h1>

          <span className="bg-sky-100 text-sky-600 text-xs font-medium px-3 py-1 rounded-full w-fit">
            {category}
          </span>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-sky-600 font-bold text-xl">
              ${price_min}.00 - ${price_max}.00
            </h2>
            <p className="text-gray-500 text-sm">{location}</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-900 font-semibold mb-2">
              Product Details
            </h2>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Product ID:</span> {_id}
            </p>
            <p className="text-gray-700 text-sm">
              <span className="font-semibold">Posted:</span> {created_at}
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h2 className="text-gray-900 font-semibold mb-3">
              Seller Information
            </h2>

            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                <img src={seller_image} alt="seller" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">
                  {seller_name}
                </p>
                <p className="text-gray-600 text-xs">{email}</p>
              </div>
            </div>

            <p className="text-sm text-gray-700">
              <span className="font-semibold">Location:</span> {location}
            </p>
            <p className="text-sm text-gray-700">
              <span className="font-semibold">Contact:</span> {seller_contact}
            </p>
            <p className="text-sm text-gray-700 mt-1">
              <span className="font-semibold">Status:</span>{" "}
              <span className="bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded text-xs">
                {status}
              </span>
            </p>
          </div>

          <button
            onClick={handelbidModal}
            className="bg-[#34699A] text-white font-medium px-6 py-2 rounded-lg shadow hover:border hover:border-[#34699A] hover:bg-transparent hover:text-[#34699A] transition cursor-pointer"
          >
            I Want Buy This Product
          </button>
        </div>
      </div>

      <dialog ref={bidMoadlRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box max-w-md bg-white rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-900 mb-6">
            Give Seller Your Offered Price
          </h2>

          <form onSubmit={handleBidSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buyer Name
                </label>
                <input
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={user?.displayName || ""}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Buyer Email
                </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user?.email || ""}
                  className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Buyer Image URL
              </label>
              <input
                type="url"
                name="photoUrl"
                readOnly
                defaultValue={user?.photoURL || "Photo"}
                placeholder="https://your-img-url"
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Place your Price
              </label>
              <input
                type="text"
                name="bid"
                placeholder="Your Bid"
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Info
              </label>
              <input
                type="text"
                name="contact"
                placeholder="e.g. +1-555-1234"
                required
                className="w-full border border-gray-200 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="flex justify-end gap-3 pt-4">
              <button
                type="button"
                onClick={() => bidMoadlRef.current.close()}
                className="px-5 py-2 rounded-md border border-sky-400 text-[#34699A] hover:bg-sky-50 transition font-medium cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 rounded-md bg-[#34699A] text-white hover:bg-sky-700 transition font-medium cursor-pointer"
              >
                Submit Bid
              </button>
            </div>
          </form>
        </div>
      </dialog>

      {/* Bids Table */}
      <div className="max-w-[1510px] mx-auto mt-10 bg-white p-6 rounded-lg shadow-md pb-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-5 flex items-center justify-between">
          <span>
            Bids For This Product:{" "}
            <span className="text-[#34699A] font-bold">{bids.length}</span>
          </span>
        </h2>

        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="py-3 px-5 text-left font-semibold w-[70px]">
                  SL No
                </th>
                <th className="py-3 px-5 text-left font-semibold w-[300px]">
                  Product
                </th>
                <th className="py-3 px-5 text-left font-semibold w-[280px]">
                  Seller
                </th>
                <th className="py-3 px-5 text-left font-semibold w-[150px]">
                  Bid Price
                </th>
                <th className="py-3 px-5 text-center font-semibold w-[160px]">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {bids.length > 0 ? (
                bids.map((bid, index) => (
                  <tr
                    key={bid._id || index}
                    className="border-b border-gray-300 hover:bg-gray-50 transition"
                  >
                    <td className="py-4 px-5">{index + 1}</td>
                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={products.image || "/placeholder.png"}
                          alt={products.title || "Product"}
                          className="w-12 h-12 rounded-md object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {products.title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            ${products.price_max || "0.00"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-5">
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.buyer_photo || "/placeholder.png"}
                          alt={bid.buyer_name || "Seller"}
                          className="w-10 h-10 rounded-full object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {bid.buyer_name || "Unknown Seller"}
                          </p>
                          <p className="text-gray-500 text-xs">
                            {bid.buyer_email || "No email"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-5 font-semibold text-gray-800">
                      ${bid.bid_price}.00
                    </td>

                    <td className="py-4 px-5 text-center">
                      <div className="flex justify-center gap-2">
                        <button className="text-green-600 border border-green-600 rounded-md px-3 py-1 text-xs font-medium hover:bg-green-50 transition">
                          Accept
                        </button>
                        <button className="text-red-500 border border-red-500 rounded-md px-3 py-1 text-xs font-medium hover:bg-red-50 transition">
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-6 text-center text-gray-500 italic"
                  >
                    No bids found for this product.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
