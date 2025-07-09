import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import CallToAction from "./components/CallToAction";
import Intro from "./components/Intro";
import Introduction from "./components/Introduction";
import Navigation from "./components/Navigation";
import RefProvider from "./contexts/RefProvider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <RefProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <Introduction>
                  <Intro />
                  <AboutMe />
                  <CallToAction />
                </Introduction>
              }
            />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </RefProvider>
    </>
  );
}

export default App;
