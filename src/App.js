import React from "react";
import Layout from "./HOC/Layout/Layout";
import Contact from "./Containers/Contact/Contact";
import Landing from "./Containers/Landing/Landing";
import Offices from "./Containers/Offices/Offices";
import Portfolio from "./Containers/Portfolio/Portfolio";
import Services from "./Containers/Services/Services";
import Team from "./Containers/Team/Team";



function App() {
  
  return (
    <div>
      <Layout>
        <Landing />
        <Services />
        <Portfolio />
        <Offices />
        <Team />
        <Contact />
      </Layout>
    </div>
  );
}

export default App;
