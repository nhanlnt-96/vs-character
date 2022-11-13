import React, { useEffect, useRef, useState } from "react";
import Header from "./components/header";
import Banner from "./components/banner";

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
      <Banner headerHeight={headerHeight} />
    </>
  );
}

export default App;
