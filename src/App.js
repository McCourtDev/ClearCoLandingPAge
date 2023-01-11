import React from "react";
import Navbar from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Staff } from "./components/Staff";
import { Services } from "./components/Services";
import { Clients } from "./components/Clients";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Staff />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
