import React, { useEffect, useState } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import RecenProduct from "../../components/RecenProduct/RecenProduct";
import Loading from "../../components/Loading/Loading";
import Testimonial from "../../components/Testimonial/Testimonial";
import FAQ from "../../components/FAQ/FAQ";

const Home = () => {
  const [latestProducts, setLatestProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestProducts = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          "https://smart-deals-server-five.vercel.app/latest-product"
        );
        const data = await res.json();
        setLatestProducts(data);
      } catch (error) {
        console.error("Error fetching latest products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestProducts();
  }, []);

  return (
    <>
      <HeroSection />

      {loading ? (
        <div className="py-16">
          <Loading />
        </div>
      ) : (
        <RecenProduct latestProducts={latestProducts} />
      )}

      <Testimonial />
      <FAQ />
    </>
  );
};

export default Home;
