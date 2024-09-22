import React from 'react';
import Navbar from "./Components/navBar";
import Home from "./pages/Home";
import Skill from "./pages/Skill";
import Experience from "./pages/Experience";
import "./styledComponents/app.css";
import StarsCanvas from './Components/stars';
import Work from './pages/Work';

const App = () => {
  return (
    <div className="App">
      {/* <ParticlesBackground /> This should be at the top of your component tree */}
      <StarsCanvas />
      <Navbar />

      {/* Main sections */}
      <section id="home">
        <Home />
      </section>
      
      <section id="skills">
        <Skill />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="work">
        <Work />
      </section>
    </div>
  );
};

export default App;
