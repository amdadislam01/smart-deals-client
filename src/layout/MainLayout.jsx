import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'
import { Bounce, ToastContainer } from 'react-toastify'

const MainLayout = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
      <Navbar />
      <div className="min-h-[61vh] bg-[#f5f5f5]">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default MainLayout
