import * as React from "react";
import { useState, useEffect } from "react";

import { Routes, Route, Link } from "react-router-dom";

import { About } from "./components/About";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Services } from "./components/Services";
import { Team } from "./components/Team";
import { Testimonials } from "./components/Testimonials";
// import { Contact } from "./components/Contact";
import JsonData from "./data/data.json";
// import SmoothScroll from "smooth-scroll";
import "./App.css";


// export const scroll = new SmoothScroll('a[href*="#"]', {
//   speed: 1000,
//   speedAsDuration: true,
// });


// import Tasks from "./Tasks";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return(
  <main>
    <nav>
      <Link to="/">Home</Link> | <Link to="dashboard">Dashboard</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery}/>
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      {/* <Contact data={landingPageData.Contact} /> */}
    </div>
 

  </main>
  );
};

const Home = () => (
  <>
    <h1>{process.env.REACT_APP_TITLE}</h1>
    <h2>{process.env.REACT_APP_SUBTITLE}</h2>
    {/* <Tasks /> */}
  </>
);

const Dashboard = () => (
  <>
    <h1>Dashboard</h1>
  </>
);

export default App;
