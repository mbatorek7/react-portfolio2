import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-white mb-4 md:mb-0">
                    <Link to="/about" className="ml-3 text-xl">
                        Maegan Batorek
                    </Link>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                    <ul>
                        <div className="flex">
                            <li>
                                <Link to="/about" className="flex-1 mr-5 hover:text-white">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="flex-1 mr-5 hover:text-white">
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/skills" className="flex-1 mr-5 hover:text-white">
                                    Skills
                                </Link>
                            </li>
                            <li>
                                <Link to="/resume" className="flex-1 mr-5 hover:text-white">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="flex-1 mr-5 hover:text-white">
                                    Contact
                                </Link>
                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    );
}