import React, { Suspense } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import RecenProduct from "../../components/RecenProduct/RecenProduct";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-product"
).then((res) => res.json());
const Home = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<p>Loading.....</p>}>
        <RecenProduct latestProductsPromise={latestProductsPromise} />
      </Suspense>
    </>
  );
};

export default Home;
