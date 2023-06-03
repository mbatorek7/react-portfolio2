import avatarImage from "../images/avatar.jpg"

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hi, I'm Maegan!
                        <br className="hidden lg:inline-block" />I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        I currently work full time at Target as a Starbucks Barista.
                        I graduated Magna Cum Laude from Valparaiso University in May 2021
                        with a degree in Computer Science and Engineering.
                        I have learned to code in C, C++, HTML, CSS, and JavaScript.
                        I am also familiar with MATLAB, Arduino, Git, and MySQL.
                        Outside of work, I love film and photography.
                        Music is my life and I love it in all forms. I mostly collect
                        records and cassette tapes.
                        I would love to be able to travel more and experience new things.
                        With my current level of experience and education, I am looking for a position
                        as a Computer Programmer or Software Engineer.
                        In a world forever changing by technology, I want to be part of that change
                        and help make people's lives easier.
                    </p>
                    <div className="flex justify-center">
                        <a
                            href="#contact"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            Work With Me
                        </a>
                        <a
                            href="#projects"
                            className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                            See My Past Work
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src={avatarImage}
                    />
                </div>
            </div>
        </section>
    );
}