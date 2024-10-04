import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");
  useEffect(() => {
    setPrevLocation(location.state.data);
  }, [location]);
  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="About" prevLocation={prevLocation} />
      <div className="pb-10">
        <h1 className="max-w-[600px] text-base text-lightText mb-2">
          <span className="text-primeColor font-semibold text-lg">Maharani Foods</span>{" "}
          Welcome to Nature's Bounty, your premium source for the finest dry fruits. Established in 1995, we are a family-owned business committed to providing the highest quality nuts, seeds, and dried fruits sourced from the best farms around the world.
Our mission is to deliver health and happiness through nature’s bounty. We take pride in our wide range of products that are rich in nutrients, flavor, and freshness, ensuring that every bite you take is packed with goodness.
Join us on this journey to discover the best that nature has to offer. From our family to yours, thank you for choosing Nature's Bounty.
        </h1>
        <Link to="/shop">
          <button className="w-52 h-10 bg-primeColor text-white hover:bg-black duration-300">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default About;
