import React from "react";
import MainContent from "../components/MainContent";
import NavBar from "/components/NavBar";
import Footer from "/components/Footer";

function FullComponent() {
  return (
    <div>
      <NavBar />
      <MainContent />
      <Footer />
    </div>
  );
}

export default FullComponent;
