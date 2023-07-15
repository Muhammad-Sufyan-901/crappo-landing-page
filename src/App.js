import React, { useEffect, useState } from "react";
import Aos from "aos";
import { Calculate, Features, Footer, Header, Hero, NavMobile, Newsletter, Stats, Trade, Why } from "./components";
import "aos/dist/aos.css";

function App() {
  const [navMobile, setNavMobile] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400,
    });
  });

  return (
    <div className="overflow-hidden">
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* Navbar Mobile */}
      <div className={`${navMobile ? "right-0" : "-right-full"} fixed z-10 top-0 h-full transition-all duration-200`}>
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <Trade />
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
