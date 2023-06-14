import React from "react";

export default function Footer() {
    return (
        <footer id="footer" className="bg-gray-700">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <a href="https://flowbite.com/" className="flex items-center">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Heart-SG2001-transparent.png/1200px-Heart-SG2001-transparent.png" className="h-8 mr-3" alt="" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">M. Batorek</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li>
                                    <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow me</h2>
                            <ul className="text-gray-600 dark:text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a href="https://github.com/mbatorek7" className="hover:underline ">Github</a>
                                </li>
                                <li className="mb-4">
                                    <a href="https://www.linkedin.com/in/maegan-batorek-8b518514b/" className="hover:underline ">LinkedIn</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
