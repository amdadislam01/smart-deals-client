import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  // console.log('token', user.accessToken);

  useEffect(() => {
    const fetchBids = async () => {
      if (user?.email) {
        const token = await user.getIdToken();
        const res = await fetch(
          `https://smart-deals-server-five.vercel.app/bids?email=${user.email}`,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await res.json();
        console.log(data);
        setBids(data);
      }
    };

    fetchBids();
  }, [user]);

  const handleRemoveBit = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://smart-deals-server-five.vercel.app/bids/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Bids has been deleted.",
                icon: "success",
              });
              const remainingBids = bids.filter((bid) => bid._id !== _id);
              setBids(remainingBids);
            }
          });
      }
    });
  };
  return (
    <div className="w-full pb-16">
      <h2 className="text-3xl text-center font-bold text-gray-900 py-12">
        Bids For This Product:{" "}
        <span className="text-[#34699A] font-bold">{bids.length}</span>
      </h2>

      <div className="max-w-[1510px] mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 border-b border-gray-200">
              <tr>
                <th className="py-3 px-5 text-left font-semibold">SL No</th>
                <th className="py-3 px-5 text-left font-semibold">Product</th>
                <th className="py-3 px-5 text-left font-semibold">Seller</th>
                <th className="py-3 px-5 text-left font-semibold">Bid Price</th>
                <th className="py-3 px-5 text-left font-semibold">Status</th>
                <th className="py-3 px-5 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {bids.length > 0 ? (
                bids.map((bid, index) => (
                  <tr
                    key={bid._id || index}
                    className="border-b border-gray-300 hover:bg-gray-50 transition align-middle"
                  >
                    <td className="py-4 px-5 align-middle">{index + 1}</td>
                    <td className="py-4 px-5 align-middle">
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.product_image || "/placeholder.png"}
                          alt={bid.product_title}
                          className="w-12 h-12 rounded-md object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {bid.product_title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            ${bid.product_price || "0.00"}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-5 align-middle">
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
                    <td className="py-4 px-5 align-middle font-semibold text-gray-800">
                      ${bid.bid_price}.00
                    </td>
                    <td className="py-4 px-5 align-middle font-semibold text-gray-800">
                      {bid.status === "pending" ? (
                        <span className="bg-amber-300 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium">
                          {bid.status}
                        </span>
                      ) : (
                        <span className="bg-green-300 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium">
                          {bid.status}
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-5 align-middle text-center">
                      <div className="flex justify-center items-center">
                        <button
                          onClick={() => handleRemoveBit(bid._id)}
                          className="text-red-500 border border-red-500 rounded-md px-3 py-1 text-xs font-medium hover:bg-red-50 transition cursor-pointer"
                        >
                          Remove Bid
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
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

export default MyBids;
