import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Resume from "./components/Resume";
import ViewResume from "./components/ViewResume";

export default function App() {
    return (
        <main className="text-gray-400 bg-gray-900 body-font">
            <Navbar />
            <Routes>
                <Route path="/about" element={<About />} />
            </Routes>

            <Projects />
            <Skills />
            <Resume />
            <ViewResume />
            <Contact />
            <Footer />
        </main>
    );
}