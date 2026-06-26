import React from 'react';
import hero from '../assets/hero.jpeg';

export const AboutSection = () => {
  return (
    <section
      className="text-white mt-0 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10">

        {/* Content */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            More <span className="text-primary">About</span> Me
          </h2>

          <p className="text-gray-400 text-base lg:text-lg mb-10 leading-relaxed">
            Beyond technology, I enjoy challenging myself through hackathons,
            collaborative projects, and continuous learning. I have worked on
            internship projects, university coursework, and self-initiated
            projects that have helped me strengthen my problem-solving,
            teamwork, and development skills.
            <br />
            <br />
            I enjoy turning ideas into practical solutions, exploring new
            technologies, and staying up to date with the latest trends in AI,
            automation, and software development.
          </p>
        </div>

        {/* Image */}
        <div
          className="flex justify-center md:justify-end"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border border-primary translate-x-4 translate-y-4"></div>

            <div className="relative z-10 w-full h-full rounded-full overflow-hidden border border-[#1f1641]">
              <img
                src={hero}
                alt="About"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};