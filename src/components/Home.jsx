import React from "react";
import Dash from "./Dash";
import Header from "./Header";
import NewsCarousel from "./NewsCarousel";
import Purpose from "./Purpose";

function Home() {
  return (
    <div>
      <Header />
      <NewsCarousel />
      <Purpose />
      <Dash />
    </div>
  );
}

export default Home;
