import React, { useEffect, useState } from "react";
import About from "./components/about";
import Facilities from "./components/facilities/facilities";
import Footer from "./components/footer";
import BhawanDay from "./components/bhawanDay";
import Events from "./components/events";
import CelebrationsAndTogetherness from "./components/celebrationAndTogetherness";
import Landing from "./components/landing";
import Navbar from "./components/navbar";
import OtherFacilities from "./components/otherFacilities";
import TeamSection from "./components/team/teamSection";

export default function App() {
  const [pageLoaded, setPageloaded] = useState(false);

  useEffect(() => {
    setPageloaded(true);
  }, []);

  return (
    pageLoaded && (
      <React.Fragment>
        <Navbar />
        <Landing />
        <div className="landingDiv" />
        {/* <About /> */}
        <Facilities />
        {/* <OtherFacilities /> */}
        <TeamSection />

        <Events />
        <BhawanDay />
        <CelebrationsAndTogetherness />
        <Footer />
      </React.Fragment>
    )
  );
}
