import * as React from "react";
import { useState } from "react";

import { Routes, Route, Link } from "react-router-dom";

import * as apiClient from "./apiClient";
import Comments from "./components/Comments";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Navigation } from "./components/Navigation";
import { Testimonials } from "./components/Testimonials";
import JsonData from "./data/data.json";
import "./App.css";

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  const [features, setFeatures] = React.useState([]);
  const [gallery, setGallery] = React.useState([]);
  const [testimonials, setTestimonials] = React.useState([]);
  const loadFeatures = async () => setFeatures(await apiClient.getFeatures());
  const loadGallery = async () => setGallery(await apiClient.getGallery());
  const loadTestimonials = async () =>
    setTestimonials(await apiClient.getTestimonials());
  React.useEffect(() => {
    setLandingPageData(JsonData);
    loadFeatures();
    loadGallery();
    loadTestimonials();
  }, []);

  return (
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
        <Features data={features} />
        <Gallery data={gallery} />
        <Testimonials data={testimonials} />
        <Comments />
        <Contact data={landingPageData.Contact} />
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
