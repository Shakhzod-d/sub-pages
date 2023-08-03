import React from "react";
import { Header, Carousel } from "../../components";
import { slidesArr } from "../../utils";

import "./Home.css";

export const Home = () => {
  return (
    <div className="home">
      <Header />
      <Carousel slides={slidesArr} />
    </div>
  );
};
