import React, { Suspense } from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import RecenProduct from "../../components/RecenProduct/RecenProduct";
import Loading from "../../components/Loading/Loading";

const latestProductsPromise = fetch(
  "http://localhost:3000/latest-product"
).then((res) => res.json());
const Home = () => {
  return (
    <>
      <HeroSection />
      <Suspense fallback={<Loading />}>
        <RecenProduct latestProductsPromise={latestProductsPromise} />
      </Suspense>
    </>
  );
};

export default Home;
