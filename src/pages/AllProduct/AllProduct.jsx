import React from 'react'
import { useLoaderData } from 'react-router'
import ProductCard from '../../components/ProductCard/ProductCard';
import Loading from '../../components/Loading/Loading';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const AllProduct = () => {
  const products = useLoaderData();
  const {loading} = useContext(AuthContext)


   if (loading) {
    return <Loading />
  }
  return (
    <div className="max-w-[1550px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default AllProduct
