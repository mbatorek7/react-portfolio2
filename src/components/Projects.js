import { CodeIcon } from "@heroicons/react/solid";
import React from "react";

import project1 from "../images/project-1.gif";
import project2 from "../images/project-2.gif";
import project3 from "../images/project-3.gif";
import project4 from "../images/project-4.gif";

const projects = [
    {
        id: 1,
        title: "Team Profile",
        subtitle: "Inquirer and Tests",
        description:
            "With this app, the user can easily create a team profile that can consist of manager(s), engineer(s), and intern(s). The web app created will displayed all necessary information and allow the user to email any employee that it chooses with the press of a button.",
        image: project1,
        link: "https://github.com/mbatorek7/team-profile",
    },
    {
        id: 2,
        title: "Note Taker",
        subtitle: "Express",
        description:
            "With this application, the user can create a list of notes. Each note is displayed on the side of the screen. When the user clicks on the note, they can see the title and text that was written. The user's notes will be saved unless the user presses the delete button.",
        image: project2,
        link: "https://batorek-note-taker.herokuapp.com/",
    },
    {
        id: 3,
        title: "E-commerce Back End",
        subtitle: "Object-relational mapping",
        description:
            "With this project, the user can get all categories, products, or tags along with related information. The user can also obtain a singular category, product, or tag by ID and they can delete or update by ID as well. The user can also create a new category, product, or tag.",
        image: project3,
        link: "https://github.com/mbatorek7/ORM",
    },
    {
        id: 4,
        title: "Work Day Scheduler",
        subtitle: "Third-Party APIs",
        description:
            "This application is designed to let you easily manage your busy workday schedule. It allows you to see the exact date and time at the top. With that in mind, you will also be able to see which timeslots have past, which one is the present, and which timeslots are upcoming based on the colors.",
        image: project4,
        link: "https://mbatorek7.github.io/workday-scheduler/",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <CodeIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                        Here are some of the few apps I created during my time at University of California-Irvine for the Coding Bootcamp.
                    </p>
                </div>
                <div className="flex flex-wrap -m-4">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.id}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <img
                                    alt="gallery"
                                    className="absolute inset-0 w-full h-full object-cover object-center"
                                    src={project.image}
                                />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}