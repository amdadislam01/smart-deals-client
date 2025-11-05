import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
const MyBids = () => {
  const { user } = useContext(AuthContext);
  const [bids, setBids] = useState([]);
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/bids?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setBids(data);
        });
    }
  }, [user?.email]);

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
        fetch(`http://localhost:3000/bids/${_id}`, {
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
    <div className="">
      <h2 className="text-3xl text-center font-bold text-gray-900 py-12">
        Bids For This bids:{" "}
        <span className="text-[#34699A] font-bold">{bids.length}</span>
      </h2>
      <div className="max-w-[1510px] mx-auto bg-white p-6 rounded-lg shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="py-3 px-4 text-left font-semibold">SL No</th>
                <th className="py-3 px-4 text-left font-semibold">Product</th>
                <th className="py-3 px-4 text-left font-semibold">Seller</th>
                <th className="py-3 px-4 text-left font-semibold">Bid Price</th>
                <th className="py-3 px-4 text-left font-semibold">Status</th>
                <th className="py-3 px-4 text-left font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {bids.length > 0 ? (
                bids.map((bid, index) => (
                  <tr
                    key={bid._id || index}
                    className="border-b border-gray-300 last:border-0 hover:bg-gray-50 transition"
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4 flex items-center gap-3">
                      <img
                        src={bids.image || "/placeholder.png"}
                        alt={bids.title || "bids"}
                        className="w-10 h-10 rounded-md object-cover"
                      />
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {bids.title}
                        </p>
                        <p className="text-gray-500 text-xs">
                          ${bids.price_max || "0.00"}
                        </p>
                      </div>
                    </td>

                    <td className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={bid.buyer_photo || "/placeholder.png"}
                          alt={bid.buyer_name || "SallarImage"}
                          className="w-8 h-8 rounded-full object-cover"
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

                    <td className="py-3 px-4 font-semibold text-gray-800">
                      ${bid.bid_price}.00
                    </td>

                    <td className="py-3 px-4 font-semibold text-gray-800">
                      {bid.status === "pending" ? (
                        <span className="bg-amber-300 px-3 py-1.5 rounded-full">
                          {bid.status}
                        </span>
                      ) : (
                        <span className="bg-green-300 px-3 py-1.5 rounded-full">
                          {bid.status}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-4 flex gap-2">
                      <button
                        onClick={() => handleRemoveBit(bid._id)}
                        className="text-red-500 border border-red-500 rounded-md px-3 py-1 text-xs font-medium hover:bg-red-50 transition cursor-pointer"
                      >
                        Remove Bid
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="py-5 text-center text-gray-500 italic"
                  >
                    No bids found for this bids.
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
