import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaJava,
  FaAngular,
  FaLaptopCode,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiMysql,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

export const Experience = () => {
  const skills = [
    { id: 1, name: "React.js", icon: <FaReact color="#61DAFB" /> },
    { id: 2, name: "Next.js", icon: <SiNextdotjs color="#FFFFFF" /> },
    { id: 3, name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { id: 4, name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { id: 5, name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { id: 6, name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { id: 7, name: "Python", icon: <FaPython color="#3776AB" /> },
    { id: 8, name: "Java", icon: <FaJava color="#ED8B00" /> },
    { id: 9, name: "Angular", icon: <FaAngular color="#DD0031" /> },
    { id: 10, name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
    { id: 11, name: "MySQL", icon: <SiMysql color="#4479A1" /> },
    { id: 12, name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
    { id: 13, name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
  ];

  return (
    <section id="experience" className="py-20 px-6 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Main Heading */}
        <div className="mb-12" data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Experience & <span className="text-primary">Technologies</span>
          </h2>

          <p className="text-gray-400 text-base lg:text-lg max-w-3xl">
            Through internships, hackathons, university coursework, and
            self-driven projects, I have gained practical experience building
            modern web applications, AI-powered solutions, and automation
            workflows.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold mb-6">
            Work Experience
          </h3>

          <div className="bg-[#111a3e] border border-[#1f1641] rounded-2xl p-6 hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)] transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-start gap-5">
              
              {/* Icon */}
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FaLaptopCode className="text-primary text-3xl" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h4 className="text-xl font-semibold">
                    Frontend Development Intern
                  </h4>

                  <span className="text-primary font-medium">
                    3 Months
                  </span>
                </div>

                <p className="text-gray-300 mt-1 font-medium">
                  Virtuosoft
                </p>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Worked as a Frontend Development Intern at Virtuosoft,
                  contributing to the development of responsive and
                  user-friendly web applications. Collaborated with the
                  development team to build modern interfaces using React.js,
                  Next.js, and Angular while translating Figma designs into
                  functional applications. Gained hands-on experience in
                  component-based development, UI implementation, and industry
                  best practices.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  {["React.js", "Next.js", "Angular", "Figma"].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technologies */}
        <div className="mb-8" data-aos="fade-right">
          <h3 className="text-2xl font-bold mb-4">
            Technologies I've Worked With
          </h3>

          <p className="text-gray-400">
            A collection of technologies I've used across internship,
            hackathons, academic projects, and personal development work.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
          data-aos="fade-up"
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-[#111a3e] border border-[#1f1641] hover:border-primary/50 hover:shadow-[0_0_20px_-5px_rgba(6,162,194,0.2)] transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {skill.icon}
              </div>

              <p className="text-gray-300 text-center font-medium">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};