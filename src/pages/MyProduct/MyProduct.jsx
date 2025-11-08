import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import Loading from "../../components/Loading/Loading";

const MyProduct = () => {
  const { user, loading: authLoading } = useContext(AuthContext);
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      if (user?.email) {
        try {
          setLoading(true);
          const token = await user.getIdToken();
          const res = await fetch(
            `https://smart-deals-server-five.vercel.app/products?email=${user.email}`,
            {
              headers: {
                authorization: `Bearer ${token}`,
              },
            }
          );
          const data = await res.json();
          setProduct(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (!authLoading) {
      fetchProducts();
    }
  }, [user, authLoading]);

  if (loading) {
    return <Loading />;
  }

  const handleRemoveProduct = (_id) => {
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
        fetch(`https://smart-deals-server-five.vercel.app/products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your product has been deleted.",
                icon: "success",
              });
              const remainingProducts = product.filter(
                (item) => item._id !== _id
              );
              setProduct(remainingProducts);
            }
          });
      }
    });
  };

  return (
    <div className="w-full pb-16">
      <h2 className="text-3xl text-center font-bold text-gray-900 py-12">
        My Products:{" "}
        <span className="text-[#34699A] font-bold">{product.length}</span>
      </h2>

      <div className="max-w-[1510px] mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto rounded-md border border-gray-200">
          <table className="min-w-full text-sm text-gray-700">
            <thead className="bg-gray-100 border-b border-gray-200 hidden md:table-header-group">
              <tr>
                <th className="py-3 px-5 text-left font-semibold">SL No</th>
                <th className="py-3 px-5 text-left font-semibold">Product</th>
                <th className="py-3 px-5 text-left font-semibold">Category</th>
                <th className="py-3 px-5 text-left font-semibold">Price</th>
                <th className="py-3 px-5 text-left font-semibold">Status</th>
                <th className="py-3 px-5 text-center font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {product.length > 0 ? (
                product.map((pro, index) => (
                  <tr
                    key={pro._id || index}
                    className="border-b border-gray-300 hover:bg-gray-50 transition align-middle block md:table-row"
                  >
                    <td className="py-3 px-5 align-middle block md:table-cell text-sm">
                      <span className="font-semibold md:hidden">SL No: </span>
                      {index + 1}
                    </td>

                    <td className="py-3 px-5 align-middle block md:table-cell">
                      <div className="flex items-center gap-3">
                        <img
                          src={pro.image || "/placeholder.png"}
                          alt={pro.title}
                          className="w-12 h-12 rounded-md object-cover border"
                        />
                        <div>
                          <p className="font-semibold text-gray-900 text-sm">
                            {pro.title}
                          </p>
                          <p className="text-gray-500 text-xs">
                            ${pro.price_min || "0.00"}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3 px-5 align-middle block md:table-cell font-semibold text-gray-800">
                      <span className="font-semibold md:hidden">
                        Category:{" "}
                      </span>
                      {pro.category}
                    </td>

                    <td className="py-3 px-5 align-middle block md:table-cell font-semibold text-gray-800">
                      <span className="font-semibold md:hidden">Price: </span>$
                      {pro.price_max}.00
                    </td>

                    <td className="py-3 px-5 align-middle block md:table-cell font-semibold text-gray-800">
                      {pro.status === "pending" ? (
                        <span className="bg-amber-300 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium capitalize">
                          {pro.status}
                        </span>
                      ) : (
                        <span className="bg-green-300 text-gray-800 px-3 py-1.5 rounded-full text-xs font-medium capitalize">
                          {pro.status}
                        </span>
                      )}
                    </td>

                    <td className="py-3 px-5 align-middle block md:table-cell text-center">
                      <div className="flex justify-center items-center mt-2 md:mt-0">
                        <button
                          onClick={() => handleRemoveProduct(pro._id)}
                          className="text-red-500 border border-red-500 rounded-md px-3 py-1 text-xs font-medium hover:bg-red-50 transition cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="6"
                    className="py-6 text-center text-gray-500 italic block md:table-cell"
                  >
                    No products found.
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

export default MyProduct;
