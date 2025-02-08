import React from "react";
import Dash from "./Dash";
import Header from "./Header";
import NewsCarousel from "./NewsCarousel";

function Home() {
  return (
    <div>
      <Header />
      <NewsCarousel />
      <Dash />
    </div>
  );
}

export default Home;
