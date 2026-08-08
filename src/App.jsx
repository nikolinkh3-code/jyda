import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Families from "./pages/Families";
import BloodDonors from "./pages/BloodDonors";
import Club from "./pages/Club";
import Gallery from "./pages/Gallery";
import Culture from "./pages/Culture";
import Donation from "./pages/Donation";


function InnerNav({ goHome }) {
  return (
    <header className="inner-nav">

      <button
        className="inner-brand"
        onClick={goHome}
      >
        <strong>JYDA</strong>

        <span>
          Jamtali Youth Development Association
        </span>
      </button>


      <button
        className="back-home"
        onClick={goHome}
      >
        ← Back to Home
      </button>

    </header>
  );
}


function Footer() {
  return (
    <footer>

      <div className="footer-inner">

        <div className="footer-brand">

          <strong>
            JYDA
          </strong>

          <p>
            Jamtali Youth Development Association
          </p>

        </div>


        <div className="footer-location">
          Jamtali • Khagrachari • Bangladesh
        </div>


        <small>
          © 2026 JYDA. Built for our community.
        </small>

      </div>

    </footer>
  );
}


function App() {
  const [page, setPage] = useState("home");
  const [showTop, setShowTop] = useState(false);


  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);


  const openPage = (newPage) => {

    setPage(newPage);

    setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }, 0);

  };


  const goHome = () => {

    setPage("home");

    setTimeout(() => {

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    }, 0);

  };


  return (
    <>

      {page === "home" ? (

        <Home openPage={openPage} />

      ) : (

        <div
          className={`inner-page ${page}-page`}
        >

          <InnerNav goHome={goHome} />

          {page === "families" && (
            <Families />
          )}

          {page === "blood" && (
            <BloodDonors />
          )}

          {page === "club" && (
            <Club />
          )}

          {page === "gallery" && (
            <Gallery />
          )}

          {page === "culture" && (
            <Culture />
          )}

          {page === "donation" && (
            <Donation />
          )}

        </div>

      )}


      <Footer />


      {showTop && (

        <button
          className="scroll-top"
          aria-label="Scroll to top"

          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >
          ↑
        </button>

      )}

    </>
  );
}

export default App;
