import React from "react";
import proj1 from "../assets/proj1.jpeg";
import proj2 from "../assets/proj2.jpeg";
import proj3 from "../assets/proj3.jpeg";
import proj4 from "../assets/proj4.jpeg";
import proj5 from "../assets/proj5.jpeg";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      image: proj1,
      title: "SmartStock Manager",
      desc: "Built an intelligent inventory management platform that automates stock tracking, detects inventory faults, and provides real-time insights for efficient warehouse operations.",
      tech: ["React", "TailwindCSS", "Nodejs", "Python", "CrewAI", "MySQL"],
    },
    {
      id: 2,
      image: proj2,
      title: "AgroMarket - A Buyer Farmer Marketplace",
      desc: "Built a 24-hour hackathon marketplace solution that connects farmers and buyers through secure authentication, personalized dashboards, and efficient product management.",
      tech: ["React", "TailwindCSS", "Nodejs", "MongoDB"],
    },
    {
      id: 3,
      image: proj3,
      title: "Real Estate Website",
      desc: "Built a responsive real estate website frontend featuring About Us, Projects Completed, Testimonials, and Contact Us sections with a modern and user-friendly design.",
      tech: ["React", "TailwindCSS"],
    },
    {
      id: 4,
      image: proj4,
      title: "AI Spam Classifier",
      desc: "Developed an intelligent spam detection system using Machine Learning and NLP, capable of classifying messages as spam or legitimate through text preprocessing, feature extraction, and a trained deep learning model.",
      tech: [
        "Python",
        "Django",
        "TensorFlow",
        "Scikit-learn",
        "SQLite",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      id: 5,
      image: proj5,
      title: "E-commerce Platform",
      desc: "Built a responsive e-commerce frontend featuring product listings, best-selling products, promotional sales, customer testimonials, and a newsletter subscription section with a modern shopping experience.",
      tech: ["React", "TailwindCSS"],
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="projects">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section Heading */}
        <div className=" mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">
            Projects.
          </h2>
          <div className="w-28 h-1 bg-primary mt-3 rounded-full"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover hover:opacity-90 transition-opacity duration-300"
              />

              <div className="p-5">
                <h3 className="text-lg font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-gray-700 text-gray-300 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};