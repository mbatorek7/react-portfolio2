import React from "react";
import { Route, Routes } from "react-router-dom";
import { tsParticles } from "tsparticles-engine";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import Success from "./components/Success";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">

            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/contact" element={<Success />} />
            </Routes>

            <Footer />
        </main>
    );
}