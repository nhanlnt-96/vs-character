import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";
import Roadmap from "./components/roadmap";
import FAQ from "./components/faq";
import Team from "./components/team";

function App() {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const handleGetHeaderHeight = () =>
      setHeaderHeight(headerRef.current.offsetHeight);

    window.addEventListener("resize", handleGetHeaderHeight);

    handleGetHeaderHeight();

    return () => window.removeEventListener("resize", handleGetHeaderHeight);
  }, [headerRef.current]);

  return (
    <>
      <Header ref={headerRef} />
      <div className="main-content">
        <Banner headerHeight={headerHeight} />
        <Roadmap />
        <Team/>
        <FAQ />
      </div>
    </>
  );
}

export default App;
